# Generated by Django 3.1.7 on 2021-04-27 06:44

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('asha_web', '0007_auto_20210408_1602'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='tags',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('App', 'App'), ('Branding', 'Branding'), ('Development', 'Development'), ('Design', 'Design')], default='Tech News', max_length=31),
        ),
        migrations.AlterField(
            model_name='career',
            name='phonenumber',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterModelTable(
            name='contact',
            table='Contact',
        ),
    ]