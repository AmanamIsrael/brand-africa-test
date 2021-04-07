<template>
  <main>
    <div class="container-fluid">
      <div
        class="wrapper d-flex flex-column justify-content-center align-items-center"
      >
        <h1 class="text-primary mb-3 fw-bold">Test Summary</h1>
        <div class="card">
          <div class="card-body text-center"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "@/store/index";
export default {
  name: "summaryPage",

  computed: {
    answeredQuestions() {
      return store.state.answeredQuestions;
    },
  },

  mounted() {
    console.log(this.answeredQuestions);
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
}
div.card {
  min-width: 400px;
}
</style>