<template>
  <div class="container marketing" v-if="!this.$store.state.isLoading">
    <div class="row">
      <div class="col-lg-4 col-sm-6 col-md-6" v-for="(dog, index) in dogs">
        <img
          :src="dog"
          :key="index"
          class="rounded mx-auto d-block"
          :class="[$style.image]"
          alt="..."
        />
        <p class="text-center mt-2">
          <button class="btn btn-secondary" @click="onHandleProfile(dog)">
            View details &raquo;
          </button>
        </p>
      </div>
    </div>
  </div>
  <div
    class="d-flex justify-content-center"
    v-else-if="this.$store.state.isLoading"
  >
    <div class="spinner-grow" :class="[$style.loader]" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dogs: [],
      onViewDog: {},
    };
  },
  methods: {
    async fetchDogs(endPoint) {
      this.$store.dispatch("isLoading", true);

      try {
        const response = await fetch(endPoint);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        this.dogs = data.message;
      } catch (error) {}
      this.$store.dispatch("isLoading", false);
      this.$store.dispatch("isSearching", false);
    },

    onHandleProfile(dog) {
      let url = dog;
      let breedName = url.split("/")[4];
      this.onViewDog = { url, breedName };
      this.$store.dispatch("onViewDog", this.onViewDog);
      this.$store.dispatch("onView", true);
    },
  },

  created() {
    this.fetchDogs("https://dog.ceo/api/breeds/image/random/50");
  },

  computed: {
    search() {
      return this.$store.state.searchChar;
      // Or return value of isSearching
    },
  },
  watch: {
    search(newValue, oldValue) {
      //we accept the isSearching value as newValue
      //and use it to conditionally render fetchDoys
      //based on default or searched breed
      if (newValue.trim().length > 0) {
        this.fetchDogs(
          `https://dog.ceo/api/breed/${this.$store.state.searchChar}/images`
        );
      } else {
        this.fetchDogs("https://dog.ceo/api/breeds/image/random/50");
      }
    },
  },
};
</script>

<style module>
.image {
  width: 200px;
  height: 200px;
}

.loader {
  width: 3rem;
  height: 3rem;
}
</style>
