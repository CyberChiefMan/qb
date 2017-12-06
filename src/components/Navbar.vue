<template>
  <div id="Navbar">

    <ul>
      <li v-for="item in items"><a v-html="item.link">"item.link"</a></li>
    </ul>
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
