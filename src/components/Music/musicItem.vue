<template>
    <a class="music_item"> 
        <div class="info_wrapper">
            <p class="album_name">{{music_data.name}}</p>
            <!-- <img :src="music_data.alblumLogo" alt="" class="album_logo"> -->
            <p class="albumQuote">{{music_data.quote}}</p>
            <p class="album_info"  v-for="item in music_data.info">{{item}}</p>
        </div>
    </a>
</template>

<script>
    export default{
        name:'musicItem',
        components:{

        },
        props:{
            music_data:{
                type: Object,
                default(){
                    return{

                    }
                }
            }
        },
        data(){
            return{
                showModal: false
            }
        },
        computed:{

        },
        methods:{
        }
    }
</script>

<style lang="scss" src="@/assets/styles/music-item-styles.scss">
</style>