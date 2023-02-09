<template>
  <div class="row justify-content-start">
    <div class="col-6 offset-3">
      <div class="card">
        <img src="{selectedDog.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text text-center">{selectedDog.breedName}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   setup() {
  //     return {};
  //   },
};
</script>

<style module>
.profile {
  width: "300px";
  height: "300px";
}
</style>
