<script setup>
import DogDisplayView from "./views/DogDisplayView.vue";
import DogProfileView from "./views/DogProfileView.vue";
import NavbarView from "./views/NavbarView.vue";
</script>

<template>
  <header class="fixed-top">
    <NavbarView />
    <DogProfileView />
  </header>
  <body>
    <main :class="[$style.main]">
      <DogDisplayView />
    </main>
  </body>
</template>

<style module>
.main {
  margin-top: 27rem;
}
</style>
