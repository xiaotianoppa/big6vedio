# -*- coding: utf-8 -*-

from django.http import HttpResponse
import datetime
from django import template
from django.shortcuts import render
from django.shortcuts import render_to_response


def homepage(request):
    return render_to_response('index.html')

def page1(request):
	return HttpResponse("<h1>This is our page1.</h1>")

def page2(request):
	return HttpResponse("<h1>This is our page2.</h1>")

def page3(request):
	return HttpResponse("<h1>This is our page3.</h1>")

def current_datetime(request):
	now=datetime.datetime.now()
	fp=open('./video/templates/mytemplate.html')
	t=template.Template(fp.read())
	fp.close()
	html=t.render(template.Context({'current_date':now}))
	return HttpResponse(html)

def charts(request):
    return render_to_response('Charts_Sep2015.html')
"""
    Some unuseful code
    
    chart_file = open('./video/templates/Charts_Sep2015.html','r',encoding='utf-8')
    chart_temp = template.Template(chart_file.read())
    chart_file.close()
    chart_html = chart_temp.render(template.Context())
    return HttpResponse(chart_html)
"""