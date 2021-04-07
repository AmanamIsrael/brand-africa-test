import Vue from "vue";
import home from "@/pages/home/index";
import test from "@/pages/test/index";
import summaryPage from "@/pages/summary/index";
import notFound from "@/pages/notfound/index";
import store from "@/store/index";

function guardCheckInfo(to, from, next) {
  const userHasEnteredInfo = store.state.userHasEnteredInfo;
  if (userHasEnteredInfo) {
    next();
  } else {
    next("/");
    Vue.swal({
      title: "Please Fill Your Details",
      confirmButtonText: "alright!",
    });
  }
}
function guardCheckTakenTest(to, from, next) {
  const userHasTakenTest = store.state.isUserHasTakenTest;

  if (userHasTakenTest) {
    next();
  } else {
    next("/");
    Vue.swal({
      title: "You didnt take your text",
      confirmButtonText: "alright!",
    });
  }
}

const routes = [
  {
    path: "",
    component: home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/test",
    component: test,
    beforeEnter: guardCheckInfo,
    meta: {
      title: "Test",
    },
  },
  {
    path: "/summary",
    component: summaryPage,
    beforeEnter: guardCheckTakenTest,
    meta: {
      title: "Summary",
    },
  },
  { path: "*", component: notFound },
];

export default routes;
