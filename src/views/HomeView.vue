<template>
   <div class="main_block">
      <headerBlock/>
      <Footer/>
   </div>
</template>


<script>
  import headerBlock from '@/components/Header/Header.vue';
  import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    headerBlock,
    Footer,
  }
}
</script>
