const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            active: true,
            fullname: ''
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
        paragraphClasses() {
            return {
                demo: true,
                active: this.active
            }
        }
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
        },
        clickOnP() {
            this.active = !this.active;
        }
    }
});

app.mount('#events');
