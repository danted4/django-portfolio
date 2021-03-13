from django.db import models

# Create your models here.

class HomePageModel(models.Model):
    app_title = models.CharField(max_length=100);
    heading = models.CharField(max_length=100);
    main_desc = models.CharField(max_length=100);
    portfolios = models.CharField(max_length=100);
    footer = models.CharField(max_length=100);