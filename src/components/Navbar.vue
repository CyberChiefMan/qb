<template>
  <div id="Navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Qanoonban</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="item in items" class="nav-item ">
            <!-- <button class="btn"v-html="item.link" >"item.link"</button> -->
            <a class="nav-link " v-html="item.link" @click="call">
              <span class="sr-only">(current)</span>
            </a>
          </li>


        </ul>

      </div>
    </nav>
    <!--<ul>
      <li v-for="item in items"><a v-html="item.link">"item.link"</a></li>
    </ul>-->
    <router-link to="/">HomePage</router-link>
    <router-link to="/ReportPage">ReportPage</router-link>
    <router-link to="/Router">Router</router-link>
    <router-view></router-view>


  </div>
</template>

<script>
  export default{
    name: 'Navbar',
    data(){
      return {
        items: [
          {
            title: 'Home',
            link: '<router-link to="/">HomePage</router-link>'
          },
          {
            title: 'Report',
            link: '<router-link to="/ReportPage">ReportPage</router-link>'
          },
          {
            title: 'Router',
            link: '<router-link to="/Router">Router</router-link>'
          },
        ],

      }
    },
    methods:{
      call(){
        alert('clicked');
      }
    }
  }
</script>
