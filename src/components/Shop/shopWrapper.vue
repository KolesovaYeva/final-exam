<template>
    <div class="catalog_wrapper">
        <sliderWrapper
            :carousel_data="sliderItems"
        />
        <selectedElement 
            :selected="selected"
            :options="categories"
            @select="sortByCategories"/>
        <div class="shop_list container" >
            <!-- <catalogItem/> -->
            <catalogItem
                v-for="product in filteredProducts"
                :key="product.name"
                :product_data="product"
            />
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import {mapActions, mapGetters} from 'vuex';
    import selectedElement from '@/components/Shop/selectElement.vue';
    import catalogItem from '@/components/Shop/shopItem.vue';
    import sliderWrapper from '@/components/Shop/Slider/sliderWrapper.vue';

    export default{
        name:'catalogWrapper',
        components:{
            catalogItem,
            sliderWrapper,
            selectedElement
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
                categories:[
                    {name: 'All', value: 'all'},
                    {name: 'available', value: 'available'},
                    {name: 'Sold Out', value: 'soldOut'}
                ],
                selected: 'All',
                sortedProducts: []
                // products: []
            }
        },
        computed:{
            ...mapGetters([
                'PRODUCTS'
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                } else {
                    return this.PRODUCTS
                }
            },
        },
        methods:{
            sortByCategories(status){
                this.sortedProducts = [];
                let vm = this;
                this.PRODUCTS.map(function(item){
                    if(item.status === status.name){
                        vm.sortedProducts.push(item);
                    }
                })
                this.selected = status.name
            },
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ])
        },
        mounted(){
            // axios('http://localhost:3000/products')
            // .then(response => this.products = response.data)
            this.GET_PRODUCTS_FROM_API()
        }
    }
</script>

<style lang="scss" src="@/assets/styles/shop-wrapper-styles.scss">
</style>