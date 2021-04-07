<template>
  <main>
    <div class="container-fluid">
      <div
        class="wrapper d-flex flex-column justify-content-center align-items-center"
      >
        <h1 class="text-primary mb-3 fw-bold">Test Summary</h1>
        <router-link to="/"><p class="fs-6">back Home</p></router-link>
        <div class="card border-0">
          <div class="card-body text-center">
            <div class="card mb-3">
              <div class="card-body">
                <p class="mb-3 fw-bold fs-4">Your Score</p>
                <p class="text-success fs-3 fw-bold mb-0">
                  {{ getScore }}/{{ 5 * this.allQuestions.data.length }}
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <p class="mb-3 fw-bold fs-4">
                  Total Number of Questions Answered
                </p>
                <p class="text-success fs-3 fw-bold mb-0">
                  {{ getNoOfAnsweredQuestions - 1 }}/{{
                    this.allQuestions.data.length - 1
                  }}
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <p class="mb-3 fw-bold fs-4">Total Number of Correct Answers</p>
                <p class="text-success fs-3 fw-bold mb-0">
                  {{ getNoOfCorrectQuestions }}/{{
                    this.allQuestions.data.length - 1
                  }}
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <p class="mb-3 fw-bold fs-4">
                  Total Number of Incorrect Answers
                </p>
                <p class="text-success fs-3 fw-bold mb-0">
                  {{ getNoOfIncorrectQuestions }}/{{
                    this.allQuestions.data.length - 1
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "@/store/index";
export default {
  name: "summaryPage",
  data() {
    return {
      allQuestions: {},
      renderData: [
        {
          title: "Your Score",
          value: this.getScore,
        },
        {
          title: "Total Number of Questions Answered",
          value: "",
        },
        {
          title: "Total Number of Correct Answers",
          value: "",
        },
        {
          title: "Total Number of incorrect Answers",
          value: "",
        },
      ],
    };
  },

  computed: {
    answeredQuestions() {
      return store.state.answeredQuestions;
    },
    getScore: function () {
      return this.allQuestions.score;
    },
    getNoOfAnsweredQuestions: function () {
      const questions = this.allQuestions.data;
      const answered = questions.filter((q) => q.answered === true);
      return answered.length;
    },
    getNoOfCorrectQuestions: function () {
      const questions = this.allQuestions.data;
      const correct = questions.filter(
        (q) => q.selectedChoice.is_correct_choice === 1
      );
      return correct.length;
    },
    getNoOfIncorrectQuestions: function () {
      const questions = this.allQuestions.data;
      const inCorrect = questions.filter(
        (q) => q.selectedChoice.is_correct_choice === 0
      );
      return inCorrect.length - 1;
    },
  },
  created() {
    this.allQuestions = this.answeredQuestions;
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