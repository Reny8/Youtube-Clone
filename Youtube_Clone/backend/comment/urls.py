from . import views
from django.urls import path, include
urlpatterns = [
    path('',views.get_all_comments)
]