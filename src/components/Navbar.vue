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
            <a class="nav-link " v-html="item.link">"item.link"<span class="sr-only">(current)</span></a>
          </li>


        </ul>

      </div>
    </nav>
    <!--<ul>
      <li v-for="item in items"><a v-html="item.link">"item.link"</a></li>
    </ul>-->
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
            link: '<router-link to="/">ReportPage</router-link>'
          },
        ],

      }
    }
  }
</script>
