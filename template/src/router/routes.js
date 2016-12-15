import App from '../App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from '../components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const routes = [
  { path: '/', name: 'index', component: App },
  { path: '/hello', name: 'hello', component: Hello }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
