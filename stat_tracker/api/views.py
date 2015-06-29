from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Activity, Stats
from .serializer import ActivitySerializer, StatsSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class StatsViewSet(viewsets.ModelViewSet):
    queryset = Stats.objects.all()
    serializer_class = StatsSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
