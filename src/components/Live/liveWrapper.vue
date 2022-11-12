<template>
    <div class="live_wrapper">
        <img class="hero_image" src="https://www.queenonline.com/global/assets/modules/site/images/quex/subpages/shows.jpeg">
        <p class="image_text">Tours</p>
        <h1 class="page_title">QuEx UK Tour 2023</h1>
        <liveItem
                v-for="product in LIVE"
                :key="product.id"
                v-bind:live_data="product"
            />
    </div>
</template>

<script>
    
    import {mapActions, mapGetters} from 'vuex';
    import liveItem from '@/components/Live/liveItem.vue'
    export default{
        name: "liveWrapper",
        components: {
            liveItem
        },
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters([
                'LIVE'
            ]),
        },
        methods:{
            ...mapActions([
                'GET_LIVE_FROM_API'
            ]),
        },
        mounted(){
            this.GET_LIVE_FROM_API()
        }
    }
</script>

<style lang="scss" src="@/assets/styles/live-wrapper-styles.scss">
</style>