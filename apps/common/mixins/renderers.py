import json
import logging
from rest_framework.renderers import JSONRenderer


request_err_log = logging.getLogger('request_err')

class BaseResponse:
    def __init__(self):
        self.code = 20000
        self.data = None
        self.errors = None

    @property
    def dict(self):
        # print(self.__dict__)
        return self.__dict__

class FitJSONRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):

        """
        如果使用这个render，
        普通的response将会被包装成：
            {"code":200,"data":"X","msg":"X"}
        使用方法：
            - 全局
                REST_FRAMEWORK = {
                'DEFAULT_RENDERER_CLASSES': ('utils.response.FitJSONRenderer', ),
                }
            - 局部
                class UserCountView(APIView):
                    renderer_classes = [FitJSONRenderer]
        """
        response_body = BaseResponse()
        response = renderer_context.get('response')
        response_body.code = response.status_code
        if response_body.code >= 400:
            request_err_log.error(json.dumps(data, ensure_ascii=False))
            response_body.errors = data['detail'] if 'detail' in data else data
        else:
            response_body.data = data
        return super().render(response_body.dict, accepted_media_type, renderer_context)
