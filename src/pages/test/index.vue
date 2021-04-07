<template>
  <main>
    <div class="container-fluid">
      <div
        class="wrapper d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <p class="fs-6 fw-bold text-center text-primary">
            {{ timer }}s remaining
          </p>
          <p class="fs-5 text-center">
            Question: {{ getCurrIndex() + 1 }}/{{ allQuestions.length }}
          </p>
          <div class="card border-0">
            <div class="card-body">
              <form @submit.prevent="nextQuestion">
                <p class="fs-3 text-center mb-3">
                  {{ currQuestion.question }}
                </p>
                <div class="container-fluid">
                  <div
                    class="option mb-3"
                    v-for="option in currQuestion.choices"
                    :key="option.id"
                    @click="select(option.id)"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="option"
                      :id="option.id"
                      @click="getChoice(option)"
                    />
                    <label
                      class="ms-3 form-check-label"
                      :id="option.id"
                      :for="option.id"
                    >
                      {{ option.choice }}
                    </label>
                  </div>
                  <button type="submit" class="p-3 w-100 btn btn-primary">
                    {{ buttonState }}
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
      buttonState: "Next question",
      questionsData: data(),
      allQuestions: data().data,
      timer: 120,
      currQuestion: {},
      currChoice: {},
      score: 0,
      questionsAnswered: 0,
      isState: false,
    };
  },
  methods: {
    select(id) {
      const label = document.getElementById(id);
      label.click();
    },
    saveAnsweredQuestions() {
      store.commit("setAnsweredQuestions", this.questionsData);
      this.$router.push("/summary");
    },
    getChoice(data) {
      this.currQuestion.answered = true;
      this.currChoice = data;
    },
    getCurrIndex() {
      return this.allQuestions.findIndex(
        (question) => this.currQuestion.id === question.id
      );
    },
    nextQuestion() {
      if (
        this.currQuestion.answered &&
        this.currChoice.is_correct_choice === 1
      ) {
        this.score = this.score + parseFloat(this.currQuestion.points);
      }
      this.currQuestion.selectedChoice = this.currChoice;
      this.getCurrIndex() === this.allQuestions.length - 2
        ? (this.buttonState = "Submit Test")
        : false;
      if (
        this.getCurrIndex() &&
        this.getCurrIndex() === this.allQuestions.length - 1
      ) {
        this.$swal("You have completed your test");
        this.submitQuestion();
        return;
      }
      this.currQuestion = this.allQuestions[this.getCurrIndex() + 1];
    },
    submitQuestion() {
      this.questionsData.score = this.score;
      this.questionsData.data = this.allQuestions;
      this.saveAnsweredQuestions();
    },
  },
  mounted() {
    this.isState = true;
    this.currQuestion = this.allQuestions[0];
    this.allQuestions.forEach((question) => {
      question.answered = false;
      question.selectedChoice = {};
    });
    const setTimer = window.setInterval(() => {
      if (this.timer === 0) {
        clearInterval(setTimer);
        this.$swal({
          title: "Your time is up!🤝",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          willClose: () => {
            if (this.isState) {
              this.submitQuestion();
            }
          },
        });
        return;
      }
      this.timer -= 1;
    }, 1000);
  },
  destroyed() {
    this.isState = false;
  },
};
</script>

<style scoped >
.wrapper {
  height: 100vh;
}
div.card {
  max-width: 600px;
}
.option {
  background-color: aliceblue;
  padding: 2em;
  border-radius: 5px;
  cursor: pointer;
}
.option > label {
  cursor: pointer;
}
</style>