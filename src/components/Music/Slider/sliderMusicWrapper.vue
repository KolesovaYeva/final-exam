<template>
    <div class="wrapper">
        <div class="slider_music_wrapper">
            <VueSlickCarousel
                :dots="false"
                :arrows="false"
                :infinite= "true"
                :centerMode="true"
                :slidesToShow="4"
                :slidesToScroll="4"
                :variableWidth="true">
                <sliderMusicItem
                        v-for="(item, index) in carousel_music_data"
                        :key="item.id"
                        :item_data="item"
                        :data-index="index"
                />
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
    
    import VueSlickCarousel from 'vue-slick-carousel'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import sliderMusicItem from '@/components/Music/Slider/sliderMusicItem.vue';
    export default{
        name:'sliderMusicWrapper',
        components:{
            sliderMusicItem,
            VueSlickCarousel
        },
        props:{
            carousel_music_data:{
                type: Array,
                default: () => []
            },
        },
        data(){
            return{
                settings: {
                    dots: false,
                    infinite: true,
                    // centerMode: true,
                    // centerPadding: "20px",
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                dots: false,
                                infinite: true,
                                centerMode: true,
                                centerPadding: "20px",
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                variableWidth: true,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                dots: false,
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                initialSlide: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                dots: false,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                }
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
