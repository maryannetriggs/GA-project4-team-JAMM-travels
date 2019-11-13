from django.shortcuts import render
from django.views import View

# Create your views here.

class ListView(View):

    def get(self, request):
        blogs = Blog.objects.all()

        return render(request, 'index.html', {'blogs': blogs})
