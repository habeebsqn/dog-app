<template>
  <div class="container" v-if="!isLoading">
    <!-- <div v-if="isError" class="text-center">
      <p>{{ isError }}</p>
    </div> -->
    <div class="row">
      <div v-for="(dog, index) in dogs">
        <div class="col-md-3 mb-4 mt-4">
          <div class="card border-0">
            <img
              class="card-img-top"
              :class="[$style.image]"
              alt="..."
              :key="index"
              :src="dog"
            />
            <div class="card-footer">
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
    </div>
  </div>
  <div class="text-center" v-else-if="isLoading">
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
      isLoading: false,
      isSearching: this.$store.state.isSearching,
      onViewDog: {},
    };
  },

  methods: {
    async fetchDogs(endPoint) {
      this.isLoading = true;
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
      this.isLoading = false;
    },

    onHandleProfile(dog) {
      let url = dog;
      let breedName = url.split("/")[4];
      this.onViewDog = { url, breedName };
      this.$store.dispatch("onViewDog", this.onViewDog);
      window.console.log(this.onViewDog);
    },
  },

  created() {
    this.fetchDogs("https://dog.ceo/api/breeds/image/random/10");
  },

  // watch: {
  //   isLoading(newValue) {
  //     if ($store.state.isSearching) {
  //       this.fetchDogs("https://dog.ceo/api/breeds/image/random/5");
  //     } else {
  //       this.fetchDogs("https://dog.ceo/api/breeds/image/random/10");
  //     }
  //   },
  // },
};
</script>

<style module>
.image {
  width: "100px";
  height: "100px";
}

.loader {
  width: "3rem";
  height: "3rem";
  margin: "15rem";
}
</style>
