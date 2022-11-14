<template>
    <div class="freddie_mercury_wrapper">
        <div class="wrapper" v-for="(freddiemercury, index) in freddiemercury" :key="index">
         <img class="hero_image" :src="freddiemercury.image[0]" alt="">
         <div class="artist_name">
            <p>{{freddiemercury.firstName}}</p>
            <p>{{freddiemercury.lastName}}</p>
        </div>
        <div class="container">
            <div class="higher_wrapper flex-row">
                <div class="left_part">
                <table>
                    <tbody class="main_info_wrapper">
                        <tr>
                            <td class="main_info_wrapper_item">Real Name:</td>
                            <td class="main_info_wrapper_item">{{freddiemercury.fullName}}</td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Date of Birth:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{freddiemercury.dataOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Birthplace:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{freddiemercury.placeOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Instruments:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{freddiemercury.instruments}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="right_part">
                <p class="text_wrapper">{{freddiemercury.info[0]}}</p>
                <p class="text_wrapper">{{freddiemercury.info[1]}}</p>
                <p class="text_wrapper">{{freddiemercury.info[2]}}</p>
            </div>
            </div>
            <img class="info_image" :src="freddiemercury.image[1]" alt="">
            <p class="text_wrapper">{{freddiemercury.info[3]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[4]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[5]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[6]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[7]}}</p>
            <img class="info_image" :src="freddiemercury.image[2]" alt="">
            <p class="text_wrapper">{{freddiemercury.info[8]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[9]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[10]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[11]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[12]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[13]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[14]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[15]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[16]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[17]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[18]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[19]}}</p>
            <p class="text_wrapper">{{freddiemercury.info[20]}}</p>
        </div>
       </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default{
        name: 'freddieMercuryWrapper',
        components:{

        },
        data(){
            return{
                freddiemercury: [] 
            }
        },
        computed:{
            
        },
        methods:{
           
        },
        mounted(){
            axios
                .get('http://localhost:3000/freddiemercury')
                .then(response => this.freddiemercury = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/band-styles.scss">
</style>