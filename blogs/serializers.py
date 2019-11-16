from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Blog, BlogImage, Comment, Tag
User = get_user_model()

class BlogImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogImage
        fields = ('id', 'blog', 'image')

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'author', 'blog', 'comment', 'date')

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'tag')

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'profile_image')

class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ('id', 'title', 'subtitle', 'author', 'date_published', 'story', 'images', 'tags', 'comments')
        extra_kwargs = {'comments': {'required': False}}

class PopulatedBlogImageSerializer(BlogImageSerializer):

    blog = BlogSerializer()

class PopulatedCommentSerializer(CommentSerializer):

    author = UserSerializer()
    blog = BlogSerializer()

class PopulatedBlogSerializer(BlogSerializer):

    comments = PopulatedCommentSerializer(many=True)
    images = PopulatedBlogImageSerializer(many=True)
    tags = TagSerializer(many=True)
