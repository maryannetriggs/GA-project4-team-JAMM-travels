from django.db import models
from django.contrib.auth import get_user_model
from PIL import Image
User = get_user_model()

# Create your models here.

# class Comment(models.Model):

class Tag(models.Model):
    tag = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.tag}'

class Blog(models.Model):
    title = models.CharField(max_length=100, unique=True)
    subtitle = models.CharField(max_length=200)
    author = models.CharField(max_length=50)
    date_published = models.DateField(auto_now=False)
    story = models.CharField(max_length=50)
    tags = models.ManyToManyField(
        Tag,
        related_name='blogs'
        )

    def __str__(self):
        return f'{self.title}'

class BlogImage(models.Model):
    blog = models.ForeignKey(
        Blog,
        related_name='images',
        on_delete=models.DO_NOTHING
    )
    image = models.ImageField(
        upload_to='images/'
    )
    
    def __str__(self):
        return f'{self.image}'

class Comment(models.Model):
    author = models.ForeignKey(
        User,
        related_name='comments',
        on_delete=models.CASCADE
    )
    blog = models.ForeignKey(
        Blog,
        related_name='comments',
        on_delete=models.CASCADE
    )
    comment = models.CharField(max_length=255)
    date = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.comment}'


