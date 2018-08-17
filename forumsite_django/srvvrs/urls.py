from django.urls import path
from . import views

urlpatterns = [
    path('threads/', views.thread_list),
    path('threads/<int:id>', views.thread_detail),
    path('posts/', views.post_list),
    path('posts/<int:id>', views.post_detail),
]
