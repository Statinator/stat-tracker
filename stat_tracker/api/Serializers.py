from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Activity, Stats


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity



class StatsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stats