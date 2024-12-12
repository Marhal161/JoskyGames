const app = new Vue({
    el: '#app',
    data: {
        currentForm: 'login',
        loginForm: {
            email: '',
            password: ''
        },
        registerForm: {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            phone: ''
        },
        baseUrl: 'http://localhost:8000' // Укажите ваш URL API
    },
    methods: {
        async login() {
            try {
                const csrfToken = document.querySelector('input[name=csrfmiddlewaretoken]').value;
                const response = await fetch(`${this.baseUrl}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken // добавляем CSRF-токен
                    },
                    body: JSON.stringify(this.loginForm)
                });

                if (!response.ok) throw new Error('Ошибка входа');
                this.$router.push('/main'); // Перенаправляем на страницу main.html
            } catch (error) {
                console.error(error);
                alert('Ошибка входа. Пожалуйста, попробуйте снова.');
            }
        },

        async register() {
            try {
                const csrfToken = document.querySelector('input[name=csrfmiddlewaretoken]').value;
                const response = await fetch(`${this.baseUrl}/api/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken // добавляем CSRF-токен
                    },
                    body: JSON.stringify(this.registerForm)
                });

                if (!response.ok) throw new Error('Ошибка регистрации');
                this.$router.push('/main'); // Перенаправляем на страницу main.html
            } catch (error) {
                console.error(error);
                alert('Ошибка регистрации. Пожалуйста, попробуйте снова.');
            }
        },

        showLoginForm() {
            this.currentForm = 'login';
        },
        showRegisterForm() {
            this.currentForm = 'register';
        }
    }
});

