require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

const App = require('./pages/App');

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./pages/Homepage') },
    { path: '/login', component: require('./pages/Login') },
    { path: '/register', component: require('./pages/Register') }
  ]
});

Vue.use(VueRouter);

const app = new Vue({
  router,
  el: '#app',
  template: '<App />',
  components: { App }
});
