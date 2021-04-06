import Vue from "vue";
import home from "@/pages/home/index";
import test from "@/pages/test/index";
import summary from "@/pages/summary/index";
import notFound from "@/pages/notfound/index";
import store from "@/store/index";

function guardRoutes(to, from, next) {
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
    beforeEnter: guardRoutes,
    meta: {
      title: "Test",
    },
  },
  {
    path: "/summary",
    component: summary,
    beforeEnter: guardRoutes,
    meta: {
      title: "Summary",
    },
  },
  { path: "*", component: notFound },
];

export default routes;
