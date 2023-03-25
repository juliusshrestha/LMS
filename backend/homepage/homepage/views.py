from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.utils.translation import gettext as _
from django.utils.translation import get_language, activate, gettext

# Serve Single Page Applications
index = never_cache(TemplateView.as_view(template_name='index.html'))


# def home(request):
#     return render(request, "home.html")


def home(request):
    trans = translate(language='ja')
    return render(request, 'home.html', {'trans': trans})


# def item(request):
#     trans = _('hello')
#     return render(request, 'item.html', {'trans': trans})


def translate(language):
    cur_language = get_language()
    try:
        activate(language)
        text = gettext('hello')
    finally:
        activate(cur_language)
    return text
