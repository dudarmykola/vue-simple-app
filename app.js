const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName(e, suffix) {
            !!e.target.value
                ? this.name  = e.target.value + suffix
                : this.name = '';
        }
    }
});

app.mount('#events');
