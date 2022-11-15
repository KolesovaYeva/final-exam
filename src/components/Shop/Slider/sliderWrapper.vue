<template>
    <div class="wrapper">
        <div class="slider_wrapper">
            <VueSlickCarousel 
        :dots="false"
        :arrows="false"
        :autoplay="true"
        :autoplaySpeed="4000">
                <sliderItem
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
            />
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
    import sliderItem from '@/components/Shop/Slider/sliderItem.vue';
    import VueSlickCarousel from 'vue-slick-carousel'
    // import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default{
        name:'sliderWrapper',
        components:{
            sliderItem,
            VueSlickCarousel
        },
        props:{
            carousel_data:{
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

<style lang="scss">
</style>