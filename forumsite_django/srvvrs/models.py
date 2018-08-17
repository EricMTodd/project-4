from django.db import models


class Thread(models.Model):
    thread_title = models.CharField(max_length=100)
    thread_author = models.CharField(max_length=100)
    thread_date = models.DateTimeField(auto_now_true=True)

    def __str__(self):
        return self.title


class Post(models.Model):
    post_title = models.CharField(max_length=100)
    post_author = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    post_date = models.DateTimeField(auto_now_true=True)

    def __str__(self):
        return self.content
