<template>
  <div id="app">
      <Navbar></Navbar>
      <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import HomePage from './components/HomePage.vue'
  import ReportPage from './components/ReportPage.vue'
  import Router from './components/Router.vue'
  export default {
    name: 'app',
    components: {
      HomePage,
      ReportPage,
      Navbar,
    },
    data () {
      return {


      }
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

  h1, h2 {
    font-weight: normal;
    color: #e2542d;;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
