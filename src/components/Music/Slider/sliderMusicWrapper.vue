<template>
    <div class="wrapper">
        <div class="slider_music_wrapper">
            <sliderMusicItem
                v-for="item in carousel_music_data"
                :key="item.id"
                :item_data="item"
            />
        </div>
    </div>
</template>

<script>
    import '/public/slider.js';
    import sliderMusicItem from '@/components/Music/Slider/sliderMusicItem.vue';

    export default{
        name:'sliderMusicWrapper',
        components:{
            sliderMusicItem,
        },
        props:{
            carousel_music_data:{
                type: Array,
                default: () => []
            },
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

<style lang="scss" src="@/assets/styles/slider-music-wrapper.scss">
</style>