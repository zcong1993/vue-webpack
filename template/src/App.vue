<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    {{#if router}}
    <h2>vue router</h2>
    <p>config the router at <strong>src/router</strong></p>
    <router-link to="/hello">go to hello</router-link>
    {{/if}}
    {{#if vuex}}
    <counter></counter>
    {{/if}}
  </div>
</template>

<script>
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#if vuex}}
import Counter from './components/Counter'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if}}
export default {
  name: 'app',
  components: {
    Hello{{#if vuex}},
    Counter{{/if}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
