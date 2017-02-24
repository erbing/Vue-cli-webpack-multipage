<template>
  <div id="app">
    <img src="./images/logo.png">
    <hello></hello>
    <uiButton type="success" style="width: 200px">test</uiButton>
    <i class="icon-download"></i>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import Hello from 'components/Hello/Hello'

  export default {
    name: 'app',
    components: {
      Hello
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
    margin-top: 60px;
  }
</style>
