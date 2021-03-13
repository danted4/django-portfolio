from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import HomePageModel
from .serialisers import HomeSerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def get_home(request):

    if request.method == 'GET':
        data = HomePageModel.objects.all()
        serializedData = HomeSerializer(data, many=True)
        return JsonResponse(serializedData.data, safe=False, status = 200)

    elif request.method == 'POST':
        payload = JSONParser().parse(request)
        serializedData = HomeSerializer(data=payload)

        if serializedData.is_valid():
            serializedData.save()
            return JsonResponse(serializedData.data, status = 201)
        return JsonResponse(serializedData.errors, status = 400)