# Generated by Django 3.1.7 on 2021-06-23 09:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('asha_web', '0018_merge_20210601_0717'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='level',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]