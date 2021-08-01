from django.db import models
import datetime


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, null=False)
    deleted_at = models.DateTimeField(null=True, default=None)
    is_deleted = models.BooleanField(default=False, null=False)

    class Meta:
        abstract = True