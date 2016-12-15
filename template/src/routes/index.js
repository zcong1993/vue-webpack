import App from '../App'
import Hello from '../components/Hello'

export const routes = [
  { path: '/', name: 'index', component: App },
  { path: '/hello', name: 'hello', component: Hello },
]
