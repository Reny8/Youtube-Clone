from . import views
from django.urls import path
urlpatterns = [
    path('',views.get_all_comments),
    path('<int:pk>/', views.comments_details),
    path('create/',views.create_comment),
    path('<int:pk>/likes/', views.like_comment),
    path('<int:pk>/dislikes/',views.dislike_comment)
]