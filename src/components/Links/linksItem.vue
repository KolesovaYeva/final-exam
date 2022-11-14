<template>
    <div class="link_item_wrapper flex-row">
       <div class="wrapper" v-for="(links, index) in links" :key="index">
        <a :href="links.link" class="links_link">
            <img class="links_item_image" :src="links.image" alt="">
        </a>
       </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default{
        name:'linkItemWrapper',
        props:{
        },
        data(){
            return{
                links: []
            }
        },
        mounted(){
            axios
                .get('http://localhost:3000/links')
                .then(response => this.links = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/links-item-styles.scss">
</style>