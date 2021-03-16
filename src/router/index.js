import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/trondheimtour",
    name: "TrondheimTour",
    // route level code-splitting
    // this generates a separate chunk (TrondheimTour.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "TrondheimTour" */ "../views/TrondheimTour.vue"
      ),
  },
  {
    path: "/trondheimtour/plants",
    name: "TrondheimPlants",
    component: () => import("../views/TrondheimPlants.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
//# sourceMappingURL=index.js.map
