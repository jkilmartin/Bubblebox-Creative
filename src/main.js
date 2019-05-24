import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Home from "./components/Home.vue";
import Jack from "./components/Jack/Jack.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: "/", component: Home },
  { path: "/jack", component: Jack },
  { path: "/jkdesigners", component: JkDesigners},
  { path: "/jkprojects", component: JkProjects, name: "jkprojects", props: true },
  { path: "/jkuserproject", component: JkUserProject, name: "jkuserproject", props: true }
];

// Jack Routing
import JkDesigners from "./components/Jack/JkDesigners.vue";
import JkProjects from "./components/Jack/JkProjects.vue";
import JkUserProject from "./components/Jack/JkUserProject.vue";

const router = new VueRouter({
  routes,
  mode: "history"
});

$(document).ready(function() {
  new Vue({
    render: h => h(App), 
    router
  }).$mount("#app");
});