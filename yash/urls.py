from django.urls import path
from .views import *
app_name='yash'

urlpatterns=[
    path('',home,name='home'),
    path('course/',course,name='course'),
    path('bootcamp/',bootcamp,name='bootcamp'),
    path('callback/',callback,name='callback'),
    path('sign/',sign,name='sign'),
]