from rest_framework.decorators import action
from rest_framework.views import APIView, Request
from rest_framework.response import Response



class Login(APIView):

    @action(methods=['POST'], detail=False)
    def post(self, request: Request):
        return Response({"code": 20000, "data": 'admin-token'})
    
class Profile(APIView):
    def get(self, request: Request):
        
        return Response({"code": 20000, "data": {
             'roles': ['admin'],
             'introduction': 'I am a super administrator',
             'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
             'name': 'Super Admin'
        }})