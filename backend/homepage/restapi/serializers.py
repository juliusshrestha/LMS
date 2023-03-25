from datetime import datetime
from django.contrib.auth.models import User
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.conf import settings
from django.core.mail import send_mail
# from rest_framework.serializers import Serializer, FileField
# from rest_framework.serializers import Serializer, FileField
from asha_web.models import Notice, Team, Blog, Career, Vacancy, Contact, Category,\
    Position, Iconbox, Workdetails, WorkImages, Faq

# allows to render conplex datasets, queries to render into Json or XML format


class TeamSerializer(serializers.ModelSerializer):
    team_image = serializers.SerializerMethodField()

    class Meta:
        model = Team  # select model
        fields = '__all__'
        # exclude = () #add to exclude if want to exclude any fields  e.g exclude=("name",)

    def get_team_image(self, obj):
        if obj.team_image == '/static/images/default_profile.jpg':
            return self.context['request'].build_absolute_uri('/static/images/default_profile.jpg')
        else:
            return self.context['request'].build_absolute_uri(obj.team_image.url)

    def validate_name(self, value):
        """
        This function allows you to check the existence of team member of given name already exists in db or not.
        If exists raise validation error if not do nothing.
        """
        try:
            team_member = Team.objects.get(name=value)
            if not self.instance or self.instance.id != team_member.id:
                raise ValidationError(
                    "Team with name '{}' already exists.".format(value))
        except Team.DoesNotExist:
            pass
        return value


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = 'title'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = 'name'


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = '__all__'


class FaqSerializer(serializers.ModelSerializer):

    class Meta:
        model = Faq
        fields = '__all__'


class CareerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Career
        fields = '__all__'


class VacancySerializer(serializers.ModelSerializer):
    category = serializers.ReadOnlyField(source="category.name")
    position = serializers.ReadOnlyField(source="position.title")

    class Meta:
        model = Vacancy
        fields = '__all__'


class ContactCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class IconboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Iconbox
        fields = '__all__'


class WorkdetailsSerializer(serializers.ModelSerializer):
    workdetail_gallary = serializers.SerializerMethodField()

    class Meta:
        model = Workdetails
        fields = '__all__'

    def get_workdetail_gallary(self, obj):
        workdetail_img = WorkImages.objects.filter(work=obj.id)
        img_lst = []
        for img_obj in workdetail_img:
            img_url = self.context['request'].build_absolute_uri(
                img_obj.image.url)
            img_lst.append(img_url)
        return img_lst


class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'

class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = '__all__'
