from django.contrib.auth.models import User
from .models import Thread, Post
from rest_framework import generics
from .serializers import ThreadSerializer, PostSerializer, UserSerializer
from rest_framework import renderers


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ThreadList(generics.ListCreateAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer


class ThreadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
