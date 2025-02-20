import { createRouter, createWebHistory } from "vue-router";

import { UIPageCatalog } from "FSD/Pages/Catalog";
import { UIPageLC } from "FSD/Pages/LC";
import { UIPageUsers } from "FSD/Pages/Users";

import { ERoutes } from "FSD/Shared/TypeScript/routes.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    /* Дефолтный роут */
    {
      path    : "/",
      redirect: { name: ERoutes.users }
    },
    {
      path    : "/users",
      children: [
        {
          path     : "",
          name     : ERoutes.users,
          component: UIPageUsers
        }
      ]
    },
    {
      path    : "/catalog",
      children: [
        {
          path     : "",
          name     : ERoutes.catalog,
          component: UIPageCatalog
        }
      ]
    },
    {
      path    : "/lc",
      children: [
        {
          path     : "",
          name     : ERoutes.lk,
          component: UIPageLC
        }
      ]
    }
  ]
});

export default router;
