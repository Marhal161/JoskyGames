from django.urls import path
from .views.LoginView import LoginView
from .views.LogoutView import LogoutView
from .views.RegisterView import RegisterView
from .views.pages import auth_page  # Импортируем auth_page

urlpatterns = [
    path('login/', auth_page, name='login'),  # Рендер страницы auth.html для login
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', auth_page, name='register'),  # Рендер страницы auth.html для register
]
