
# Create your views here.


# Erica's Code
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.urls import reverse
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.http import Http404, HttpResponseRedirect, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Thread, Post
from .serializers import ThreadSerializer, PostSerializer, UserSerializer

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

#
# def home(request):
#     title = 'Welcome'
#     if request.user.is_authenticated():
#         title = "My Title %s" %(request.user)
#     # Add a form
#     context = {
#         "title": title,
#     }
#     return render(request, "home.html", context)

class ThreadList(APIView):

    def get(self, request, format=None):
        threads = Thread.objects.all()
        serializer = ThreadSerializer(threads, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ThreadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ThreadDetail(APIView):

    def get_object(self, id):
        try:
            return Thread.objects.get(id=id)
        except Thread.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        thread = self.get_object(id)
        serializer = ThreadSerializer(thread)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        thread = self.get_object(id)
        serializer = ThreadSerializer(thread, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        thread = self.get_object(id)
        thread.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PostList(APIView):

    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostDetail(APIView):
    # @login_required
    def get_object(self, id):
        try:
            return Post.objects.get(id=id)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        post = self.get_object(id)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        post = self.get_object(id)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        post = self.get_object(id)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            # log the user in
        return redirect('threads')
    else:
        form = UserCreationForm()
    return render(request, 'accounts/signup.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        # form = AuthenticationForm(data=request.POST)
        username = request.POST.get('username') # new
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('threads'))
        else:
            messages.error(request, "Bad username or password")
        # if form.is_valid():
        #     # log in the user
        #     return redirect('threads')
    else:
        form = AuthenticationForm()
    return render(request, "accounts/login.html", {'form': form})
