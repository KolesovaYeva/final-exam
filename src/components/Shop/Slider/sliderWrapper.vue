<template>
    <div class="wrapper">
        <div class="v-carousel" 
                :style="{'margin-left': '-' + (100 * currentSlideIndex)+ '%'}">
            <sliderlItem
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
            />
        </div>
        <div class="slider_button_wrapper">
            <button class="slider_button" @click="PrevSlide">Prev</button>
            <button class="slider_button" @click="NextSlide">Next</button>     
        </div> 
    </div>
</template>

<script>
    import sliderlItem from '@/components/Shop/Slider/sliderItem.vue';

    export default{
        name:'sliderWrapper',
        components:{
            sliderlItem,
        },
        props:{
            carousel_data:{
                type: Array,
                default: () => []
            },
            interval:{
                type: Number,
                default: 0
            }
        },
        data(){
            return{
                currentSlideIndex: 0
            }
        },
        computed:{

        },
        methods:{
            PrevSlide(){
                if(this.currentSlideIndex>0){
                    this.currentSlideIndex--
                }
            },
            NextSlide(){
                if(this.currentSlideIndex >= this.carousel_data.length - 1){
                    this.currentSlideIndex = 0
                } else {
                    this.currentSlideIndex++
                }
            }
        },
        mounted(){
            if (this.interval > 0){
                let vm = this;
                setInterval(function(){
                    vm.NextSlide()
                }, vm.interval)
            }
        }
    } 
</script>

<style lang="scss" src="@/assets/styles/slider-wrapper-styles.scss">
</style>