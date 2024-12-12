// main.js
new Vue({
    el: '#app',
    data: {
        username: 'User Name',
        games: [
            { id: 'spy', name: 'Шпион', image: '/site/images/spy.png' },
            { id: 'mafia', name: 'Мафия', image: '/site/images/mafia.jpg' },
            { id: 'chess', name: 'Шахматы', image: '/site/images/chess.jpg' }
        ],
        messages: [],
        newMessage: '',
        baseUrl: 'http://localhost:8000'
    },
    
    methods: {
        startGame() {
            const gameId = this.$event.currentTarget.getAttribute('data-game-id');
            window.location.href = `/site/games/${gameId}.html`;
        },
        sendMessage() {
            if (this.newMessage.trim()) {
                const message = {
                    id: Date.now(),
                    username: this.username,
                    text: this.newMessage.trim()
                };
                this.messages.push(message);
                this.newMessage = '';
                this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight;
            }
        }
    }
});
