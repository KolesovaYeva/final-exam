<template>
    <div class="live_wrapper">
        <img class="hero_image" src="https://www.queenonline.com/global/assets/modules/site/images/quex/subpages/shows.jpeg">
        <p class="image_text">Tours</p>
        <h1 class="page_title">QuEx UK Tour 2023</h1>
        <liveItem/>
    </div>
</template>

<script>
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
        },
        methods:{
        },
        mounted(){
        }
    }
</script>

<style lang="scss" src="@/assets/styles/live-wrapper-styles.scss">
</style>