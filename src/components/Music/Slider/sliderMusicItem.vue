<template>
    <div class="slider_music_wrapper">
        <img class="slider_music_image" :src="require('@/assets/images/music/'+ item_data.img)" alt="">
    </div>
</template>

<script>
    export default{
        name:"sliderMusicItem",
        props:{
            item_data:{
                type:Object,
                default(){
                    return{

                    }
                }
            }
        },
        data(){
            return{}
        },
        computed:{}
    }
</script>

<style lang="scss" src="@/assets/styles/slider-music-item.scss">
</style>