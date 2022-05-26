import AccueilPage from "@/pages/accueil/AccueilPage";
import VillagePage from "@/pages/village/VillagePage";
import InscriptionPage from "@/pages/inscription/InscriptionPage";
import PreviousEditionsPage from "@/pages/previous-editions/PreviousEditionsPage";

export const getScrollPercent = () => {
    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
}

let id = 0;
export const routes = [
    { path: '/', component: AccueilPage, name: 'accueil', title: 'Accueil', id: id++ },
    { path: '/village', component: VillagePage, name: 'village', title: 'Village', id: id++ },
    { path: '/inscription', component: InscriptionPage, name: 'inscription', title: 'Inscription', id: id++ },
    { path: '/previous-editions', component: PreviousEditionsPage, name: 'previous-editions', title: 'Précédentes éditions', id: id++ }
];
