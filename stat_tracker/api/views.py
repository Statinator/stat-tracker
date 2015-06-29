from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Activity, Stats
from .serializer import ActivitySerializer, StatsSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer


class StatsViewSet(viewsets.ModelViewSet):
    queryset = Stats.objects.all()
    serializer_class = StatsSerializer