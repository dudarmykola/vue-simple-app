<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <button @click="toggleModal">show modal</button>
  </div>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
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
<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>