<template>
  <main>
    <div class="container-fluid">
      <div
        class="wrapper d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <p class="fs-5 text-right">{{ timer }}s remaining</p>
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="answered">
                <p class="fs-3 text-center mb-3">
                  The Stadium of Light is home to which English football club?
                </p>
                <div class="container-fluid">
                  <div class="option mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="option"
                      id="option1"
                    />
                    <label class="ms-3 form-check-label" for="option1">
                      West Bromwich Albion
                    </label>
                  </div>
                  <div class="option mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="option"
                      id="option2"
                    />
                    <label class="ms-3 form-check-label" for="option2">
                      West Bromwich Albion
                    </label>
                  </div>
                  <div class="option mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="option"
                      id="option3"
                    />
                    <label class="ms-3 form-check-label" for="option3">
                      West Bromwich Albion
                    </label>
                  </div>
                  <div class="option mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="option"
                      id="option4"
                    />
                    <label class="ms-3 form-check-label" for="option4">
                      West Bromwich Albion
                    </label>
                  </div>
                  <button type="submit" class="p-3 w-100 btn btn-primary">
                    Next question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import data from "@/assets/static/data/index";
import store from "@/store/index";
export default {
  name: "test",
  data() {
    return {
      allQuestions: data(),
      answeredQuestions: {},
      timer: 120,
    };
  },
  computed: {},
  methods: {
    saveAnsweredQuestions() {
      store.commit("setAnsweredQuestions", this.answeredQuestions);
    },
    answered() {
      console.log("answered");
    },
  },
  created() {
    console.log(this.allQuestions);
  },
  mounted() {
    const setTimer = setInterval(() => {
      if (this.timer === 0) {
        console.log("finished");
        clearInterval(setTimer);
        return;
      }
      this.timer -= 1;
    }, 1000);
  },
};
</script>

<style scoped >
.wrapper {
  height: 100vh;
}
div.card {
  max-width: 600px;
  width: auto;
}
.option {
  background-color: aliceblue;
  padding: 2em;
  border-radius: 5px;
}
</style>