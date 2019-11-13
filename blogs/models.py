from django.db import models

# Create your models here.

# class Comment(models.Model):

class Tag(models.Model):
    tag = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.tag}'

class Blog(models.Model):
    title = models.CharField(max_length=100, unique=True)
    subtitle = models.CharField(max_length=200)
    author = models.CharField(max_length=50)
    date_published = models.DateField(auto_now=False)
    images = models.CharField(max_length=200)
    story = models.CharField(max_length=50)
    tags = models.ManyToManyField(
        Tag,
        related_name='blogs',
        blank=True
    )

    def __str__(self):
        return f'{self.title}'
