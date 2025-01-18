import '@/assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

import App from './App.vue'
import router from './router'

import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Button from 'primevue/button'
import ToggleSwitch from 'primevue/toggleswitch'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(createPinia())
app.use(router)
app.use(ToastService)

app.mount('#app')

app.component('app-accordion', Accordion)
app.component('app-accordion-panel', AccordionPanel)
app.component('app-accordion-header', AccordionHeader)
app.component('app-accordion-content', AccordionContent)
app.component('app-button', Button)
app.component('app-toggle-switch', ToggleSwitch)
app.component('app-toast', Toast)
