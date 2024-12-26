from django.shortcuts import render

def home(request):
    return render(request,'home.html')


def course(request):
    return render(request,'course.html')

def bootcamp(request):
    return render(request,'bootcamp.html')

def callback(request):
    return render(request,'callback.html')

def sign(request):
    return render(request,'sign.html')
