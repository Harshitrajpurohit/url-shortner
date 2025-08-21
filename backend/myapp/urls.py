from django.urls import path
from . import views

urlpatterns = [
    path('', views.say_hello),
    path('create/', views.create),
    path('<str:key>/', views.get_data, name='get_data'),
]

