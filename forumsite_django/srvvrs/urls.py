from django.urls import path
from . import views

urlpatterns = [
    path('', views.thread_list),
    path('thread/<int:id>', views.thread_detail),
    path('post/', views.post_list),
    path('post/<int:id>', views.post_detail),


]
