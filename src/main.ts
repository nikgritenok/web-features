import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'

import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component('app-accordion', Accordion)
app.component('app-accordion-panel', AccordionPanel)
app.component('app-accordion-header', AccordionHeader)
app.component('app-accordion-content', AccordionContent)
