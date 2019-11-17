from django.urls import path
from .views import BlogListView, BlogDetailView, BlogImageListView, BlogImageDetailView, CommentListView, CommentDetailView, TagListView, TagDetailView

urlpatterns = [
    path('blogs/', BlogListView.as_view()),
    path('blogs/<int:pk>/', BlogDetailView.as_view()),
    path('blogs/<int:pk>/comments/', CommentListView.as_view()),
    path('blogimages/', BlogImageListView.as_view()),
    path('blogimages/<int:pk>/', BlogImageDetailView.as_view()),
    path('comments/<int:pk>/', CommentDetailView.as_view()),
    path('tags/', TagListView.as_view()),
    path('tags/<int:pk>/', TagDetailView.as_view())
]
