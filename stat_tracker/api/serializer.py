from .models import Activity, Stats
from rest_framework import serializers

class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ('url', 'title', 'posted_at')

class StatsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stats
        fields = ('url', 'activity', 'value', 'posted_at')
