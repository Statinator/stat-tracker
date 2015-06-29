# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('title', models.CharField(max_length=255)),
                ('posted_at', models.DateField()),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Stats',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('value', models.IntegerField()),
                ('posted_at', models.DateField()),
                ('stats', models.ForeignKey(to='api.Activity')),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
