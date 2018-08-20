from django.urls import path
from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import renderers
from .views import ThreadViewSet, PostViewSet, UserViewSet, api_root
from . import views
from rest_framework import renderers

thread_list = ThreadViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
thread_detail = ThreadViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})
thread_highlight = ThreadViewSet.as_view({
    'get': 'highlight'
}, renderer_classes=[renderers.StaticHTMLRenderer])

post_list = PostViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
post_detail = PostViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})
post_highlight = PostViewSet.as_view({
    'get': 'highlight'
}, renderer_classes=[renderers.StaticHTMLRenderer])

user_list = UserViewSet.as_view({
    'get': 'list'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve'
})


urlpatterns = [
    path('', views.api_root),
    path('', thread_list, name='thread-list'),
    path('threads/<int:id>', thread_detail, name='thread-detail'),
    path('threads/<int:id>/highlight/',
         thread_highlight, name='thread-highlight'),
    path('posts/', post_list, name='post-list'),
    path('posts/<int:id>', post_detail, name='post-detail'),
    path('posts/<int:id>/highlight/',
         post_highlight, name='post-highlight'),
    path('users/', user_list, name='user-list'),
    path('users/<int:id>', user_detail, name='user-detail'),
]
urlpatterns = format_suffix_patterns(urlpatterns)
