<template>
    <div class="brian_may_wrapper">
       <div class="wrapper" v-for="(brianmay, index) in brianmay" :key="index">
         <img class="hero_image" :src="brianmay.image[0]" alt="">
         <div class="artist_name">
            <p>{{brianmay.firstName}}</p>
            <p>{{brianmay.lastName}}</p>
        </div>
        <div class="container">
            <div class="higher_wrapper flex-row">
                <div class="left_part">
                <table>
                    <tbody class="main_info_wrapper">
                        <tr>
                            <td class="main_info_wrapper_item">Real Name:</td>
                            <td class="main_info_wrapper_item">{{brianmay.fullName}}</td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Date of Birth:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{brianmay.dataOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Birthplace:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{brianmay.placeOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Instruments:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{brianmay.instruments}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="right_part">
                <p class="text_wrapper">{{brianmay.info[0]}}</p>
                <p class="text_wrapper">{{brianmay.info[1]}}</p>
                <p class="text_wrapper">{{brianmay.info[2]}}</p>
            </div>
            </div>
            <img class="info_image" :src="brianmay.image[1]" alt="">
            <p class="text_wrapper">{{brianmay.info[3]}}</p>
            <p class="text_wrapper">{{brianmay.info[4]}}</p>
            <p class="text_wrapper">{{brianmay.info[5]}}</p>
            <p class="text_wrapper">{{brianmay.info[6]}}</p>
            <p class="text_wrapper">{{brianmay.info[7]}}</p>
            <img class="info_image" :src="brianmay.image[2]" alt="">
            <p class="text_wrapper">{{brianmay.info[8]}}</p>
            <p class="text_wrapper">{{brianmay.info[9]}}</p>
            <p class="text_wrapper">{{brianmay.info[10]}}</p>
            <p class="text_wrapper">{{brianmay.info[11]}}</p>
            <p class="text_wrapper">{{brianmay.info[12]}}</p>
            <p class="text_wrapper">{{brianmay.info[13]}}</p>
            <p class="text_wrapper">{{brianmay.info[14]}}</p>
            <p class="text_wrapper">{{brianmay.info[15]}}</p>
            <p class="text_wrapper">{{brianmay.info[16]}}</p>
            <p class="text_wrapper">{{brianmay.info[17]}}</p>
            <p class="text_wrapper">{{brianmay.info[18]}}</p>
            <p class="text_wrapper">{{brianmay.info[19]}}</p>
            <p class="text_wrapper">{{brianmay.info[20]}}</p>
        </div>
       </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default{
        name: 'brianMayWrapper',
        components:{

        },
        props:{

        },
        data(){
            return{
                brianmay: []
            }
        },
        computed:{
            
        },
        methods:{
           
        },
        mounted(){
            axios
                .get('http://localhost:3000/brianmay')
                .then(response => this.brianmay = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/band-styles.scss">
</style>