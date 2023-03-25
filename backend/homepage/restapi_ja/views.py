from rest_framework import viewsets, generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.conf import settings
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers_ja import TeamSerializer_Ja, BlogSerializer_Ja, CareerSerializer_Ja, VacancySerializer_Ja, ContactCreateSerializer_Ja, IconboxSerializer_Ja, WorkdetailsSerializer_Ja,NoticeSerializer_Ja,FaqSerializer_Ja
from asha_web_ja.models import Team_Ja, Blog_Ja, Career_Ja, Vacancy_Ja, Contact_Ja, Iconbox_Ja, Workdetails_Ja,Notice_Ja,Faq_Ja
from django.core.mail import send_mail
from rest_framework.parsers import MultiPartParser, FormParser
from asha_web.forms import GalleryImageForm
from django.db.models import Q
from django.utils import timezone
# from asha_web.helpers import modify_input_for_multiple_files
# from django.contrib.auth.models import User
# from rest_framework.decorators import list_route

# from rest_framework.views import APIView
# from rest_framework import status


class ResultsSetPagination(PageNumberPagination):
    page_size = 6


class TeamView_Ja(viewsets.ModelViewSet):
    queryset = Team_Ja.objects.all()
    # selects serializer class from serializer.py
    serializer_class = TeamSerializer_Ja
    permission_classes = [AllowAny]  # restframe work permission
    # pagination_class = ResultsSetPagination

    def perform_create(self, serializer):
        team = Team_Ja(**serializer.validated_data)
        # add into extra_data to add default key and value e.g extra_data{"name":'xyz'}
        extra_data = {}
        serializer.save(**extra_data)

    def get_paginated_response(self, data):
        return Response(data)


class BlogList_Ja(viewsets.ModelViewSet):
    queryset = Blog_Ja.objects.all()
    serializer_class = BlogSerializer_Ja
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
        blog = Blog_Ja(**serializer.validated_data)
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


class BlogDetail_Ja(viewsets.ModelViewSet):
    queryset = Blog_Ja.blogobjects_ja.all()
    serializer_class = BlogSerializer_Ja

    def perform_create(self, serializer):
        blog = Blog_Ja(**serializer.validated_data)
        # add into extra_data to add default key and value e.g extra_data{"name":'xyz'}
        extra_data = {}
        serializer.save(**extra_data)


class CareerList_Ja(viewsets.ModelViewSet):
    queryset = Career_Ja.objects.all()
    serializer_class = CareerSerializer_Ja
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        return Response(data)


class VacancyList_Ja(viewsets.ModelViewSet):
    queryset = Vacancy_Ja.objects.all()
    serializer_class = VacancySerializer_Ja
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        return Response(data)


class ContactForm_Ja(viewsets.ModelViewSet):
    queryset = Contact_Ja.objects.all()
    serializer_class = ContactCreateSerializer_Ja
    permission_classes = [AllowAny]
    pagination_class = ResultsSetPagination

    def perform_create(self, serializer):
        contact = Contact_Ja(**serializer.validated_data)
        extra_data = {}
        email_from = settings.EMAIL_HOST_USER
        send_mail('Subject :{} '.format(contact.subject), 'Email From : {}\nSender Name: {} \nMessage : {}'.format(contact.email, contact.name, contact.message),
                  email_from,
                  ['asha.inc10@gmail.com'],
                  fail_silently=False,
                  )
        serializer.save(**extra_data)

    def get_paginated_response(self, data):
        return Response(data)


class CareerForm_Ja(viewsets.ModelViewSet):
    queryset = Career_Ja.objects.all()
    serializer_class = CareerSerializer_Ja
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        return Response(data)
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        career = CareerSerializer_Ja(data=request.data)
        if career.is_valid():
            career.save()
            return Response(career.data, status=status.HTTP_201_CREATED)
        else:
            return Response(career.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactList_Ja(viewsets.ModelViewSet):
    queryset = Contact_Ja.objects.all()
    serializer_class = ContactCreateSerializer_Ja
    pagination_class = ResultsSetPagination


class IconboxList_Ja(viewsets.ModelViewSet):
    queryset = Iconbox_Ja.objects.all()
    serializer_class = IconboxSerializer_Ja
    # pagination_class = ResultsSetPagination

    # def get_paginated_response(self, data):
    #     return Response(data)


class WorkdetailsList_Ja(viewsets.ModelViewSet):
    queryset = Workdetails_Ja.objects.all()
    serializer_class = WorkdetailsSerializer_Ja
    pagination_class = ResultsSetPagination

    def get_paginated_response(self, data):
        r = {"count": self.queryset.count(), "data": data}
        return Response(r)

class BlogSearchViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer_Ja
    pagination_class = ResultsSetPagination
    page_size_query_param = 'page_size'
    http_method_names = ['get']

    lookupfield = 'search'

    def get_queryset(self):
        queryset = []
        if 'search' in self.request.query_params:
            queries = self.request.query_params.get('search').split(" ")

            for q in queries:
                posts = Blog_Ja.objects.filter(
                    Q(title__icontains=q) &
                    Q(status="Published")
                )
                for post in posts:
                    queryset.append(post)

        return list(set(queryset))


class NoticeViewSet_Ja(viewsets.ModelViewSet):
    serializer_class = NoticeSerializer_Ja
    pagination_class = ResultsSetPagination
    page_size_query_param = 'page_size'
    http_method_names = ['get']

    def get_queryset(self):
        #queryset = []
        notices = Notice_Ja.objects.filter(
            Q(status="Published")).order_by('-published_date')
        # for notice in notices:
        #     queryset.append(notice)

        # return list(set(queryset))
        return notices


class NoticePopUpViewSet_Ja(viewsets.ModelViewSet):
    serializer_class = NoticeSerializer_Ja
    pagination_class = ResultsSetPagination
    page_size_query_param = 'page_size'
    http_method_names = ['get']

    def get_queryset(self):
        #queryset = []

        present_time = timezone.now()
        notices = Notice_Ja.objects.filter(
            Q(status="Published") &
            Q(pop_up=True) &
            Q(published_date__lte=present_time) &
            Q(hidden_date__gt=present_time)).order_by('-published_date')
        # for notice in notices:
        #     queryset.append(notice)

        # return list(set(queryset))
        return notices


class FaqList_Ja(viewsets.ModelViewSet):
    queryset = Faq_Ja.objects.all()
    serializer_class = FaqSerializer_Ja