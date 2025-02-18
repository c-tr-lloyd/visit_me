from django.urls import path 
from . import views 



urlpatterns = [
    path('set-csrf-token', views.set_csrf_token, name='set_csrf_token'), 
    path('funny', views.funny, name='funny'), 
]