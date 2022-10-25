<template>
    <nav class="navigation_wrapper">
        <ul class="navigation_list">
            <li class="navigation_item">
                <a href="#BAND" class="navigation_item_link">THE BAND</a>
                <Dropdowm name="Items" :items="items"/>
            </li>
            <li class="navigation_item">
                <a href="#LIVE" class="navigation_item_link">LIVE</a>
            </li>
            <li class="navigation_item">
                <a href="#MUSIC" class="navigation_item_link">MUSIC</a>
            </li>
            <li class="navigation_item">
                <a href="#SHOP" class="navigation_item_link">SHOP</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import Dropdowm from '@/components/Header/Dropdown/Dropdown.vue';
export default {
  name: 'Navigation',
  components:{
    Dropdowm
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

<style lang="scss"  src="./navigation-styles.scss"></style>