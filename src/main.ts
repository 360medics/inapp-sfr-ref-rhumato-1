import { createApp } from 'vue'
import VueGtag from "vue-gtag";
import App from './App.vue'
import router from './router'
import { store } from './store'

// G-JVLG7EPNN6

createApp(App)
  .use(router)
  .use(store)
  .use(
    VueGtag,
    {
      config: {
        id: "G-JVLG7EPNN6",
      },
    },
    router
  )
  .mount('#app')
