from modulefinder import IMPORT_NAME
from webbrowser import get
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from reply.models import Reply
from reply.serializers import ReplySerializer
from django.shortcuts import get_object_or_404
from .models import Comment
# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reply(request):
    if request.method == "POST":
        serializer = ReplySerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data,status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reply_details(request, pk):
    comment = get_object_or_404(Comment,pk=pk)
    if request.method == "GET":
        reply = Reply.objects.filter(comment_id = comment.id)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data, status= status.HTTP_200_OK)