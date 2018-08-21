from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import Thread, Post
from .serializers import ThreadSerializer, PostSerializer


# INDEX and NEW
@csrf_exempt
def thread_list(request):
    if request.method == "GET":
        thread = Thread.objects.all()
        serializer = ThreadSerializer(thread, many=True)
        print(thread)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ThreadSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


#DELETE, UPDATE, READ (DETAILS)
@csrf_exempt
def thread_detail(request, id):
    try:
        thread = Thread.objects.get(id=id)
    except Thread.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = ThreadSerializer(thread)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = ThreadSerializer(thread, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error, status=400)

    elif request.method == "DELETE":
        thread.delete()
        return HttpResponse(status=204)


# INDEX and NEW
@csrf_exempt
def post_list(request):
    if request.method == "GET":
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


#DELETE, UPDATE, READ (DETAILS)
@csrf_exempt
def post_detail(request, id):
    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = PostSerializer(post)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = PostSerializer(post, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error, status=400)

    elif request.method == "DELETE":
        post.delete()
        return HttpResponse(status=204)
