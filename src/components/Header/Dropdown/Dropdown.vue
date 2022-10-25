<template>
    <div class="dropdownIcon" @click="isOpen = !isOpen">
        <a href="#" class="navigation_item_link">
            {{title}}
        </a>
        <svg height="20" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20l10 10 10-10z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
        </svg>
        <transition name="menu_dropdown" apppear>
            <div class="sub_menu_wrapper" v-if="isOpen">
                <li v-for="(item, i) in items" :key="i">
                    <a :href="item.link" class="navigation_item_link">{{item.title}}</a>
                </li>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'Dropdowm',
  props: ['title', 'items'],
  data(){
    return{
        isOpen: false
    }
  }
}
</script>

<style lang="scss" src="./dropdowm.scss"></style>