<template>
    <div class="links_wrapper">
       <div class="container">
            <linkItemWrapper/>
       </div>
    </div>
</template>

<script>
    import linkItemWrapper from '@/components/Links/linksItem.vue'
    export default{
        name: "linkWrapper",
        components:{
            linkItemWrapper
        },
        data(){
            return{
            }
        }
    }
</script>

<style lang="scss" src="@/assets/styles/links-style.scss">
</style>