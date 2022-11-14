<template>
    <div class="catalog_wrapper">
        <sliderWrapper
            :carousel_data="sliderItems"
        />
        <div class="shop_list container">
            <catalogItem
                v-for="(products, index) in products" :key="index"/>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import catalogItem from '@/components/Shop/shopItem.vue';
    import sliderWrapper from '@/components/Shop/Slider/sliderWrapper.vue';

    export default{
        name:'catalogWrapper',
        components:{
            catalogItem,
            sliderWrapper
        },
        props:{

        },
        data(){
            return{
                sliderItems:[
                    {id: "newsOne", img: 'SliderOne.jpg'},
                    {id: "newsTwo", img: 'SliderTwo.jpg'},
                    {id: "newsThree", img: 'SliderThree.jpg'}
                ],
                products: []
            }
        },
        computed:{
        },
        methods:{
        },
        mounted(){
            axios('http://localhost:3000/products')
            .then(response => this.products = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/shop-wrapper-styles.scss">
</style>