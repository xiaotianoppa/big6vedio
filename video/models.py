# -*- coding: utf-8 -*-
from django.db import models
from datetime import datetime
from django.contrib import admin

# Create your models here.
class Video(models.Model):
	name = models.CharField(max_length = 100)
	grade = models.CharField(max_length = 10)
	subject = models.CharField(max_length = 10)
	url = models.URLField()
	fl = models.FilePathField()
	timestamp = models.DateTimeField()
class VideoAdmin(admin.ModelAdmin):
	list_display = ('name', 'grade', 'subject', 'timestamp')
	list_display_links = ('name', 'grade', 'subject', 'timestamp')

admin.site.register(Video, VideoAdmin)
