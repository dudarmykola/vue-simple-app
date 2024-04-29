<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja Fingers';
    } else if (this.score < 400) {
      this.rank = 'Rapid Reflex';
    } else {
      this.rank = 'Snail pace...';
    }
  }
};
</script>

<template>
  <div class="result">Reaction time is {{ score }} ms</div>
  <p class="rank">{{ rank }}</p>
</template>

<style scoped>
  .rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
  }
</style>