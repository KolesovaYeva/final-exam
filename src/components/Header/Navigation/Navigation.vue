<template>
    <nav class="navigation_wrapper container">
        <ul class="navigation_list">
            <router-link :to="{name:'band'}">
                <li class="navigation_item">
                    <a href="#BAND" class="navigation_item_link">THE BAND</a>
                </li>
            </router-link>
            <router-link :to="{name:'live'}">
                <li class="navigation_item">
                    <a href="#LIVE" class="navigation_item_link">LIVE</a>
                </li>
            </router-link>
            <router-link :to="{name:'music'}">
                <li class="navigation_item">
                    <a href="#MUSIC" class="navigation_item_link">MUSIC</a>
                </li>
            </router-link>
            <router-link :to="{name:'shop'}">
                <li class="navigation_item">
                    <a href="#SHOP" class="navigation_item_link">SHOP</a>
                </li>
            </router-link>
            <router-link :to="{name:'link', params:{}}">
                <li class="navigation_item">
                    <a href="#LINKS" class="navigation_item_link">LINKS</a>
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
    name: 'navigationWrapper',
    components:{
    },
    data(){
        return{
            items:[
                {
                    title: "Queen",
                    link: "#"
                },
                {
                    title: "Brian May",
                    link: "#"
                },
                {
                    title: "Freddie Mercury",
                    link: "#"
                },
                {
                    title: "Roger Taylor",
                    link: "#"
                },
                {
                    title: "John Deacon",
                    link: "#"
                },
                {
                    title: "Features",
                    link: "#"
                },
            ]
        }
    }
    }
</script>

<style lang="scss"  src="@/assets/styles/navigation-styles.scss">
</style>