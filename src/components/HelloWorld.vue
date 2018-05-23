<template>
  <div class="hello">
    <md-button>Primary</md-button>
    <md-button disabled>Primary Disabled</md-button>
    <div v-drag class="btn">拖拽</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: require('../assets/logo.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn{
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 14px;
    border-radius: 50%;
  }
</style>
