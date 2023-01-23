const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: ''
        }
    },
    watch: {
        name(newValue, oldValue) {
            console.log(oldValue);

            if (newValue === '') {
                this.fullname = '';
            } else {
                this.fullname = newValue + ' ' + 'Dudar';
            }
        }
    },
    computed: {
        // fullname() {
        //     return !this.name ? '' : this.name + ' ' + 'Dudar';
        // }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        submitForm() {
            alert('Hello!')
        },
        onRightClick(event) {
            event.target.style.backgroundColor = '#000';
        },
        resetInput() {
            this.name = '';
        }
    }
});

app.mount('#events');
