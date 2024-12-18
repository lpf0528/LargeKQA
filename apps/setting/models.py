import uuid

from django.db import models


class LLModel(models.Model):
    """
    LLM模型
    """
    id = models.UUIDField(primary_key=True, max_length=128, default=uuid.uuid1, editable=False)
    name = models.CharField(max_length=128, verbose_name="模型名称")
    # description = models.TextField(verbose_name="模型描述")
    model_type = models.CharField(max_length=128, verbose_name="模型类型")
    model_name = models.CharField(max_length=128, verbose_name="模型名称")
    provider = models.CharField(max_length=128, verbose_name="模型供应商")
    provider_model_id = models.CharField(max_length=128, verbose_name="供应商模型ID")

    class Meta:
        db_table = "llm_model"
        verbose_name = "LLM模型"
        verbose_name_plural = verbose_name
