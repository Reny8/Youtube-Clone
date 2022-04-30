from modulefinder import IMPORT_NAME
from webbrowser import get
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comments_details(request, pk):
    comment = get_object_or_404(Comment,pk=pk)
    if request.method == "GET":
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status= status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = CommentSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data,status.HTTP_201_CREATED)