<template>
    <div class="link_item_wrapper ">
        <a :href="link_data.link" class="links_link"><img class="links_item_image" :src="link_data.image" alt=""></a>
    </div>
</template>

<script>
    export default{
        name:'linkItemWrapper',
        props:{
            link_data:{
                type:Object,
                default(){
                    return{

                    }
                }
            }
        }
    }
</script>

<style lang="scss" src="@/assets/styles/links-item-styles.scss">
</style>