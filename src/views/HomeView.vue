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

const setCursor = (cursor: string) => {
  document.body.style.cursor = `url(/src/assets/cursors/${cursor}), default`

  document.querySelectorAll('*').forEach((el) => {
    ;(el as HTMLElement).style.cursor = `url(/src/assets/cursors/${cursor}), auto`
  })
}

const resetCursor = () => {
  // Сбрасываем глобальный стиль курсора для body
  document.body.style.cursor = 'auto'

  // Сбрасываем стиль курсора для всех элементов
  document.querySelectorAll('*').forEach((el) => {
    ;(el as HTMLElement).style.cursor = ''
  })
}
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
            <app-accordion-header>Фича 2: Слайдер</app-accordion-header>
            <app-accordion-content>
              <div>
                <p class="m-0">Слайдер это круто. Переключите слайдер и увидите что произойдет.</p>
              </div>
            </app-accordion-content>
          </app-accordion-panel>
          <app-accordion-panel value="2">
            <app-accordion-header>Фича 3: Кастомные курсоры</app-accordion-header>
            <app-accordion-content>
              <div>
                <p class="m-0">
                  Кастомные курсоры это круто. Переключите курсор и увидите что произойдет.
                </p>
                <div class="flex align-items-center mt-3 gap-2">
                  <app-button label="Сбросить" @click="resetCursor" />
                  <app-button icon="pi pi-face-smile" @click="setCursor('nyan-cursor.png')" />
                </div>
              </div>
            </app-accordion-content>
          </app-accordion-panel>
          <app-accordion-panel value="3">
            <app-accordion-header>Фича 4: Тема</app-accordion-header>
            <app-accordion-content>
              <div>
                <p>Тема это круто. Переключите тему и увидите что произойдет.</p>
                <app-button class="mt-3" label="Переключить тему" />
              </div>
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
