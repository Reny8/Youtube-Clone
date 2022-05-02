from . import views
from django.urls import path


urlpatterns = [
    path('', views.create_reply),
    path('<int:pk>/', views.reply_details)
]