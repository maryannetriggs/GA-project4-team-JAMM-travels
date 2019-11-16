# pylint: disable=no-member
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated, SAFE_METHODS
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_401_UNAUTHORIZED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT 
from .models import Blog, Tag, BlogImage, Comment
from .serializers import BlogSerializer, CommentSerializer, PopulatedBlogSerializer

class IsAdminUserOrReadOnly(IsAdminUser):

    def has_permission(self, request, view):
        is_admin = super().has_permission(request, view)
        return request.method in SAFE_METHODS or is_admin

# Create your views here.
class BlogListView(APIView):

    permission_classes = (IsAdminUserOrReadOnly, )

    def get(self, _request):
        blogs = Blog.objects.all()
        serialized_blogs = PopulatedBlogSerializer(blogs, many=True)
        return Response(serialized_blogs.data)

    def post(self, request):
        blog = BlogSerializer(data=request.data)
        if blog.is_valid():
            blog.save()
            return Response(blog.data, status=HTTP_201_CREATED)
        return Response(blog.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class BlogDetailView(APIView):

    permission_classes = (IsAdminUserOrReadOnly, )

    def get(self, _request, pk):
        blog = Blog.objects.get(pk=pk)
        serialized_blog = PopulatedBlogSerializer(blog)
        return Response(serialized_blog.data)

    def put(self, request, pk):
        blog = Blog.objects.get(pk=pk)
        updated_blog = BlogSerializer(blog, data=request.data)
        if updated_blog.is_valid():
            updated_blog.save()
            return Response(updated_blog.data)
        return Response(updated_blog.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        blog = Blog.objects.get(pk=pk)
        blog.delete()
        return Response(status=HTTP_204_NO_CONTENT)

class CommentListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        request.data['author'] = request.user.id
        request.data['blog'] = pk
        comment = CommentSerializer(data=request.data)
        if comment.is_valid():
            comment.save()
            blog = Blog.objects.get(pk=pk)
            serialized_blog = PopulatedBlogSerializer(blog)
            return Response(serialized_blog.data)
        return Response(comment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def put(self, request, pk):
        comment = Comment.objects.get(pk=pk)
        request.data['author'] = request.user.id
        request.data['blog'] = comment.blog.id
        updated_comment = CommentSerializer(comment, data=request.data)
        if request.user.id is not comment.author.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        if updated_comment.is_valid():
            updated_comment.save()
            return Response(updated_comment.data)
        return Response(updated_comment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        comment = Comment.objects.get(pk=pk)
        if _request.user.id is not comment.author.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        comment.delete()
        return Response(status=HTTP_204_NO_CONTENT)