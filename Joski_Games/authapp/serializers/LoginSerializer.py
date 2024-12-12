from rest_framework import serializers
from django.contrib.auth import authenticate


class LogSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data['email']
        password = data['password']

        if not email:
            raise serializers.ValidationError({'email': 'Это поле обязательно.'})

        if not password:
            raise serializers.ValidationError({'password': 'Это поле обязательно.'})

        username = email.split('@')[0]  # Берем часть до "@"

        user = authenticate(username=username, password=password)

        if user is None:
            raise serializers.ValidationError('Неверный логин или пароль')

        data['user'] = user
        return data
