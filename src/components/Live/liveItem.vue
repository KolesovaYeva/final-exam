<template>
    <div class="live_item_wrapper">
        <div class="live_item flex-row container">
            <p class="bolder_text">{{live_data.date}}</p>
            <p class="regular_text">{{live_data.id}}</p>
            <p class="regular_text">{{live_data.place}}</p>
            <a class="button_wrapper" :href="live_data.link">Buy Tickets ></a>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'liveItem',
        components:{

        },
        props:{
            live_data:{
                type: Object,
                default(){
                    return{
                    }
                }
            }
        },
        data(){
            return{

            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" src="@/assets/styles/live-item-styles.scss">
</style>