import home from "@/pages/home/index";
import test from "@/pages/test/index";
import summary from "@/pages/summary/index";
import notFound from "@/pages/notfound/index";

//guard test route

// function guardRoutes(to, from, next) {
//     const token = localStorage.getItem("auth-token");
//     if (token) {
//       next();
//     } else {
//       next("/");
//     }
//   }

const routes = [
  { path: "", component: home },
  {
    path: "/test",
    component: test,
    //   beforeEnter: guardRoutes,
  },
  {
    path: "/summary",
    component: summary,
    //   beforeEnter: guardRoutes,
  },
  { path: "*", component: notFound },
];

export default routes;
