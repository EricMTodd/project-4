from rest_framework import serializers
from .models import Thread, Post

class ThreadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
    	model = Thread
    	fields = ('id', 'thread_title', 'thread_author', 'thread_date',)



class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'post_title', 'post_author', 'content', 'post_date', 'thread_id')
