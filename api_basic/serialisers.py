from rest_framework import serializers
from .models import HomePageModel



class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePageModel
        fields = ('app_title','heading','main_desc','portfolios','footer')