from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Notice, Team, Blog, Category, Career, Vacancy, Position, \
    Contact, Iconbox, Workdetails, WorkImages, Faq
from asha_web_ja.models import Blog_Ja, Workdetails_Ja, Team_Ja, Vacancy_Ja, Category_Ja, Position_Ja,Notice_Ja,Faq_Ja

# Register your models here.


class TeamAdmin(SummernoteModelAdmin):
    summernote_fields = ('quotes',)
    list_display = ('name', 'designation', 'image_tag')

    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Team_Ja.objects.filter(team_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()


class BlogAdmin(SummernoteModelAdmin):
    summernote_fields = ('excerpt', 'body',)
    list_display = ('title', 'category')

    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Blog_Ja.objects.filter(blog_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()


class VacancyAdmin(SummernoteModelAdmin):
    summernote_fields = ('responsibilites', 'description')
    list_display = ('title', 'date', 'due_date',
                    'position', 'work_time', 'salary_range')

    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Vacancy_Ja.objects.filter(
                vacancy_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()


class WorkImagesAdmin(admin.StackedInline):
    model = WorkImages


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

    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Workdetails_Ja.objects.filter(
                workdetails_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()


class PositionAdmin(admin.ModelAdmin):
    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Position_Ja.objects.filter(
                position_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()


class CategoryAdmin(admin.ModelAdmin):
    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Category_Ja.objects.filter(
                category_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()


class NoticeAdmin(admin.ModelAdmin):
    summernote_fields = ('excerpt', 'body')
    list_display = ('id', 'image', 'title', 'description',
                    'updated_at', 'status', 'published_date', 'hidden_date', 'pop_up')
    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Notice_Ja.objects.filter(
                notice_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()

class FaqAdmin(admin.ModelAdmin):
    summernote_fields = ('excerpt', 'body')
    list_display = ('id', 'question', 'answer', 'date', 'status')
    actions = ['delete_model']

    def delete_model(self, request, obj):
        obj_list = obj.values_list('id', flat=True)
        try:
            obj_ja_list = Faq_Ja.objects.filter(
                Faq_en__in=obj_list)
            obj_ja_list.delete()
        except Exception as e:
            print(str(e))
            pass

        obj.delete()


admin.site.register(Team, TeamAdmin)
admin.site.register(Blog, BlogAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Career)
admin.site.register(Position, PositionAdmin)
admin.site.register(Vacancy, VacancyAdmin)
admin.site.register(Contact)
admin.site.register(Iconbox)
admin.site.register(Workdetails, WorkdetailsAdmin)
admin.site.register(Notice, NoticeAdmin)
admin.site.register(Faq, FaqAdmin)

#
