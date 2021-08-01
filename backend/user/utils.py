from rest_framework_simplejwt.tokens import RefreshToken


def get_refresh_token_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        "refresh_token": str(refresh),
        "access_token": str(refresh.access_token)
    }
