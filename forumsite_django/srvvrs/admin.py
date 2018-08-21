# Register your models here.
from django.contrib import admin
from .models import Thread, Post, SignUp
from .forms import SignUpForm

class SignUpAdmin(admin.ModelAdmin):
    list_display = ['_unicode_', 'timestamp', 'updated']
    form = SignUpForm
    # class Meta:
    #     model = SignUp

admin.site.register(Thread)
admin.site.register(Post)
admin.site.register(SignUp, SignUpAdmin)
