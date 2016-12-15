{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#if router}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { routes } from './routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{else}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if}}

{{#if router}}
const router = new VueRouter({
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if router}}
  router,
  template: '<router-view></router-view>'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{else}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{/if}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
