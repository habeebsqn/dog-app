<template>
  <div class="text-center" v-if="this.$store.state.isLoading">
    <div class="spinner-grow" :class="[$style.loader]" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <div class="row justify-content-start" v-if="this.$store.state.onView">
      <div class="col-6 offset-3 align-self-start">
        <div class="card">
          <img
            :src="this.$store.state.onViewDog.url"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text text-center">
              {{ $store.state.onViewDog.breedName }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <DogIconView />
    </div>
  </div>
</template>

<script setup>
import DogIconView from "../components/icons/DogIconView.vue";
</script>
<script></script>

<style module>
.profile {
  width: 300px;
  height: 300px;
}

.loader {
  width: 3rem;
  height: 3rem;
  margin: 15rem;
}
</style>
