<template>
  <div>
    <nav class="navbar navbar-dark bg-dark" :class="[$style.nav]">
      <div class="container-fluid">
        <a class="navbar-brand">HAPPY DOGS GALLERY</a>
        <form class="d-flex" @click.prevent="onHandleSearch">
          <input
            class="form-control me-2"
            type="search"
            required
            placeholder="Search"
            v-model="char"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      char: "",
      isSearching: false,
    };
  },

  methods: {
    onHandleSearch() {
      if (this.char.length > 0) {
        this.$store.dispatch("inputValue", this.char);
        this.$store.dispatch("isSearching", (this.isSearching = true));
      }
    },
  },
};
</script>

<style module>
.nav {
  background-color: #e3f2fd;
}
</style>
