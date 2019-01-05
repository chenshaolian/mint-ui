<template>
<div class="main">
  <nav class="nav">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="shopping">
        <shopping></shopping>
      </mt-tab-container-item>

      <mt-tab-container-item id="quality">
        <quality></quality>
      </mt-tab-container-item>

      <mt-tab-container-item id="shoppingCart">
        <shoppingCart></shoppingCart>
      </mt-tab-container-item>

      <mt-tab-container-item id="mine">
        <mine></mine>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-navbar v-model="selected" class="my-nav-bar">
      <mt-tab-item id="shopping">
        <p class="iconfont icon-store_icon"></p>
        <span>商城</span>
      </mt-tab-item>
      <mt-tab-item id="quality">
        <p class="iconfont icon-pinzhibaozhang"></p>
        <span>品质</span>
      </mt-tab-item>
      <mt-tab-item id="shoppingCart">
        <p class="iconfont icon-tubiaozhizuomoban"></p>
        <span>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="mine">
        <p class="iconfont icon-wode"></p>
        <span>我的</span>
      </mt-tab-item>
    </mt-navbar>

    
  </nav>
</div>  
</template>
<script>
  import shopping from "./shopping/shopping"
  import quality from "./quality/quality"
  import shoppingCart from "./shoppingCart/shoppingCart"
  import mine from "./mine/mine"
  export default {
    components: {shopping, quality, shoppingCart, mine},
    data() {
      return {
        selected: 'shopping',
      }
    },
    
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>
<style scoped lang="scss">
  .main {
    height: 100%;
    .my-nav-bar {
      bottom: 0;
      width: 100%;
      position: fixed;
      border-top: 1px solid #eee;
      .iconfont {
        font-size: 2.4rem;
      }
    }
    .mint-navbar {
      .mint-tab-item {
        padding: 10px 0;
      }
    } 
  }
</style>

