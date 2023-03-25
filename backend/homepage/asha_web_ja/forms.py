from django import forms
from .models import Workdetails_Ja


class GalleryImageForm(forms.Form):
    gallery = forms.FileField(
        widget=forms.ClearableFileInput(attrs={'multiple': True}))

    class Meta:
        model = Workdetails_Ja
        fields = "__all__"
