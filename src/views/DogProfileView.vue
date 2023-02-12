<template>
  <div :class="[$style.display]">
    <div
      class="d-flex justify-content-center"
      v-if="this.$store.state.isLoading && !this.$store.state.isSearching"
    >
      <div class="spinner-grow" :class="[$style.loader]" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else :class="[$style.con]">
      <div v-if="this.$store.state.onView" class="text-center">
        <figure class="figure">
          <img
            :src="this.$store.state.onViewDog.url"
            class="figure-img img-fluid rounded"
            :class="[$style.image]"
            alt="..."
          />
          <figcaption class="figure-caption text-end">
            {{ $store.state.onViewDog.breedName }}
          </figcaption>
        </figure>
      </div>
      <div v-else>
        <div class="card text-center">
          <i class="bi bi-image"></i>
          <div class="card-body">SELECT A DOG TO VIEW BREED</div>
        </div>
        <!-- <div class="text-center">
          <i class="bi-gear-fill bi--spin"></i>
          <h1>SELECT A DOG TO VIEW BREED</h1>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style module>
.display {
  background-color: black;
  width: 100%;
  height: 20rem;
  padding: 3rem;
}
.loader {
  width: 3rem;
  height: 3rem;
}
.image {
  height: 200px;
  width: 200px;
}
.con {
  height: auto;
}
</style>
