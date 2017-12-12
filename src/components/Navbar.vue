<template>
  <div id="Navbar">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Qanoonban</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="item in items">
            <router-link :to="item.link" class="nav-link" active-class="active">
              {{ item.title }}
            </router-link>
          </li>
        </ul>


      </div>
    </nav>


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
            link: '/'
          },
          {
            title: 'Report',
            link: '/ReportPage'
          },
          {
            title: 'Router',
            link: '/Router'
          },
        ],




      }
    },
    methods:{

    }
  }
</script>
