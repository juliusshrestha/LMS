from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Team_Ja, Blog_Ja, Category_Ja, Career_Ja, Vacancy_Ja, Position_Ja, Contact_Ja, Iconbox_Ja, Workdetails_Ja, WorkImages_Ja,Notice_Ja,Faq_Ja

# Register your models here.


class TeamAdmin(SummernoteModelAdmin):
    summernote_fields = ('quotes',)
    list_display = ('name', 'designation', 'image_tag')


class BlogAdmin(SummernoteModelAdmin):
    summernote_fields = ('excerpt', 'body',)
    # list_display = ('name', 'designation', 'image_tag')


class VacancyAdmin(SummernoteModelAdmin):
    summernote_fields = ('responsibilites', 'description')
    list_display = ('title', 'date', 'due_date',
                    'position', 'work_time', 'salary_range')


class WorkImagesAdmin(admin.StackedInline):
    model = WorkImages_Ja


class WorkdetailsAdmin(SummernoteModelAdmin):
    summernote_fields = ('excerpt', 'body')
    list_display = ('title', 'category', 'date', 'client', 'awards')
    fieldsets = (
        (None, {
            'fields': ('title', 'category', 'date', 'client', 'awards', 'body', 'excerpt')
        }),
        ('Work Images', {
            'classes': ('collapse',),
            'fields': ('homeImage', 'image', 'largeImage')
        }),
    )
    inlines = [WorkImagesAdmin]
    # exclude = ()

class NoticeAdmin(SummernoteModelAdmin):
    summernote_fields = ('excerpt', 'body')
    list_display = ('id', 'image', 'title', 'description',
                    'updated_at', 'status', 'published_date', 'hidden_date', 'pop_up')

class FaqAdmin(SummernoteModelAdmin):
    summernote_fields = ('excerpt', 'body')
    list_display = ('id', 'question', 'answer', 'date', 'status')

admin.site.register(Team_Ja, TeamAdmin)
admin.site.register(Blog_Ja, BlogAdmin)
admin.site.register(Category_Ja)
admin.site.register(Career_Ja)
admin.site.register(Position_Ja)
admin.site.register(Vacancy_Ja, VacancyAdmin)
admin.site.register(Contact_Ja)
admin.site.register(Iconbox_Ja)
admin.site.register(Workdetails_Ja, WorkdetailsAdmin)
admin.site.register(Notice_Ja, NoticeAdmin)
admin.site.register(Faq_Ja, FaqAdmin)

