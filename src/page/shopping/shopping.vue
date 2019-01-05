<template>
<div class="shopping">
  <div class="swipe">
    <mt-swipe :auto="5000">
      <mt-swipe-item style="background: #81ecec"></mt-swipe-item>
      <mt-swipe-item style="background: #a29bfe"></mt-swipe-item>
      <mt-swipe-item style="background: #ff7675"></mt-swipe-item>
    </mt-swipe>
  </div>
</div>
</template>

<script>
    export default {
      name: 'shopping',
      data() {
        return {
          
        }
      },
      methods: {

      }
    }
</script>

<style lang="scss">
  .shopping {
    height: 100%;
    .swipe {
      height: 200px;
    }
  }
</style>

