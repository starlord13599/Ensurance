import json

from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from django.contrib.auth import authenticate
from django.http.response import HttpResponse, JsonResponse
from rest_framework.response import Response

from .models import User
from .utils import get_refresh_token_for_user
from .serializers import UserSerializer, UserRegister

# Create your views here.


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            User.objects.get(email=email)
        except User.DoesNotExist:
            return JsonResponse({"message": "User Does Not Exist"}, status=status.HTTP_401_UNAUTHORIZED)
        user = authenticate(email=email, password=password)
        if user:
            refresh_tokens = get_refresh_token_for_user(user)
            response = {}
            response['tokens'] = refresh_tokens
            response['user_profile'] = user.__dict__
            data = UserSerializer(response)
            return Response(data.data, status=status.HTTP_200_OK)
        else:
            return JsonResponse({"message": "Invalid Password"}, status=status.HTTP_401_UNAUTHORIZED)


class RegisterView(CreateAPIView):
    queryset = User
    serializer_class = UserRegister