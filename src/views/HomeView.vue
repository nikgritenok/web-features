<script setup lang="ts"></script>

<template>
  <main>
    <div class="wrapper">
      <div class="features">
        <div class="card">
          <app-accordion value="0">
            <app-accordion-panel value="0">
              <app-accordion-header>Header I</app-accordion-header>
              <app-accordion-content>
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </app-accordion-content>
            </app-accordion-panel>
            <app-accordion-panel value="1">
              <app-accordion-header>Header II</app-accordion-header>
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
  </main>
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
</style>
