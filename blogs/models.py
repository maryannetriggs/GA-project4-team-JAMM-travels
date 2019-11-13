from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200)
    author = models.CharField(max_length=50)
    images = models.CharField(max_length=200)
    story = models.CharField(max_length=50)
    tags = models.CharField(max_length=50)