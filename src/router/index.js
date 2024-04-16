import { createRouter, createWebHistory } from 'vue-router'





const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  },






  { 
    path: '/:path(.*)', 
    name: "NotFound",
    component: () => import('@/views/sessions/404.vue'), 
  },
];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {

  document.title = `${to.name} - ${import.meta.env.VITE_APP_TITLE}`;

  next();

  // if (to.matched.some(record => record.meta.requiresAuth)) {

  //   const {currentUser} = useAuthenticationStore();

  //   let response = await currentUser();

  //   try {
  //     if (response) {
  //       next();
  //     } else {
  //       next({ name: "login" });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     next({ name: "login" });
  //   }

  // } else {
  //   next();
  // }

});


export default router
