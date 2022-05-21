import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Vue3TouchEvents from "vue3-touch-events";

import App from '@/App.vue';
import AccueilPage from "@/pages/AccueilPage";
import VillagePage from "@/pages/VillagePage";
import InscriptionPage from "@/pages/InscriptionPage";
import PreviousEditionsPage from "@/pages/PreviousEditionsPage";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: AccueilPage, name: 'accueil' },
        { path: '/village', component: VillagePage, name: 'village' },
        { path: '/inscription', component: InscriptionPage, name: 'inscription' },
        { path: '/previous-editions', component: PreviousEditionsPage, name: 'previous-editions' },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
})

createApp(App)
    .use(Vue3TouchEvents)
    .use(router)
    .mount('#app')
