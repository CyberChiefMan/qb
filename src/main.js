import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Navbar from './components/Navbar.vue'
import HomePage from './components/HomePage.vue';
import ReportPage from './components/ReportPage.vue';
import Router from './components/Router.vue';

Vue.use(VueRouter)
const router=new VueRouter ({
  mode:'history',
  routes:[
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ReportPage',
      name: 'ReportPage',
      component: ReportPage
    }
    ,
    {
      path: '/Router',
      name: 'Router',
      component: Router
    }
  ]

})
new Vue({
  el: '#app',
  router:router,
  render: h => h(App),

})
