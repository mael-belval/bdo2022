import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Vue3TouchEvents from "vue3-touch-events";

import App from '@/App.vue';
import { routes } from "@/utils";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        ...routes,
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
})

router.afterEach((to, from) => {
    const toIndex = routes.filter(route => route.name === to.name)[0].id;
    const fromIndex = routes.filter(route => route.name === from.name)[0].id
    to.meta.transitionName = fromIndex < toIndex ? 'next' : 'previous'
})

createApp(App)
    .use(Vue3TouchEvents)
    .use(router)
    .mount('#app')
