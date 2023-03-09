import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import Router from "vue-router";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

import './assets/main.css'

Vue.use(Router)

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
})
