<template>
    <div class="links_wrapper">
       <div class="container flex-row ">
            <linkItemWrapper
                v-for="product in links"
                :key="product.name"
                v-bind:link_data="product"
            />
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
                links:[
                    {
                        id: "The Mercury Phoenix Trust",
                        image: "https://www.queenonline.com/global/assets/modules/site/images/projects/mpt30.jpg",
                        link:"https://www.mercuryphoenixtrust.org/"
                    },
                    {
                        id: "We Will Rock You",
                        image: "https://www.queenonline.com/global/assets/modules/site/images/projects/we-will-rock-you.jpg",
                        link:"https://www.queenonline.com/wwry"
                    },
                    {
                        id: "The Queen Extravaganza",
                        image: "https://www.queenonline.com/global/assets/modules/site/images/projects/extravaganza.jpg",
                        link:"https://www.queenonline.com/quex"
                    },
                    {
                        id: "Queen - The Studio Experience",
                        image: "https://www.queenonline.com/global/assets/modules/site/images/projects/studio-experience.jpg",
                        link:"https://www.mercuryphoenixtrust.org/studioexperience/"
                    },
                    {
                        id: "The Queen Online Forum",
                        image: "https://www.queenonline.com/global/assets/modules/site/images/projects/forums.jpg",
                        link:"https://www.queenonline.com/projects"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" src="@/assets/styles/links-style.scss">
</style>