# -*- coding: utf-8 -*-

from django.http import HttpResponse
import datetime
from django import template


def homepage(request):
	return HttpResponse("<h1>This is our homepage.</h1>")

def page1(request):
	return HttpResponse("<h1>This is our page1.</h1>")

def page2(request):
	return HttpResponse("<h1>This is our page2.</h1>")

def page3(request):
	return HttpResponse("<h1>This is our page3.</h1>")

def current_datetime(request):
	now=datetime.datetime.now()
	fp=open('f:/big6vedio/templates/mytemplate.html')
	t=template.Template(fp.read())
	fp.close()
	html=t.render(template.Context({'current_date':now}))
	return HttpResponse(html)