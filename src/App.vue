<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <div class="actions">
      <button @click="toggleModal">show modal</button>
      <button @click="toggleModalTwo">show modal two</button>
    </div>
  </div>
  <teleport v-if="showModal" to=".modals">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign up for the giveaway</h1>
      <p>Grab your ninja pack for half price!</p>
    </Modal>
  </teleport>
  <teleport v-if="showModalTwo" to=".modals">
    <Modal @close="toggleModalTwo">
      <h1>Sign up yow the newsletter</h1>
    </Modal>
  </teleport>
  <div class="content">
    <div class="actions">
      <button @click="start">play</button>
    </div>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <div class="result">Reacion time is {{ score }} ms</div>
  </div>

</template>

<script>
import Modal from '@/components/Modal.vue';
import Block from '@/components/Block.vue';

export default {
  name: 'App',
  components: { Modal, Block },
  data() {
    return {
      title: 'My first vue app',
      showModal: false,
      showModalTwo: false,
      isPlaying: false,
      delay: null,
      score: null
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
    start() {
      this.delay = 2000 + Math.random() * 5000 ;
      this.isPlaying = true;
      console.log(this.delay);
    },
    endGame(reactTime) {
      this.score = reactTime;
      this.isPlaying = false;
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