from django.db import models


class Thread(models.Model):
    thread_title = models.CharField(max_length=100)
    thread_author = models.CharField(max_length=100)
    thread_date = models.DateTimeField('date published')

    def __str__(self):
        return self.title


class Post(models.Model):
    post_title = models.CharField(max_length=100)
    post_author = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    post_date = models.DateTimeField('date published')
    thread_id = models.ForeignKey(
        Thread, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return self.content
