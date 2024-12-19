from django.urls import include, path
from rest_framework import routers

from .views import LLModelViewSet

router = routers.DefaultRouter()
router.register(r'models', LLModelViewSet)
# router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('settings/', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]