from rest_framework import serializers
from .models import Thread, Post
from django.contrib.auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    threads = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Thread.objects.all())

    posts = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Post.objects.all())

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'posts', 'post_author')


class ThreadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Thread
        fields = ('url', 'highlight', 'id', 'thread_title',
                  'thread_author', 'thread_date',)
        thread_author = serializers.ReadOnlyField(
            source='thread_author.username')
        highlight = serializers.HyperlinkedIdentityField(
            view_name='thread-highlight', format='html')


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('url', 'highlight', 'id', 'post_author',
                  'content', 'post_date', 'thread_id')
        post_author = serializers.ReadOnlyField(source='post_author.username')
        highlight = serializers.HyperlinkedIdentityField(
            view_name='post-highlight', format='html')
