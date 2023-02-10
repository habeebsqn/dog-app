<script setup>
import DogDisplayView from "./views/DogDisplayView.vue";
import DogProfileView from "./views/DogProfileView.vue";
import NavbarView from "./views/NavbarView.vue";
</script>

<template>
  <header class="position-sticky top-0 start-0">
    <div>
      <NavbarView />
    </div>
  </header>
  <body>
    <div class="container">
      <div class="row">
        <div class="col overflow-scroll" :class="[$style.view]">
          <DogDisplayView />
        </div>
        <div class="col bg-light align-self-center">
          <DogProfileView />
        </div>
      </div>
    </div>
  </body>
</template>

<style module>
.view {
  height: 43rem;
}
</style>
