<template>
  <main>
    <div class="container-fluid">
      <div
        class="wrapper d-flex flex-column justify-content-center align-items-center"
      >
        <h1 class="text-primary mb-3 fw-bold">Testify</h1>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="mb-3">
                <label for="mobile" class="form-label"
                  >Your Mobile Number</label
                >
                <input
                  type="text"
                  v-model="userInfo.mobile"
                  class="form-control"
                  id="mobile"
                />
              </div>
              <div class="mb-3">
                <label for="country" class="form-label"
                  >Choose Your Country</label
                >
                <select
                  id="country"
                  class="form-select form-select-md"
                  aria-label="Default select example"
                  v-model="userInfo.country"
                >
                  <option selected>Choose an option</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Senegal">Senegal</option>
                </select>
              </div>
              <button type="submit" class="w-100 btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "@/store/index";
export default {
  name: "home",
  data() {
    return {
      userInfo: {
        mobile: "",
        country: "",
      },
    };
  },
  computed: {
    getUserData() {
      return store.state.userHasEnteredInfo;
    },
  },

  methods: {
    submit() {
      const formData = { ...this.userInfo };
      store.commit("setUserEnteredInfoState", formData);
      this.$router.push("/test");
    },
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