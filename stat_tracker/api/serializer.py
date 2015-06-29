from .models import Activity, Stats
from rest_framework import serializers

class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ('title', 'posted_at')

class StatsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stats
