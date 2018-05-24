<template>
  <div id="app">
    <transition name="slide">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="slide">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer/Footer'
  export default {
    name: 'App',
    components: {
      'v-footer': Footer
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  html, body{
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 28px;
  }
  .container-wrap{
    overflow: scroll;
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
  }

</style>
