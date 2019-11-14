from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(('email address'), blank=False)
    country_of_residence = models.CharField(max_length=100)
    profile_image = models.CharField(max_length=500, blank=True)
