<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">HAPPY DOGS</a>
        <form class="d-flex" @click.prevent="onHandleSearch">
          <input
            class="form-control me-2"
            required
            type="search"
            placeholder="Search"
            aria-label="Search"
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
      if (this.char.trim().length > 0) {
        this.$store.dispatch("inputValue", this.char);
        this.$store.dispatch("isSearching", (this.isSearching = true));
      }
    },
  },
};
</script>
