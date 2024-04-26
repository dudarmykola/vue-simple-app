<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <div class="actions">
      <button @click="toggleModal">show modal</button>
      <button @click="toggleModalTwo">show modal two</button>
    </div>
  </div>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign up for the giveaway</h1>
      <p>Grab your ninja pack for half price!</p>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up yow the newsletter</h1>
    </Modal>
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
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
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

.actions {
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-around;
}

.actions button {
  padding: 6px;
  border-radius: 10px;
  background: aliceblue;
  border: 2px solid #ccc;
}
</style>