from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from srvvrs.models import Srvvrs
from srvvrs.serializers import SrvvrsSerializer


# INDEX and NEW
@csrf_exempt
def srvvrs_list(request):
    if request.method == "GET":
        srvvrs = Srvvrs.objects.all()
        serializer = SrvvrsSerializer(srvvrs, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = SrvvrsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


#DELETE, UPDATE, READ (DETAILS)
@csrf_exempt
def srvvrs_detail(request, pk):
    try:
        srvvrs = Srvvrs.objects.get(pk=pk)
    except Srvvrs.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = SrvvrsSerializer(srvvrs)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = SrvvrsSerializer(srvvrs, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error, status=400)

    elif request.method == "DELETE":
        srvvrs.delete()
        return HttpResponse(status=204)
