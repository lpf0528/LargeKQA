import uuid

from django.db import models

from apps.common.mixins.models import TimeStampedModel


class ApplicationTypeChoices(models.TextChoices):
    """应用类型"""
    SIMPLE = 'SIMPLE', '简易'
    WORK_FLOW = 'WORK_FLOW', '工作流'


class Application(TimeStampedModel):
    id = models.UUIDField(primary_key=True, max_length=128, default=uuid.uuid1, editable=False)
    name = models.CharField(max_length=128, verbose_name="应用名称")
    desc = models.CharField(max_length=128, blank=True, null=True, default="", help_text="应用描述",
                            verbose_name="应用描述")
    # user = models.ForeignKey("users.User", on_delete=models.CASCADE, verbose_name="创建者")
    type = models.CharField(max_length=128, verbose_name="应用类型", choices=ApplicationTypeChoices.choices,
                            default=ApplicationTypeChoices.SIMPLE)
