<template>
  <div class="backdrop">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p class="content">content</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
      'header',
      'text',
      'theme'
  ]
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
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1{
  color: white;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>