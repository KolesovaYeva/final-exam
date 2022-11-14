<template>
    <div class="queen_wrapper">
        <div class="wrapper" v-for="(queen, index) in queen" :key="index">
            <img class="hero_image" :src="queen.image[0]" alt="">
            <div class="container">
                <div class="artist_name">
                    <p>{{queen.firstName}}</p>
                </div>
                    <p class="text_wrapper">{{queen.info[1]}}</p>
                    <p class="text_wrapper">{{queen.info[2]}}</p>
                    <p class="text_wrapper">{{queen.info[3]}}</p>
                    <img class="info_image" :src="queen.image[1]" alt="">
                    <p class="text_wrapper">{{queen.info[4]}}</p>
                    <p class="text_wrapper">{{queen.info[5]}}</p>
                    <p class="text_wrapper">{{queen.info[6]}}</p>
                    <p class="text_wrapper">{{queen.info[7]}}</p>
                    <img class="info_image" :src="queen.image[2]" alt="">
                    <p class="text_wrapper">{{queen.info[8]}}</p>
                    <p class="text_wrapper">{{queen.info[9]}}</p>
                    <p class="text_wrapper">{{queen.info[10]}}</p>
                    <p class="text_wrapper">{{queen.info[11]}}</p>
                    <p class="text_wrapper">{{queen.info[12]}}</p>
                    <p class="text_wrapper">{{queen.info[13]}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default{
        name: 'queenWrapper',
        components:{
            
        },
        data(){
            return{
                queen: []
            }
        },
        computed:{
            
        },
        methods:{
           
        },
        mounted(){
            axios
                .get('http://localhost:3000/queen')
                .then(response => this.queen = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/band-styles.scss">
</style>