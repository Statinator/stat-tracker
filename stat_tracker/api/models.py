from django.db import models
from django.contrib.auth.models import User


class Activity(models.Model):
    user = models.ForeignKey(User)
    title = models.CharField(max_length=255)
    posted_at = models.DateField()

    def __str__(self):
        return self.title


class Stats(models.Model):
    user = models.ForeignKey(User)
    activity = models.ForeignKey(Activity)
    value = models.IntegerField()
    posted_at = models.DateField()

    def __str__(self):
        return "{} --> {} --> {} --> {}".format(self.user, self.activity, self.value, self.posted_at)
