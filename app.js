const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'finish the course',
            linkGoal: {
                link: 'https://via.placeholder.com/150x33',
                title: 'test link',
            },
            courseGoalA: '<span>Learn Vue</span>',
            courseGoalB: '<i>Master Vue</i>'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();

            return ( randomNumber < 0.5) ? this.courseGoalA : this.courseGoalB
        }
    }
});

app.mount('#user-goal');
