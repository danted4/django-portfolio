from django.urls import path
from api_basic import views

urlpatterns = [
    path('service/', views.get_home)
]
