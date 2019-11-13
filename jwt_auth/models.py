from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    profile_image = models.CharField(max_length=500, blank=True)
    country_of_residence = models.CharField(max_length=100)
