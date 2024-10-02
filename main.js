import Vue from 'vue'
import App from './App.vue'
import Resume from './components/Resume.vue'

Vue.component('Resume', Resume)

new Vue({
  render: h => h(App)
}).$mount('#app')