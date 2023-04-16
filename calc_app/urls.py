from django.urls import path
from calc_app import views

urlpatterns = [
    path('', views.index, name = 'index'),
]


