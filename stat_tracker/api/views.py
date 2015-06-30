from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from .models import Activity, Stats
from .permissions import IsOwnerOrReadOnly
from django.contrib.auth.models import User

from .serializer import ActivitySerializer, StatsSerializer, UserSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    permission_classes = (permissions.IsAuthenticated,
                          IsOwnerOrReadOnly)
    serializer_class = ActivitySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


<<<<<<< HEAD
=======
class ActivityDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    permission_classes = (permissions.IsAuthenticated,
                          IsOwnerOrReadOnly)
    serializer_class = ActivitySerializer

>>>>>>> d418364bc1a3fad9b50002c059e87a59d2aff3bb

class StatsViewSet(viewsets.ModelViewSet):
    queryset = Stats.objects.all()
    permission_classes = (permissions.IsAuthenticated,
                          IsOwnerOrReadOnly)
    serializer_class = StatsSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


<<<<<<< HEAD

=======
class StatsDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,
                          IsOwnerOrReadOnly)
    serializer_class = StatsSerializer

    def get_queryset(self):
        return Stats.objects.filter(stats__pk=self.kwargs['pk'])
>>>>>>> d418364bc1a3fad9b50002c059e87a59d2aff3bb

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

