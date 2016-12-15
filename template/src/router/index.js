import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { routes } from './routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new VueRouter({
  {{#if_eq routerConfig "history"}}
  mode: 'history',
  base: '/',
  {{/if_eq}}
  routes: routes
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
