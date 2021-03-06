"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url
from django.contrib import admin

from mysite.view import homepage,login,register,category, contact, lesson, grade,page2,page3,current_datetime,charts

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',homepage),
    url(r'^login/',login),
    url(r'^category/',category),
    url(r'^register/',register),
    url(r'^contact/',contact),
    url(r'^lesson/(\w+)/(\d+)/$',lesson),
    url(r'^grade/(\d+)/$',grade),
    url(r'^page2/$',page2),
    url(r'^page3/$',page3),
    url(r'^current_datetime/$',current_datetime),
    url(r'^charts/$', charts)
]
