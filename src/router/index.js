import { createRouter, createWebHistory } from 'vue-router';
import AdoptView from "../views/AdoptView.vue"
import AboutView from "../views/AboutView.vue"
import DetailsView from "../views/DetailsView.vue"
import ContactView from "../views/ContactView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'adopt',
      component: AdoptView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: "/adopt/:id",
      name: "details",
      component: DetailsView,
      children: [{
        path: "contact",
        component: ContactView
      }]
    }
  ],
});

export default router;
