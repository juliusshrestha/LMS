
from django.urls import path, re_path, include
from rest_framework import routers
from .views import FaqList_Ja, NoticePopUpViewSet_Ja, NoticeViewSet_Ja, TeamView_Ja, BlogList_Ja, BlogDetail_Ja, CareerForm_Ja, VacancyList_Ja, ContactList_Ja, ContactForm_Ja, IconboxList_Ja, WorkdetailsList_Ja
from asha_web_ja.forms import GalleryImageForm

router = routers.DefaultRouter()

router.register(r'team', TeamView_Ja)
router.register(r'bloglist', BlogList_Ja, basename="BlogList_Ja")
router.register(r'blogDetail', BlogDetail_Ja)
router.register(r'career', CareerForm_Ja, basename='career_Ja')
router.register(r'vacancy', VacancyList_Ja)
router.register(r'contactlist', ContactList_Ja, basename='ContactList_Ja')
router.register(r'contact', ContactForm_Ja, basename='contact_Ja')
router.register(r'iconbox', IconboxList_Ja, basename="iconbox_Ja")
router.register(r'workdetails', WorkdetailsList_Ja, basename="WorkDetails_Ja")
router.register(r'notice/popup', NoticePopUpViewSet_Ja,
                basename='PopUpNotice_Ja')
router.register(r'notice', NoticeViewSet_Ja, basename='NoticeList_Ja')
router.register(r'faqlist', FaqList_Ja, basename="FaqList_Ja")
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
