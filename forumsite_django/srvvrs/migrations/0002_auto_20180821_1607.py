# Generated by Django 2.1 on 2018-08-21 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('srvvrs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='post_date'),
        ),
        migrations.AlterField(
            model_name='thread',
            name='thread_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='thread_date'),
        ),
    ]
