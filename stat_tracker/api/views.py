from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from api.Serializers import ActivitySerializer, StatsSerializer
from api.models import Activity, Stats


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer



class StatsViewSet(viewsets.ModelViewSet):
    queryset = Stats.objects.all()
    serializer_class = StatsSerializer

