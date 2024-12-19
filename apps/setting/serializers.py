from .models import LLModel
from rest_framework import serializers


class LLModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = LLModel
        fields = '__all__'