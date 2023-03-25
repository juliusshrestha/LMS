from datetime import timedelta
# Create your models here.
import os
from django import forms
from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.html import format_html
from multiselectfield import MultiSelectField
from django.template.defaultfilters import slugify
# from asha_web.models import Category
# from phonenumber_field.modelfields import PhoneNumberField
# from django.utils.text import slugify
# from django.db.models.signals import pre_save
# Create your models here.


class Team_Ja(models.Model):
    name = models.CharField(max_length=500, blank=True, null=True)
    slug = models.SlugField(unique=True, null=True, blank=True)
    designation = models.CharField(max_length=500, blank=True, null=True)
    team_image = models.ImageField(upload_to='team_image', blank=True, null=True,
                                   verbose_name="Profile Image", default='/static/images/default_profile.jpg')
    quotes = models.TextField(blank=True, null=True)
    social_media = models.JSONField(null=True)
    level = models.IntegerField(null=False,default=1)
    team_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Team EN ID")

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

    class Meta:
        verbose_name = 'Team'
        verbose_name_plural = 'Team'


class Category_Ja(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(blank=True)
    category_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Category EN ID")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.id:
            # Newly created object, so set slug
            self.slug = slugify(self.name)

        super(Category_Ja, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Blog_Ja(models.Model):
    class BlogObjectsJa(models.Manager):
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
    blog_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Blog EN ID")
    objects = models.Manager()
    blogobjects_ja = BlogObjectsJa()

    def image_tag(self):
        return format_html('<img href="{0}" src="{0}" width="100" height="100" />'.format(self.blog_image.url))

    class Meta:
        ordering = ('-date',)

    def __str__(self):
        return (self.title)

    class Meta:
        verbose_name = 'Blog'
        verbose_name_plural = 'Blogs'


class Career_Ja(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    phonenumber = models.CharField(max_length=15)
    email = models.EmailField(max_length=254)
    cv = models.FileField(upload_to='Resume/CV')
    message = models.TextField(max_length=500)
    career_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Career EN ID")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Career'
        verbose_name_plural = 'Careers'


class Position_Ja(models.Model):
    title = models.CharField(max_length=150)
    position_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Position EN ID")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Position'
        verbose_name_plural = 'Positions'


class Vacancy_Ja(models.Model):
    options = (
        ('Full-time', 'Full-time'),
        ('Part-time', 'Part-Time'),
        ('Remote', 'Remotely')

    )
    title = models.CharField(max_length=150)
    # category = models.ForeignKey(Category, verbose_name=(
    #     'Category'), on_delete=models.CASCADE)
    position = models.ForeignKey(Position_Ja, verbose_name=(
        'Position'), on_delete=models.CASCADE)
    work_time = models.CharField(
        max_length=200, choices=options, default="Full-Time"
    )
    date = models.DateTimeField(default=timezone.now)
    due_date = models.DateField()
    responsibilites = models.TextField()
    description = models.TextField()
    salary_range = models.CharField(max_length=150)
    vacancy_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Vacancy EN ID")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'


class Contact_Ja(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    contact_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Contact EN ID")

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Contact_Ja'
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'


class Iconbox_Ja(models.Model):
    icon = models.ImageField(upload_to="icon-box",
                             verbose_name="icon-box", null=True, blank=True)
    title = models.CharField(max_length=150)
    desc = models.TextField()
    iconbox_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Icon-Box EN ID")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Icon-box'
        verbose_name_plural = 'Icon-boxes'


class Workdetails_Ja(models.Model):
    homeImage = models.ImageField(
        upload_to="work_details/homeimage", verbose_name="home-image", null=True, blank=True)
    image = models.ImageField(upload_to="work_details/image",
                              verbose_name="work_details_image", null=True, blank=True)
    title = models.CharField(max_length=120)
    date = models.DateTimeField(default=timezone.now)
    client = models.CharField(max_length=150)
    category = models.ForeignKey(Category_Ja, on_delete=models.CASCADE)
    awards = models.CharField(max_length=150, null=True, blank=True)
    excerpt = models.TextField()
    body = models.TextField()
    workdetails_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Work-Details EN ID")
    largeImage = models.ImageField(upload_to="work_details/largeimage",
                                   verbose_name="work_details_Large_image", null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "WorkDetail"
        verbose_name_plural = "WorkDetails"

# dynamic file upload location for filefield


def get_upload_to(instance, filename):
    return os.path.join("work_details/", f"{'gallary'}", f"{instance.work.id}", filename)


class WorkImages_Ja(models.Model):
    # foreign key field to associate with work details
    work = models.ForeignKey(Workdetails_Ja, default=None,
                             on_delete=models.CASCADE)
    image = models.FileField(upload_to=get_upload_to,
                             blank=True, null=True)  # image field

    workimage_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Work-Images EN ID")

    def __str__(self):
        return self.work.title

    class Meta:
        verbose_name = "Work Gallary Image Japanese"
        verbose_name_plural = "Work Gallary Images Japanese"

class Notice_Ja(models.Model):

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
    notice_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Notice EN ID")
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "Notice"
        verbose_name_plural = "Notices"


class Faq_Ja(models.Model):
    options = (
        ('drafts', 'Draft'),
        ('published', 'Published'),
    )
    question = models.CharField(max_length=200)
    answer = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    status = models.CharField(
        max_length=10, choices=options, default='published')
    Faq_en = models.CharField(
        max_length=10, blank=True, null=True, verbose_name="Faq EN ID")
    def __str__(self):
        return self.question
    
    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
    
