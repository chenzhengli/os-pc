import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      name: "index",
      component: Index,
      children:[
        {
          path: "list",
          name: "list",
          component: () =>import("./components/CatalogList.vue"),
        },
        {
          path: "food",
          name: "food",
          component: () =>import("./components/FoodList.vue"),
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
  ]
});
