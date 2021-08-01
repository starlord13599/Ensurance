from django.db import models
from django.contrib.auth.models import AbstractUser

from core.enums import (
    UserRoles
)
from core.models import BaseModel

# Create your models here.


class User(AbstractUser, BaseModel):
    role = models.CharField(
        max_length=50, choices=UserRoles.choices(), null=False)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField(default=None)
    phone_number = models.CharField(max_length=10, default=None, null=False, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        db_table = "user"
