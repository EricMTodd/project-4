from rest_framework import serializers
from .models import Thread, Post
from django.contrib.auth.models import User


class ThreadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Thread
        fields = ('url', 'id', 'thread_title',
                  'thread_author', 'thread_date', 'posts')


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('url', 'id', 'post_author',
                  'content', 'post_date', 'thread_id')


class UserSerializer(serializers.ModelSerializer):
    threads = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Thread.objects.all())

    posts = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Post.objects.all())

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'posts', 'threads')
