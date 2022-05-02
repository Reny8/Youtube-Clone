from modulefinder import IMPORT_NAME
from webbrowser import get
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from reply.models import Reply
from reply.serializers import ReplySerializer
# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reply(request):
    if request.method == "POST":
        serializer = ReplySerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data,status.HTTP_201_CREATED)