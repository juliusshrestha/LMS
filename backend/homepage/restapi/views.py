from django.db.models import Q
from asha_web.forms import GalleryImageForm
from django.core.mail import send_mail
from asha_web.models import Team, Blog, Career, Vacancy, Contact, Iconbox, Workdetails, Faq
from .serializers import TeamSerializer, BlogSerializer, CareerSerializer, VacancySerializer, ContactCreateSerializer, IconboxSerializer, WorkdetailsSerializer, FaqSerializer
from asha_web.models import Notice, Team, Blog, Career, Vacancy, Contact, Iconbox, Workdetails
from .serializers import NoticeSerializer, TeamSerializer, BlogSerializer, CareerSerializer, VacancySerializer, ContactCreateSerializer, IconboxSerializer, WorkdetailsSerializer
from django.utils import timezone
from rest_framework import viewsets, generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.conf import settings
from rest_framework.parsers import MultiPartParser, FormParser
# from asha_web.helpers import modify_input_for_multiple_files
# from django.contrib.auth.models import User
# from rest_framework.decorators import list_route

# from rest_framework.views import APIView
# from rest_framework import status


class ResultsSetPagination(PageNumberPagination):
    page_size = 6

class TeamSetPagination(PageNumberPagination):
    page_size = 100

class TeamView(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer  # selects serializer class from serializer.py
    # permission_classes = [AllowAny]  # restframe work permission
    pagination_class = TeamSetPagination
    
    def perform_create(self, serializer):
        team = Team(**serializer.validated_data)
        # add into extra_data to add default key and value e.g extra_data{"name":'xyz'}
        extra_data = {}
        serializer.save(**extra_data)

    def get_paginated_response(self, data):
        return Response(data)


class BlogList(viewsets.ModelViewSet):
    queryset = Blog.objects.filter(status="Published")
    serializer_class = BlogSerializer
    pagination_class = ResultsSetPagination

    def get_queryset(self):
        category = self.request.GET.get('category', None)
        exclude_id = self.request.GET.get('exclude', None)
        if category:
            qs = self.queryset.filter(category=category).exclude(id=exclude_id)
        else:
            qs = self.queryset
        return qs

    def perform_create(self, serializer):
        blog = Blog(**serializer.validated_data)
        # add into extra_data to add default key and value e.g extra_data{"name":'xyz'}
        extra_data = {}
        serializer.save(**extra_data)

    def get_paginated_response(self, data):
        category = self.request.GET.get('category', None)
        if category:
            r = {"count": self.queryset.filter(
                category=category).count(), "data": data}
        else:
            r = {"count": self.queryset.count(), "data": data}
        return Response(r)


class BlogDetail(viewsets.ModelViewSet):
    queryset = Blog.blogobjects.all()
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        blog = Blog(**serializer.validated_data)
        # add into extra_data to add default key and value e.g extra_data{"name":'xyz'}
        extra_data = {}
        serializer.save(**extra_data)


class CareerList(viewsets.ModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        return Response(data)


class VacancyList(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        return Response(data)


class ContactForm(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactCreateSerializer
    permission_classes = [AllowAny]
    pagination_class = ResultsSetPagination

    def perform_create(self, serializer):
        contact = Contact(**serializer.validated_data)
        extra_data = {}
        email_from = settings.EMAIL_HOST_USER
        send_mail('Subject :{} '.format(contact.subject), 'Email From : {}\nSender Name: {} \nMessage : {}'.format(contact.email, contact.name, contact.message),
                  email_from,
                  ['ashainc10@gmail.com'],
                  fail_silently=False,
                  )
        serializer.save(**extra_data)

    def get_paginated_response(self, data):
        return Response(data)


class CareerForm(viewsets.ModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        return Response(data)
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        career = CareerSerializer(data=request.data)
        if career.is_valid():
            career.save()
            return Response(career.data, status=status.HTTP_201_CREATED)
        else:
            return Response(career.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactList(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactCreateSerializer
    pagination_class = ResultsSetPagination


class IconboxList(viewsets.ModelViewSet):
    queryset = Iconbox.objects.all()
    serializer_class = IconboxSerializer
    # pagination_class = ResultsSetPagination

    # def get_paginated_response(self, data):
    #     return Response(data)


class WorkdetailsList(viewsets.ModelViewSet):
    queryset = Workdetails.objects.all()
    serializer_class = WorkdetailsSerializer
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        r = {"count": self.queryset.count(), "data": data}
        return Response(r)


class BlogSearchViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    pagination_class = ResultsSetPagination
    page_size_query_param = 'page_size'
    http_method_names = ['get']

    lookupfield = 'search'

    def get_queryset(self):
        queryset = []
        if 'search' in self.request.query_params:
            queries = self.request.query_params.get('search').split(" ")

            for q in queries:
                posts = Blog.objects.filter(
                    Q(title__icontains=q) &
                    Q(status="Published")
                )
                for post in posts:
                    queryset.append(post)

        return list(set(queryset))


class NoticeViewSet(viewsets.ModelViewSet):
    serializer_class = NoticeSerializer
    pagination_class = ResultsSetPagination
    page_size_query_param = 'page_size'
    http_method_names = ['get']

    def get_queryset(self):
        #queryset = []
        notices = Notice.objects.filter(
            Q(status="Published")).order_by('-published_date')
        # for notice in notices:
        #     queryset.append(notice)

        # return list(set(queryset))
        return notices


class NoticePopUpViewSet(viewsets.ModelViewSet):
    serializer_class = NoticeSerializer
    pagination_class = ResultsSetPagination
    page_size_query_param = 'page_size'
    http_method_names = ['get']

    def get_queryset(self):
        #queryset = []

        present_time = timezone.now()
        notices = Notice.objects.filter(
            Q(status="Published") &
            Q(pop_up=True) &
            Q(published_date__lte=present_time) &
            Q(hidden_date__gt=present_time)).order_by('-published_date')
        # for notice in notices:
        #     queryset.append(notice)

        # return list(set(queryset))
        return notices


class FaqList(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
