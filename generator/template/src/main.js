import Vue from 'vue'
import App from './App.vue'
import router from './router'
<%_ if(options.vuex){ _%>
import store from './store'
<%_ } _%>

Vue.config.productionTip = false

new Vue({
  router,
  <%_ if(options.vuex){ _%>
  store,
  <%_ } _%>
  render: h => h(App)
}).$mount('#app')