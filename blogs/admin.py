from django.contrib import admin
from .models import Blog, BlogImage, Comment, Tag

# Register your models here.

class ImageInline(admin.TabularInline):
    model = BlogImage
    extra = 13

class CommentInline(admin.TabularInline):
    model = Comment
    extra = 200

class BlogAdmin(admin.ModelAdmin):
    inlines = [ ImageInline, CommentInline, ]

admin.site.register(Blog)
admin.site.register(BlogImage)
admin.site.register(Comment)
admin.site.register(Tag)
