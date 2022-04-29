from . import views
from django.urls import path, include
urlpatterns = [
    path('',views.get_all_comments),
    path('<int:pk>/', views.comments_details)
]