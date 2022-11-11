<template>
    <div class="catalog_wrapper">
        <sliderWrapper
            :carousel_data="sliderItems"
            :interval="2000"
        />
        <div class="shop_list container">
            <catalogItem
                v-for="product in PRODUCTS"
                :key="product.name"
                v-bind:product_data="product"
            />
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
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
                ]
            }
        },
        computed:{
            ...mapGetters([
                'PRODUCTS'
            ]),
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
        },
        mounted(){
            this.GET_PRODUCTS_FROM_API()
        }
    }
</script>

<style lang="scss" src="@/assets/styles/shop-wrapper-styles.scss">
</style>