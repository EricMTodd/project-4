"""forumsite_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path
#
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path(‘’, include(‘srvvrs.urls’)),
#     path(‘api-auth/’, include(‘rest_framework.urls’,
#     namespace=‘rest_framework’)),
# ]

from django.urls import path
from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import renderers
from . import views
from rest_framework import renderers


urlpatterns = [
    path('', views.ThreadList.as_view(), name="threads"),
    path('threads/<int:id>', views.ThreadDetail.as_view()),
    path('posts/', views.PostList.as_view()),
    path('posts/<int:id>', views.PostDetail.as_view()),
    path('signup', views.signup_view, name="signup"),
    path('login', views.login_view, name="login"),
]
urlpatterns = format_suffix_patterns(urlpatterns)
