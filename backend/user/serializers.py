from django.db.models import fields
from user.models import User
from rest_framework import serializers


class UserProfile(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'role',
                  'created_at', 'deleted_at', 'is_deleted')


class UserSerializer(serializers.Serializer):
    tokens = serializers.DictField()
    user_profile = UserProfile()


class UserRegister(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'role', 'first_name',
                  'last_name', 'date_of_birth', 'phone_number', 'password')
        extra_kwargs = {
            'password':{
                'write_only':True
            }
        }
