import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import markdown from '@/directives/markdown'

// import css
import './assets/css/custom.scss';

Vue.config.productionTip = false

Vue.directive("markdown", markdown);

new Vue({
  render: h => h(App),
}).$mount('#app')
