# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Blog, Tag, BlogImage
from .serializers import BlogSerializer, TagSerializer, BlogImageSerializer

# Create your views here.
class BlogListView(ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class TagListView(ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagDetailView(RetrieveAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class BlogImageListView(ListAPIView):
    queryset = BlogImage.objects.all()
    serializer_class = BlogImageSerializer

class BlogImageDetailView(RetrieveAPIView):
    queryset = BlogImage.objects.all()
    serializer_class = BlogImageSerializer
