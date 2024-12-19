from rest_framework import viewsets
from .models import LLModel
from .serializers import LLModelSerializer


# Create your views here.


class LLModelViewSet(viewsets.ModelViewSet):

    queryset = LLModel.objects.all().order_by()
    serializer_class = LLModelSerializer
    # permission_classes = [permissions.IsAuthenticated]

