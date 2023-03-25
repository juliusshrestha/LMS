from django import forms
from .models import Workdetails


class GalleryImageForm(forms.Form):
    gallery = forms.FileField(
        widget=forms.ClearableFileInput(attrs={'multiple': True}))

    class Meta:
        model = Workdetails
        fields = "__all__"
