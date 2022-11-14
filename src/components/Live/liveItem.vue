<template>
    <div class="live_item_wrapper">
        <div class="wrapper" v-for="(live,index) in live" :key="index">
            <div class="live_item flex-row container">
            <p class="bolder_text">{{live.date}}</p>
            <p class="regular_text">{{live.id}}</p>
            <p class="regular_text">{{live.place}}</p>
            <a class="button_wrapper" :href="live.link">Buy Tickets ></a>
        </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default{
        name: 'liveItem',
        components:{

        },
        props:{
            
        },
        data(){
            return{
                live: []
            }
        },
        mounted(){
            axios
                .get('http://localhost:3000/live')
                .then(response => this.live = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/live-item-styles.scss">
</style>