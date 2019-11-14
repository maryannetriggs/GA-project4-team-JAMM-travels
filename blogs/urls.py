from django.urls import path
from .views import BlogListView, BlogDetailView, TagListView, TagDetailView, BlogImageListView, BlogImageDetailView

urlpatterns = [
    path('blogs', BlogListView.as_view()),
    path('blogs/<int:pk>/', BlogDetailView.as_view()),
    path('tags', TagListView.as_view()),
    path('tags/<int:pk>/', TagDetailView.as_view()),
    path('blogImages', BlogImageListView.as_view()),
    path('blogImages/<int:pk>/', BlogImageDetailView.as_view())
]
