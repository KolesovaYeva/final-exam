<template>
    <div>
        <header class="header_wrapper">
            <a href="#" class="logo_link"><img class="group_logo" src="https://dvfnvgxhycwzf.cloudfront.net/media/ShopDesignSplit4/logo/.fWQjuozV/ShopDesign-5263/Queen.png?t=79daa2f64437923232c5" alt=""></img></a>
            <Navigation/>
        </header>
    </div>
</template>

<script>
import Navigation from '@/components/Header/Navigation/Navigation.vue';
export default {
  name: 'headerBlock',
  components: {
    Navigation
  }
}

</script>

<style lang="scss"  src="./header-styles.scss"></style>