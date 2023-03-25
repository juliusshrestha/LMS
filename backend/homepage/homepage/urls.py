from asha_web.views import error_404
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from . import views
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls import handler404


urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'summernote/', include('django_summernote.urls')),
    path(r'api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path(r'api/', include('restapi.urls')),
    path(r'ja/api/', include('restapi_ja.urls')),
    path(r'asha/', include('asha_web.urls')),
    path(r'', views.index, name='index'),
    path(r'home', views.index, name='home'),
    path(r'about', views.index, name='about'),
    path(r'faq', views.index, name='faq'),
    path(r'service', views.index, name='service'),
    path(r'work', views.index, name='work'),
    path(r'blogs', views.index, name='blogs'),
    path(r'career', views.index, name='career'),
    path(r'contact', views.index, name='contact'),
    re_path(r'work-details/(?P<pk>\w+)/', views.index, name='work-details'),
    re_path(r'blog-details/(?P<pk>\w+)/', views.index, name='blog-details'),
    re_path(
        r'blogs-details/category/(?P<slug>[-\w]+)/', views.index, name='blogs-category'),

]

# urlpatterns += i18n_patterns(
#     path(r'', views.home, name='home-page'),
# )

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.IMAGES_URL,
                          document_root=settings.IMAGES_ROOT)


if settings.DEBUG is False:
    handler404 = error_404
