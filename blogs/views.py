from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Blog
from .serializers import BlogSerializer

# Create your views here.

class ListView(APIView):

    def get(self, _request):
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)

        return Response(serializer.data)


class DetailView(APIView):

    def get(self, _request, pk):
        blog = Blog.objects.get(pk=pk)
        serializer = BlogSerializer(blog)

        return Response(serializer.data)
