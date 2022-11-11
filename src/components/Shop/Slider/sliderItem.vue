<template>
    <div class="slider_item_wrapper">
        <img class="slider_image" :src="require('@/assets/images/'+ item_data.img)" alt="">
    </div>
</template>

<script>
    export default{
        name:"sliderItem",
        props:{
            item_data:{
                type:Object,
                default: () => {}
            }
        },
        data(){
            return{}
        },
        computed:{}
    }
</script>

<style lang="scss" src="@/assets/styles/slider-item-styles.scss">
</style>