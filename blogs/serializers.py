from rest_framework import serializers
from .models import Blog, BlogImage, Comment, Tag

class NestedBlogImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogImage
        fields = ('id', 'image')

class NestedTagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'tag')

class NestedCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'comment', 'date')

class BlogSerializer(serializers.ModelSerializer):

    images = NestedBlogImageSerializer(many=True)
    comments = NestedCommentSerializer(many=True)
    tags = NestedTagSerializer(many=True)

    def create(self, data):
        tag_data = data.pop('tag')

        blog = Blog(**data)
        blog.tag = [Tag.objects.get(**tag_data) for tag_data in tags_data]
        blog.save()
        blog.tags.set(tags)
        return blog

    def update(self, blog, data):
        tag_data = data.pop('tag')

        blog.title = data.get('title', blog.title)
        blog.subtitle = data.get('subtitle', blog.subtitle)
        blog.author = data.get('author', blog.author)
        blog.date_published = data.get('date_published', blog.date_published)
        blog.story = data.get('story', blog.story)

        tags = [tag.objects.get(**tag_data) for tag_data in tags_data]

        blog.save()
        blog.tags.set(tags)
        return blog

    class Meta:

        model = Blog
        fields = ('id', 'title', 'subtitle', 'author', 'date_published', 'story', 'images', 'tags', 'comments')
