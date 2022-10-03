import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
// Categories
import CreateCategories  from '../views/categories/CreateCategories.vue';
import CategoriesList  from '../views/categories/CategoriesList.vue';
import EditCategories  from '../views/categories/EditCategories.vue';
// posts
import CreatePosts from "../views/posts/CreatePosts.vue";
import DashboardPostsList from "../views/posts/DashboardPostsList.vue";
import EditPosts from "../views/posts/EditPosts.vue";

// 
import SingleBlog from '../views/SingleBlog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
//   base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: "/blog/:slug",
      name: "SingleBlog",
      component: SingleBlog,
      props: true,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresGuest: true }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { requiresGuest: true }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
      path: "/categories/create",
      name: "CreateCategories",
      component: CreateCategories,
      meta: { requiresAuth: true },
    },
    {
      path: "/categories",
      name: "CategoriesList",
      component: CategoriesList,
      meta: { requiresAuth: true },
    },
    {
      path: "/categories/:id/edit",
      name: "EditCategories",
      component: EditCategories,
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: "/posts/create",
      name: "CreatePosts",
      component: CreatePosts,
      meta: { requiresAuth: true },
    },
    {
      path: "/posts/:slug/edit",
      name: "EditPosts",
      component: EditPosts,
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: "/dashboard-posts",
      name: "DashboardPostsList",
      component: DashboardPostsList,
      meta: { requiresAuth: true },
    },
  ]

})

router.beforeEach((to, from) => {
  const authenticated = localStorage.getItem("authenticated");

  if (to.meta.requiresGuest && authenticated) {
      return {
          name: "Dashboard",
      };
  } else if (to.meta.requiresAuth && !authenticated) {
      return {
          name: "Login",
      };
  }
});

export default router
