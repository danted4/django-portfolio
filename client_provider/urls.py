from django.urls import path
from client_provider import views

urlpatterns = [
    path('', views.get_client)
]
