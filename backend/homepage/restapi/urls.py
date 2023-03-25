
from django.urls import path, re_path, include
from rest_framework import routers
from .views import NoticeViewSet, NoticePopUpViewSet, TeamView, BlogList, BlogDetail,\
    CareerForm, VacancyList, ContactList, ContactForm, IconboxList, WorkdetailsList, \
    BlogSearchViewSet, FaqList
from asha_web.forms import GalleryImageForm

router = routers.DefaultRouter()

router.register(r'team', TeamView)
router.register(r'bloglist', BlogList, basename="BlogList")
router.register(r'blogDetail', BlogDetail)
router.register(r'career', CareerForm, basename='career')
router.register(r'vacancy', VacancyList)
router.register(r'contactlist', ContactList, basename='ContactList')
router.register(r'contact', ContactForm, basename='contact')
router.register(r'iconbox', IconboxList, basename="iconbox")
router.register(r'workdetails', WorkdetailsList, basename="WorkDetails")
router.register(r'blogs', BlogSearchViewSet, basename='BlogSearch')
router.register(r'notice/popup', NoticePopUpViewSet, basename='PopUpNotice')
router.register(r'notice', NoticeViewSet, basename='NoticeList')
# notice/popup should be above of notice so, that detailed view
# of notice is not hit
router.register(r'faqlist', FaqList, basename="FaqList")
# router.register(r'gallery', GalleryImageForm, basename="gallery")

urlpatterns = [
    re_path(r'^', include(router.urls)),
    # path('gallery/', GalleryImageForm, name="Gallery-images")
    # path('blog/<int:pk>/', BlogDetail.as_view(), name='detailcreate'),
    # path('blog/', BlogList.as_view(), name='list'),
    # path('career/',CareerList.as_view(), name='career'),
    # path('vacancy/',VacancyList.as_view(), name='vacancy'),
    # path('contact/',ContactList.as_view(), name='contact'),
]
