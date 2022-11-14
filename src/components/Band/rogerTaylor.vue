<template>
    <div class="roger_taylor_wrapper">
        <div class="wrapper" v-for="(rogertaylor, index) in rogertaylor" :key="index">
         <img class="hero_image" :src="rogertaylor.image[0]" alt="">
         <div class="artist_name">
            <p>{{rogertaylor.firstName}}</p>
            <p>{{rogertaylor.lastName}}</p>
        </div>
        <div class="container">
            <div class="higher_wrapper flex-row">
                <div class="left_part">
                <table>
                    <tbody class="main_info_wrapper">
                        <tr>
                            <td class="main_info_wrapper_item">Real Name:</td>
                            <td class="main_info_wrapper_item">{{rogertaylor.fullName}}</td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Date of Birth:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{rogertaylor.dataOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Birthplace:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{rogertaylor.placeOfBirth}}
                            </td>
                        </tr>
                        <tr>
                            <td class="main_info_wrapper_item">
                                Instruments:
                            </td>
                            <td class="main_info_wrapper_item">
                                {{rogertaylor.instruments}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="right_part">
                <p class="text_wrapper">{{rogertaylor.info[0]}}</p>
                <p class="text_wrapper">{{rogertaylor.info[1]}}</p>
                <p class="text_wrapper">{{rogertaylor.info[2]}}</p>
            </div>
            </div>
            <img class="info_image" :src="rogertaylor.image[1]" alt="">
            <p class="text_wrapper">{{rogertaylor.info[3]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[4]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[5]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[6]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[7]}}</p>
            <img class="info_image" :src="rogertaylor.image[2]" alt="">
            <p class="text_wrapper">{{rogertaylor.info[8]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[9]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[10]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[11]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[12]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[13]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[14]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[15]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[16]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[17]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[18]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[19]}}</p>
            <p class="text_wrapper">{{rogertaylor.info[20]}}</p>
        </div>
       </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default{
        name: 'rogerTaylorWrapper',
        components:{

        },
        data(){
            return{
                rogertaylor: []
            }
        },
        computed:{
            
        },
        methods:{
           
        },
        mounted(){
            axios
                .get('http://localhost:3000/rogertaylor')
                .then(response => this.rogertaylor = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/band-styles.scss">
</style>