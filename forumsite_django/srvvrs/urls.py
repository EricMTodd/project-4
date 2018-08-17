from django.conf.urls import path
from srvvrs import views

urlpatterns = [
    path('srvvrs/', views.srvvrs_list),
    path('srvvrs/<int:id>', views.srvvrs_detail)

]
