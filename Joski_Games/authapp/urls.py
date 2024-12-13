from django.urls import path
from django.views.generic import TemplateView  # Импорт для рендера шаблона
from .views.LoginView import LoginView
from .views.LogoutView import LogoutView

urlpatterns = [
    path('login', LoginView.as_view(), name='login'),
    path('register', TemplateView.as_view(template_name="auth.html"), name='register'),  # Простое отображение HTML
    path('logout', LogoutView.as_view(), name='logout'),
]
