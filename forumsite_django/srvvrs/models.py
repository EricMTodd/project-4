from django.db import models

# Michael slacked this to me
# I (Erica) added thread to author for readability and added thread_date since it's in the wireframe


class Thread(models.Model):
    title = models.CharField(max_length=100)
    thread_author = models.CharField(max_length=100)
    thread_date = models.DateTimeField(auto_now_true=True)

    def __str__(self):
        return self.name

# I (Erica) added post to author for readability and added post_date since it's in the wireframe


class Post(models.Model):
    post_author = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    post_date = models.DateTimeField(auto_now_true=True)

    # shouldn't there be a foreign key linking post to thread?

    def __str__(self):
        return self.name
