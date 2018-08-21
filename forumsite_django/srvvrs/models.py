from django.db import models

class Thread(models.Model):
    thread_title = models.CharField(max_length=100)
    thread_author = models.CharField(max_length=100)
    thread_date = models.DateTimeField('date published')


    def __str__(self):
        return self.thread_title

class Post(models.Model):
    post_title = models.CharField(max_length=100)
    post_author = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    post_date = models.DateTimeField('date published')
    thread_id = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='threads')

    def __str__(self):
        return self.content

## One of the validator classes
class SignUp(models.Model):
    email = models.EmailField()
    full_name = models.CharField(max_length=100, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def _unicode_(self):    # Python 3.3 is _str_
        return self.email

class User(models.Model):
    username = models.CharField(max_length=100)
    # posts = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='posts')
    # threads = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='threads')

    def __str__(self):
        return self.content
