from datetime import datetime
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.conf import settings
from django.core.mail import send_mail
# from rest_framework.serializers import Serializer, FileField
# from rest_framework.serializers import Serializer, FileField
from asha_web_ja.models import Team_Ja, Blog_Ja, Career_Ja, Vacancy_Ja, Contact_Ja, Category_Ja, Position_Ja, Iconbox_Ja, Workdetails_Ja, WorkImages_Ja,Notice_Ja,Faq_Ja

# allows to render conplex datasets, queries to render into Json or XML format


class TeamSerializer_Ja(serializers.ModelSerializer):
    team_image = serializers.SerializerMethodField()

    class Meta:
        model = Team_Ja  # select model
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
            team_member = Team_Ja.objects.get(name=value)
            if not self.instance or self.instance.id != team_member.id:
                raise ValidationError(
                    "Team with name '{}' already exists.".format(value))
        except Team_Ja.DoesNotExist:
            pass
        return value


class PositionSerializer_Ja(serializers.ModelSerializer):
    class Meta:
        model = Position_Ja
        fields = 'title'


class CategorySerializer_Ja(serializers.ModelSerializer):
    class Meta:
        model = Category_Ja
        fields = 'name'


class BlogSerializer_Ja(serializers.ModelSerializer):

    class Meta:
        model = Blog_Ja
        fields = '__all__'


class CareerSerializer_Ja(serializers.ModelSerializer):

    class Meta:
        model = Career_Ja
        fields = '__all__'


class VacancySerializer_Ja(serializers.ModelSerializer):
    category = serializers.ReadOnlyField(source="category.name")
    position = serializers.ReadOnlyField(source="position.title")

    class Meta:
        model = Vacancy_Ja
        fields = '__all__'


class ContactCreateSerializer_Ja(serializers.ModelSerializer):
    class Meta:
        model = Contact_Ja
        fields = '__all__'


class IconboxSerializer_Ja(serializers.ModelSerializer):
    class Meta:
        model = Iconbox_Ja
        fields = '__all__'


class WorkdetailsSerializer_Ja(serializers.ModelSerializer):
    workdetail_gallary = serializers.SerializerMethodField()

    class Meta:
        model = Workdetails_Ja
        fields = '__all__'

    def get_workdetail_gallary(self, obj):
        workdetail_img = WorkImages_Ja.objects.filter(work=obj.id)
        img_lst = []
        for img_obj in workdetail_img:
            img_url = self.context['request'].build_absolute_uri(
                img_obj.image.url)
            img_lst.append(img_url)
        return img_lst

class NoticeSerializer_Ja(serializers.ModelSerializer):
    class Meta:
        model = Notice_Ja
        fields = '__all__'

class FaqSerializer_Ja(serializers.ModelSerializer):
    class Meta:
        model = Faq_Ja
        fields = '__all__'
