from datetime import timedelta
from django.contrib.admin import options

from django.core.checks import messages
# , Career_Ja, Contact_Ja
# from backend.homepage.asha_web_ja.models import Category_Ja,  Iconbox_Ja, Position_Ja, Vacancy_Ja, WorkImages_Ja, Workdetails_Ja
import os
from django import forms
from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.html import format_html
from multiselectfield import MultiSelectField
from django.template.defaultfilters import slugify, title
from asha_web_ja.models import Blog_Ja, Team_Ja, Category_Ja,  Iconbox_Ja, Position_Ja, Vacancy_Ja, WorkImages_Ja, Workdetails_Ja,Notice_Ja,Faq_Ja
#import goslate
#from translate import translator
from django.shortcuts import get_list_or_404, get_object_or_404
from django.core.exceptions import ObjectDoesNotExist


# from phonenumber_field.modelfields import PhoneNumberField
# from django.utils.text import slugify
# from django.db.models.signals import pre_save
# Create your models here.


class Team(models.Model):
    name = models.CharField(max_length=500, blank=True, null=True)
    # slug = models.SlugField(unique=True, null=True, blank=True)
    designation = models.CharField(max_length=500, blank=True, null=True)
    team_image = models.ImageField(upload_to='team_image', blank=True, null=True,
                                   verbose_name="Profile Image", default='/static/images/default_profile.jpg')
    quotes = models.TextField(blank=True, null=True)
    social_media = models.JSONField(null=True)
    level = models.IntegerField(null=False,default=1)
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Team'
        verbose_name_plural = 'Team'

    # Display image in the admin panel:
    def image_tag(self):
        if self.team_image == '/static/images/default_profile.jpg':
            return format_html('<img href="{0}" src="{0}" width="100" height="100" />'.format('/static/images/default_profile.jpg'))
        else:
            return format_html('<img href="{0}" src="{0}" width="100" height="100" />'.format(self.team_image.url))

    image_tag.allow_tags = True
    image_tag.short_description = 'Image'

    def save(self, *args, **kwargs):
        super(Team, self).save(*args, **kwargs)
        try:
            team_ja = Team_Ja.objects.get(team_en=self.id)
        except ObjectDoesNotExist:
            Team_Ja.objects.create(
                
                name=self.name,
                designation=self.designation,
                team_image=self.team_image,
                quotes=self.quotes,
                social_media=self.social_media,
                level=self.level,
                team_en=self.id

            )
        super(Team, self).save(*args, **kwargs)


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super(Category, self).save(*args, **kwargs)
        try:
            category_ja = Category_Ja.objects.get(category_en=self.id)

        except ObjectDoesNotExist:
            Category_Ja.objects.create(
                name=self.name,
                slug=self.slug,
                category_en=self.id
            )

        if not self.id:
            # Newly created object, so set slug
            self.slug = slugify(self.name)

        super(Category, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Blog(models.Model):
    class BlogObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='published')
    options = (
        ('Drafts', 'Draft'),
        ('Published', 'Published'),
    )
    option_tags = (
        ('App', 'App'),
        ('Branding', 'Branding'),
        ('Development', 'Development'),
        ('Design', 'Design'),
    )

    blog_category = (
        ('Technology', 'technology'),
        ('Life Style', 'life_style'),
        ('Educational', 'educational'),
        ('Productivity', 'productivity')
    )

    blog_image = models.ImageField(
        upload_to='blog_image', verbose_name='Blog Image', blank=True, null=True)
    blog_large_image = models.ImageField(
        upload_to='blog_large_image', verbose_name="Blog Large Image", blank=True, null=True)
    author = models.CharField(max_length=150)
    date = models.DateTimeField(default=timezone.now)
    category = models.CharField(
        max_length=250, choices=blog_category, blank=True, null=True)
    title = models.CharField(max_length=500)
    excerpt = models.TextField(null=True)
    body = models.TextField()
    tags = MultiSelectField(choices=option_tags, default='Tech News')
    status = models.CharField(
        max_length=10, choices=options, default='published')
    objects = models.Manager()
    blogobjects = BlogObjects()

    def image_tag(self):
        return format_html('<img href="{0}" src="{0}" width="100" height="100" />'.format(self.blog_image.url))

    class Meta:
        ordering = ('-date',)

    def __str__(self):
        return (self.title)

    def save(self, *args, **kwargs):
        super(Blog, self).save(*args, **kwargs)
        try:
            #get_object_or_404(Blog_Ja, blog_en=self.id)
            blog_ja = Blog_Ja.objects.get(blog_en=self.id)
        except ObjectDoesNotExist:
            Blog_Ja.objects.create(
                blog_image=self.blog_image,
                author=self.author,
                date=self.date,
                category=self.category,
                title=self.title,
                excerpt=self.excerpt,
                body=self.body,
                tags=self.tags,
                status=self.status,
                blog_en=self.id
            )
        super(Blog, self).save(*args, **kwargs)


class Career(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    phonenumber = models.CharField(max_length=15)
    email = models.EmailField(max_length=254)
    cv = models.FileField(upload_to='Resume/CV')
    message = models.TextField(max_length=500)

    def __str__(self):
        return self.name

    # def save(self, *args, **kwargs):
    #     super(Career, self).save(*args, **kwargs)
    #     try:
    #         career_ja = Career_Ja.objects.get(career_en=self.id)
    #     except ObjectDoesNotExist:
    #         Career_Ja.objects.create(
    #             name=self.name,
    #             address=self.address,
    #             phonenumber=self.phonenumber,
    #             email=self.email,
    #             cv=self.cv,
    #             message=self.message,
    #             career_en=self.id
    #         )
    #     super(Career, self).save(*args, **kwargs)


class Position(models.Model):
    title = models.CharField(max_length=150)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super(Position, self).save(*args, **kwargs)
        try:
            position_ja = Position_Ja.objects.get(position_en=self.id)
        except ObjectDoesNotExist:
            Position_Ja.objects.create(
                title=self.title,
                position_en=self.id
            )
        super(Position, self).save(*args, **kwargs)


class Vacancy(models.Model):
    options = (
        ('Full-time', 'Full-time'),
        ('Part-time', 'Part-Time'),
        ('Remote', 'Remotely')

    )
    title = models.CharField(max_length=150)
    # category = models.ForeignKey(Category, verbose_name=(
    #     'Category'), on_delete=models.CASCADE)
    position = models.ForeignKey(Position, verbose_name=(
        'Position'), on_delete=models.CASCADE)
    work_time = models.CharField(
        max_length=200, choices=options, default="Full-Time"
    )
    date = models.DateTimeField(default=timezone.now)
    due_date = models.DateField()
    responsibilites = models.TextField()
    description = models.TextField()
    salary_range = models.CharField(max_length=150)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def save(self, *args, **kwargs):
        super(Vacancy, self).save(*args, **kwargs)
        try:
            vacancy_ja = Vacancy_Ja.objects.get(vacancy_en=self.id)
        except ObjectDoesNotExist:
            position_en = self.position
            position_ja, created = Position_Ja.objects.get_or_create(
                title=position_en.title, position_en=position_en.id)
            Vacancy_Ja.objects.create(
                title=self.title,
                position=position_ja,
                work_time=self.work_time,
                date=self.date,
                due_date=self.due_date,
                responsibilites=self.responsibilites,
                description=self.description,
                salary_range=self.salary_range,
                vacancy_en=self.id
            )
        super(Vacancy, self).save(*args, **kwargs)


class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Contact'

    # def save(self, *args, **kwargs):
    #     super(Contact, self).save(*args, **kwargs)
    #     try:
    #         contact_ja = Contact_Ja.objects.get(contact_en=self.id)
    #     except ObjectDoesNotExist:
    #         Contact_Ja.objects.create(
    #             name=self.name,
    #             email=self.email,
    #             subject=self.subject,
    #             message=self.message,
    #             contact_en=self.id

    #         )
    #         super(Contact, self).save(*args, **kwargs)


class Iconbox(models.Model):
    icon = models.ImageField(upload_to="icon-box",
                             verbose_name="icon-box", null=True, blank=True)
    title = models.CharField(max_length=150)
    desc = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Icon-box'
        verbose_name_plural = 'Icon-boxes'

    # def save(self, *args, **kwargs):
    #     super(Iconbox, self).save(*args, **kwargs)
    #     try:
    #         iconbox_ja = Iconbox_Ja.objects.get(iconbox_en=self.id)
    #     except ObjectDoesNotExist:
    #         Iconbox_Ja.objects.create(
    #             icon=self.icon,
    #             title=self.title,
    #             desc=self.desc,
    #             iconbox_en=self.id
    #         )
    #     super(Iconbox, self).save(*args, **kwargs)


class Workdetails(models.Model):
    homeImage = models.ImageField(
        upload_to="work_details/homeimage", verbose_name="home-image", null=True, blank=True)
    image = models.ImageField(upload_to="work_details/image",
                              verbose_name="work_details_image", null=True, blank=True)
    title = models.CharField(max_length=120)
    date = models.DateTimeField(default=timezone.now)
    client = models.CharField(max_length=150)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    awards = models.CharField(max_length=150, null=True, blank=True)
    excerpt = models.TextField()
    body = models.TextField()
    largeImage = models.ImageField(upload_to="work_details/largeimage",
                                   verbose_name="work_details_Large_image", null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "WorkDetail"
        verbose_name_plural = "WorkDetails"

    def save(self, *args, **kwargs):
        super(Workdetails, self).save(*args, **kwargs)
        try:
            workdetails_ja = Workdetails_Ja.objects.get(workdetails_en=self.id)
        except ObjectDoesNotExist:

            category_en = self.category
            category_ja, created = Category_Ja.objects.get_or_create(
                name=category_en.name, slug=category_en.slug, category_en=category_en.id)

            Workdetails_Ja.objects.create(
                homeImage=self.homeImage,
                image=self.image,
                title=self.title,
                date=self.date,
                client=self.client,
                category=category_ja,
                awards=self.awards,
                excerpt=self.excerpt,
                body=self.body,
                workdetails_en=self.id,
                largeImage=self.largeImage,

            )
        super(Workdetails, self).save(*args, **kwargs)

# dynamic file upload location for filefield


def get_upload_to(instance, filename):
    return os.path.join("work_details/", f"{'gallary'}", f"{instance.work.id}", filename)


class WorkImages(models.Model):
    # foreign key field to associate with work details
    work = models.ForeignKey(Workdetails, default=None,
                             on_delete=models.CASCADE)
    image = models.FileField(upload_to=get_upload_to,
                             blank=True, null=True)  # image field

    def __str__(self):
        return self.work.title

    class Meta:
        verbose_name = "Work Gallary Image"
        verbose_name_plural = "Work Gallary Images"

    def save(self, *args, **kwargs):
        super(WorkImages, self).save(*args, **kwargs)
        try:
            workimages_ja = WorkImages_Ja.objects.get(workimage_en=self.id)
        except ObjectDoesNotExist:
            # workdetails_en = self.work
            # get_or_create(name=category_en.name, slug=category_en.slug, category_en=category_en.id)
            workdetails_ja = Workdetails_Ja.objects.get(
                workdetails_en=self.work)
            WorkImages_Ja.objects.create(
                work=workdetails_ja,
                image=self.image,
                workimage_en=self.id
            )
        super(WorkImages, self).save(*args, **kwargs)


class Notice(models.Model):

    def return_date_time():
        now = timezone.now()
        return now + timedelta(days=15)
    image = models.ImageField(upload_to="notice_details/image",
                              verbose_name="notice_image", null=True, blank=True)
    title = models.CharField(max_length=120)
    description = models.TextField()
    published_date = models.DateTimeField(default=timezone.now)
    hidden_date = models.DateTimeField(default=return_date_time)
    added_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    pop_up = models.BooleanField(default=False)

    options = (
        ('Drafts', 'Draft'),
        ('Published', 'Published'),
    )
    status = models.CharField(
        max_length=10, choices=options, default='published')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Notice"
        verbose_name_plural = "Notices"

    def save(self, *args, **kwargs):
        super(Notice, self).save(*args, **kwargs)
        try:
            Notice_ja = Notice_Ja.objects.get(notice_en=self.id)
        except ObjectDoesNotExist:
            Notice_Ja.objects.create(
                
                image=self.image,
                title=self.title,
                description=self.description,
                published_date=self.published_date,
                hidden_date = self.hidden_date,
                added_at = self.added_at,
                updated_at = self.updated_at,
                pop_up = self.pop_up,
                
                status = self.status,
                notice_en = self.id
               

            )
        super(Notice, self).save(*args, **kwargs)

    
class Faq(models.Model):
    options = (
        ('drafts', 'Draft'),
        ('published', 'Published'),
    )
    question = models.CharField(max_length=200)
    answer = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    status = models.CharField(
        max_length=10, choices=options, default='published')

    def __str__(self):
        return self.question

    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def save(self, *args, **kwargs):
        super(Faq, self).save(*args, **kwargs)
        try:
            faq_ja = Faq_Ja.objects.get(Faq_en=self.id)
        except ObjectDoesNotExist:
            Faq_Ja.objects.create(
                
                question=self.question,
                answer=self.answer,
                date=self.date,
                status=self.status,
                Faq_en =self.id

            )
        super(Faq, self).save(*args, **kwargs)
