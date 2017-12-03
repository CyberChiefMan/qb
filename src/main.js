import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import ReportPage from './components/ReportPage.vue';

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
  ]

})
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
