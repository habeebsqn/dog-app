<template>
  <div class="row justify-content-start">
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
</template>

<script>
export default {};
</script>

<style module>
.profile {
  width: 300px;
  height: 300px;
}
</style>
