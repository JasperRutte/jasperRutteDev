import { createRouter, createWebHistory } from 'vue-router'
import About from "../components/About.vue";
import Experience from "../components/Experience.vue";
import Links from "../components/Links.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/About',
      component: About,
    },
    {
      path: '/Experience',
      component: Experience,
      // Add a name if needed
      // name: 'Experience',
    },
    {
      path: '/Links',
      component: Links,
      // Add a name if needed
      // name: 'Links',
    },
  ],
});

export default router
