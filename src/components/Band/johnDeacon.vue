<template>
    <div class="john_deacon_wrapper">
        <div class="wrapper" v-for="(johndeacon, index) in johndeacon" :key="index">
         <img class="hero_image" :src="johndeacon.image[0]" alt="">
         <div class="artist_name">
            <p>{{johndeacon.firstName}}</p>
            <p>{{johndeacon.lastName}}</p>
        </div>
        <div class="container">
            <div class="higher_wrapper flex-row">
                <div class="left_part">
                <table>
                    <tbody class="main_info_wrapper">
                        <tr>
                            <td class="main_info_wrapper_item">Real Name:</td>
                            <td class="main_info_wrapper_item">{{johndeacon.fullName}}</td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Date of Birth:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{johndeacon.dataOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Birthplace:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{johndeacon.placeOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Instruments:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{johndeacon.instruments}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="right_part">
                <p class="text_wrapper">{{johndeacon.info[0]}}</p>
                <p class="text_wrapper">{{johndeacon.info[1]}}</p>
                <p class="text_wrapper">{{johndeacon.info[2]}}</p>
            </div>
            </div>
            <img class="info_image" :src="johndeacon.image[1]" alt="">
            <p class="text_wrapper">{{johndeacon.info[3]}}</p>
            <p class="text_wrapper">{{johndeacon.info[4]}}</p>
            <p class="text_wrapper">{{johndeacon.info[5]}}</p>
            <p class="text_wrapper">{{johndeacon.info[6]}}</p>
            <p class="text_wrapper">{{johndeacon.info[7]}}</p>
            <img class="info_image" :src="johndeacon.image[2]" alt="">
            <p class="text_wrapper">{{johndeacon.info[8]}}</p>
            <p class="text_wrapper">{{johndeacon.info[9]}}</p>
            <p class="text_wrapper">{{johndeacon.info[10]}}</p>
            <p class="text_wrapper">{{johndeacon.info[11]}}</p>
            <p class="text_wrapper">{{johndeacon.info[12]}}</p>
            <p class="text_wrapper">{{johndeacon.info[13]}}</p>
            <p class="text_wrapper">{{johndeacon.info[14]}}</p>
            <p class="text_wrapper">{{johndeacon.info[15]}}</p>
            <p class="text_wrapper">{{johndeacon.info[16]}}</p>
            <p class="text_wrapper">{{johndeacon.info[17]}}</p>
            <p class="text_wrapper">{{johndeacon.info[18]}}</p>
            <p class="text_wrapper">{{johndeacon.info[19]}}</p>
            <p class="text_wrapper">{{johndeacon.info[20]}}</p>
        </div>
       </div>
    </div>
</template>

<script>

    import axios from 'axios';
    
    export default{
        name: 'johnDeaconWrapper',
        components:{

        },
        data(){
            return{
                johndeacon: []
            }
        },
        computed:{
            
        },
        methods:{
           
        },
        mounted(){
            axios
                .get('http://localhost:3000/johndeacon')
                .then(response => this.johndeacon = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/band-styles.scss">
</style>