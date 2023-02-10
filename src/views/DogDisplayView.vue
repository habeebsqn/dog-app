<template>
  <div class="container" v-if="!this.$store.state.isLoading">
    <div class="row">
      <template v-for="(dog, index) in dogs">
        <div class="col-md-4 m-4">
          <div class="card border-0">
            <img
              class="card-img-top"
              :class="[$style.image]"
              alt="..."
              :key="index"
              :src="dog"
            />
            <div class="card-body">
              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary"
                  type="button"
                  @click="onHandleProfile(dog)"
                >
                  VIEW BREED
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="text-center" v-else-if="this.$store.state.isLoading">
    <div class="spinner-grow" :class="[$style.loader]" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h3>FETCHING HAPPY DOGS IMAGES</h3>
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
      } catch (error) {
        console.error(error.message);
      }
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
    this.fetchDogs("https://dog.ceo/api/breeds/image/random/10");
  },

  computed: {
    search() {
      return this.$store.state.isSearching;
      // Or return value of isSearching
    },
  },
  watch: {
    search(newValue, oldValue) {
      //we accept the isSearching value as newValue
      //and use it to conditionally render fetchDoys
      //based on default or searched breed
      if (newValue) {
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
.contain {
  width: 50%;
}
.loader {
  width: 3rem;
  height: 3rem;
  margin: 15rem;
}
</style>
