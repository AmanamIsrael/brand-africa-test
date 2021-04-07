<template>
  <main>
    <div
      class="wrapper w-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="card border-0">
        <div class="card-body text-center">
          <p class="fs-3 m-0 fw-bold">Page Not Found!</p>
          <router-link to="/">Go Home</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "notFound",
};
</script>

<style scoped>
div.wrapper {
  height: 100vh;
}
.wrapper > .card {
  max-width: 600px;
  height: auto;
}
</style>