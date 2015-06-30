from .models import Activity, Stats
from rest_framework import serializers
from django.contrib.auth.models import User

class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ('url', 'title', 'posted_at')

class StatsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stats
        fields = ('url', 'activity', 'value', 'posted_at')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'password','email')
        #write_only_fields = ('password',)