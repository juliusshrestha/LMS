# Generated by Django 3.1.7 on 2021-04-07 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asha_web', '0005_vacancy_model'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('subject', models.CharField(max_length=200)),
                ('message', models.TextField()),
            ],
            options={
                'db_table': 'contact',
            },
        ),
        migrations.AlterModelOptions(
            name='blog',
            options={'ordering': ('-date',)},
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='work_time',
            field=models.CharField(choices=[('full-time', 'Full-time'), ('part-time', 'Part-Time'), ('Remote', 'Remotely')], default='Full-Time', max_length=200),
        ),
    ]