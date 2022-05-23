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

createApp(App)
    .use(Vue3TouchEvents)
    .use(router)
    .mount('#app')
