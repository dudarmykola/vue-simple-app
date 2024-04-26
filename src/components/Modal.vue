<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="links">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
      'header',
      'text',
      'theme'
  ],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
};
</script>

<style scoped>
.modal h1 {
  color: #03cfb4;
}

.modal {
  width: 600px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.links {
  display: flex;
  justify-content: space-between;
}

.modal :slotted(a) {
  margin: 10px;
  padding: 6px;
  border-radius: 10px;
  background: #fff;
  color: dimgray;
  border: 2px solid dimgray;
  text-decoration: unset;
}
</style>