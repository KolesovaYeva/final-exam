<template>
  <div id="app">
    <div class="v-main-wrapper">
      <headerWrapper/>
      <router-view/>
      <footerWrapper/>
    </div>
  </div>
</template>


<script>
  import headerWrapper from '@/components/Header/header.vue';
  import footerWrapper from '@/components/Footer/footer.vue';

  export default {
    name: 'HomeView',
    components: {
      headerWrapper,
      footerWrapper,
    }
  }
</script>

<style lang="scss" src="@/assets/styles/app-styles.scss">

</style>
