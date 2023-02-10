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
<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
