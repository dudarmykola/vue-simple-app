const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'finish the course',
            linkGoal: {
                link: 'https://via.placeholder.com/150x33',
                title: 'test link'
            }
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();

            return ( randomNumber < 0.5) ? 'Learn Vue' : 'Master Vue'
        }
    }
});

app.mount('#user-goal');
