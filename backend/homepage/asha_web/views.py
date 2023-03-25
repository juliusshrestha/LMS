from django.shortcuts import render, redirect, HttpResponseRedirect, HttpResponse
from django.conf import settings
# from django.core.mail import send_mail
# from asha_web.models import Contact
# Create your views here.


# def home(request):
#     return render(request, "home.html")
# def post(request):
#     if request.method == "POST":

#         name = request.POST['name']
#         address = request.POST['address']
#         phonenumber = request.POST['phonenumber']
#         email = request.POST['email']

#         message = request.POST['message']
#         email_from = settings.EMAIL_HOST_USER
#         recipient_list = ['tangnamimagar0223@gmail.com']
#         send_mail(subject, message, email_from, recipient_list)

#     return render(request, 'admin/success.html',{'name' : name})


# def upload(request):
#     if request.method == 'POST':
#         name = request.POST['name']
#         phonenumber = request.POST['phonenumber']
#         email = request.POST['email']
#         message = request.POST['message']
#         cv = request.FILES['Resume/CV']


#     return render(request, 'admin/success.html', {'name': name})

def error_404(request, exception):
    context = {}
    return render(request, '404.html', context)
