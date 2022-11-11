import Vue from 'vue'
import VueRouter from 'vue-router'
import bandWrapper from '@/components/Band/band.vue';
import liveWrapper from '@/components/Live/liveWrapper.vue';
import linkWrapper from '@/components/Links/links.vue';
// import musicWrapper from '@/components/Music/Music.vue';
import queenWrapper from '@/components/Band/queen.vue';
import vCatalog from '@/components/Shop/shopWrapper.vue';
import brianMayWrapper from '@/components/Band/brianMay.vue';
import johnDeaconWrapper from '@/components/Band/johnDeacon.vue';
import rogerTaylorWrapper from '@/components/Band/rogerTaylor.vue';
import freddieMercuryWrapper from '@/components/Band/freddieMercury.vue';
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/shop',
            name: 'shop',
            component: vCatalog
        },
        {
            path:'/link',
            name: 'link',
            component: linkWrapper,
            props: true
        },
        // {
        //     path:'/music',
        //     name: 'music',
        //     component: linkWrapper,
        //     props: true
        // },
        {
            path:'/band',
            name: 'band',
            component: bandWrapper,
            props: true
        },
        {
            path: '/',
            name: 'queen',
            component: queenWrapper
        },
        {
            path: '/band/freddieMercury',
            name: 'freddieMercury',
            component: freddieMercuryWrapper
        },
        {
            path: '/band/brianMay',
            name: 'brianMay',
            component: brianMayWrapper
        },
        {
            path: '/band/rogerTaylor',
            name: 'rogerTaylor',
            component: rogerTaylorWrapper
        },
        {
            path: '/band/johnDeacon',
            name: 'johnDeacon',
            component: johnDeaconWrapper
        },
        {
            path:'/live',
            name: 'live',
            component: liveWrapper,
            props: true
        }
    ]
})

export default router;