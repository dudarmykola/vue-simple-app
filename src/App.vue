<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale"/>
  </div>
  <button @click="toggleModal">show modal</button>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first vue app',
      header: 'Sign up for the giveaway',
      text: 'Grab your ninja pack for half price!',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
};
</script>
