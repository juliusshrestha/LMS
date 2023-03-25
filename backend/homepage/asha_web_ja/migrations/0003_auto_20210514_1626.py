# Generated by Django 3.1.7 on 2021-05-14 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asha_web_ja', '0002_auto_20210514_1110'),
    ]

    operations = [
        migrations.AddField(
            model_name='career_ja',
            name='career_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Career EN ID'),
        ),
        migrations.AddField(
            model_name='category_ja',
            name='category_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Category EN ID'),
        ),
        migrations.AddField(
            model_name='contact_ja',
            name='contact_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Contact EN ID'),
        ),
        migrations.AddField(
            model_name='iconbox_ja',
            name='iconbox_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Icon-Box EN ID'),
        ),
        migrations.AddField(
            model_name='position_ja',
            name='position_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Position EN ID'),
        ),
        migrations.AddField(
            model_name='team_ja',
            name='team_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Team EN ID'),
        ),
        migrations.AddField(
            model_name='vacancy_ja',
            name='vacancy_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Vacancy EN ID'),
        ),
        migrations.AddField(
            model_name='workdetails_ja',
            name='workdetails_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Work-Details EN ID'),
        ),
        migrations.AddField(
            model_name='workimages_ja',
            name='workimage_en',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Work-Images EN ID'),
        ),
    ]