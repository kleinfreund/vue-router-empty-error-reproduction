import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: { template: `<div>Root</div>` },
      children: [
        {
          path: 'existing',
          name: 'existing-route',
          component: { template: `<div>Existing</div>` },
        }
      ],
    }
  ],
})

const app = createApp(App)

app.use(router)
app.mount('#app')
