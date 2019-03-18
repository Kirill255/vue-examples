import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Users from "@/components/Users";
import About from "@/components/About";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
