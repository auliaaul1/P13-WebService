import { createRouter, createWebHistory } from "vue-router";

import UserList from "../views/UserList.vue";
import UserDetail from "../views/UserDetail.vue";
import CreateUser from "../views/CreateUser.vue";

const routes = [
  {
    path: "/",
    component: UserList,
  },
  {
    path: "/detail/:id",
    component: UserDetail,
  },
  {
    path: "/create",
    component: CreateUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
