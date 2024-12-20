from django.urls import include, path
from rest_framework import routers

from . import views


urlpatterns = [
    path('user/login', views.Login.as_view(), name='login'),
    path('user/info', views.Profile.as_view(), name='info')
]