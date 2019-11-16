from django.urls import path
from .views import BlogListView, BlogDetailView, CommentListView, CommentDetailView

urlpatterns = [
    path('blogs', BlogListView.as_view()),
    path('blogs/<int:pk>/', BlogDetailView.as_view()),
    path('blogs/<int:pk>/comments/', CommentListView.as_view()),
    path('comments/<int:pk>/', CommentDetailView.as_view())
]
