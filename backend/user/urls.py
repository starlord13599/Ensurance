
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import (
    LoginView,
    RegisterView,
)

urlpatterns = [
    path("login", LoginView.as_view(), name="login_view"),
    path("register", RegisterView.as_view(), name="register_view"),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]
