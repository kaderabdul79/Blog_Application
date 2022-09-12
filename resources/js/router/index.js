import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]

})

export default router
