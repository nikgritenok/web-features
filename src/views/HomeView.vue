<script setup lang="ts">
import { ref, watch } from 'vue'
import { useToast } from 'primevue/usetoast'

const isCSS = ref(true)
const toast = useToast()

const show = () => {
  console.log('showTemplate')
  toast.add({
    severity: 'info',
    summary: 'Как починить?',
    detail: 'Чтобы восстановить вид, перезагрузите страницу',
    life: 3000,
  })
}

watch(isCSS, (value) => {
  if (!value) {
    console.log('no-css')
    document.body.classList.add('no-css')
  } else {
    console.log('css')
    document.body.classList.remove('no-css')
  }
})
</script>

<template>
  <app-toast position="center" />
  <div class="wrapper">
    <div class="features">
      <div class="card">
        <app-accordion value="0">
          <app-accordion-panel value="0">
            <app-accordion-header>Фича 1: CSS</app-accordion-header>
            <app-accordion-content>
              <div class="flex align-items-center">
                <p class="mr-3">
                  Внешний вид любого сайта это CSS, выключите и поломайте этот сайт!
                </p>
                <app-toggle-switch v-model="isCSS" @click="show"></app-toggle-switch>
              </div>
            </app-accordion-content>
          </app-accordion-panel>
          <app-accordion-panel value="1">
            <app-accordion-header>Фича 2</app-accordion-header>
            <app-accordion-content>
              <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
                velit, sed quia non numquam eius modi.
              </p>
            </app-accordion-content>
          </app-accordion-panel>
        </app-accordion>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #333;
  margin: 20px;
  margin-top: 40px;
  border-radius: 18px;
}

p {
  margin: 0px;
}

.no-css {
  * {
    all: unset;
  }
}
</style>
