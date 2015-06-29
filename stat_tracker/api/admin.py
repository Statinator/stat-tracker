from django.contrib import admin

# Register your models here.
from .models import Stats, Activity

admin.site.register(Stats)
admin.site.register(Activity)