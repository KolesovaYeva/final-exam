<template>
    <div class="catalog_item ">
        <!-- <a class="wrapper" v-for="(products, index) in products" :key="index">
            <img class="list_item_image" :src="products.albumCover" @click="showModal = true">
        <p class="list_item_name" @click="showModal = true">{{products.name}}</p>
        <p class="list_item_format">{{products.format}}</p>
        <p class="list_item_price">£{{products.price}}</p>
        <p class="list_item_status">{{products.status}}</p>
        <button class="show_modal_button" @click="showModal = true">Show more info</button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <p class="list_item_name">{{products.name}}</p>
                <div class="more_info_wrapper flex-row">
                    <div class="left_part">
                        <img class="list_item_image" :src="products.albumCover">
                        <div class="main_info_wrapper">
                            <div class="main_info_item_wrapper info_text">
                                <p class="list_item_price">Price:</p>
                                <p class="list_item_price">£{{products.price}}</p>
                            </div>
                            <div class="main_info_item_wrapper info_text">
                                <p class="list_item_release">Release:</p>
                                <p class="list_item_release">{{products.release}}</p>
                            </div>
                            <div class="main_info_item_wrapper info_text">
                                <p class="list_item_status">Status:</p>
                                <p class="list_item_status">{{products.status}}</p>
                            </div>
                           <div class="main_info_item_wrapper info_text">
                                <p class="list_item_format">Format:</p>
                                <p class="list_item_format">{{products.format}}</p>
                           </div>
                        </div>
                    </div>
                    <div class="right_data">
                        <p class="list_item_attention">{{products.attention}}</p>
                        <p class="list_item_info" v-for="item in products.info">{{item}}</p>
                    </div>
                </div>
                <button class="show_modal_button" @click="showModal = false">Back to Catalog</button>
            </div>
        </transition> 
        </a> -->
        <a class="catalog_item">
        <img class="list_item_image" :src="product_data.albumCover" @click="showModal = true">
        <p class="list_item_name" @click="showModal = true">{{product_data.name}}</p>
        <p class="list_item_format">{{product_data.format}}</p>
        <p class="list_item_price">£{{product_data.price}}</p>
        <p class="list_item_status">{{product_data.status}}</p>
        <button class="show_modal_button" @click="showModal = true">Show more info</button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <p class="list_item_name">{{product_data.name}}</p>
                <div class="more_info_wrapper flex-row">
                    <div class="left_part">
                        <img class="list_item_image" :src="product_data.albumCover">
                        <div class="main_info_wrapper">
                            <div class="main_info_item_wrapper info_text">
                                <p class="list_item_price">Price:</p>
                                <p class="list_item_price">£{{product_data.price}}</p>
                            </div>
                            <div class="main_info_item_wrapper info_text">
                                <p class="list_item_release">Release:</p>
                                <p class="list_item_release">{{product_data.release}}</p>
                            </div>
                            <div class="main_info_item_wrapper info_text">
                                <p class="list_item_status">Status:</p>
                                <p class="list_item_status">{{product_data.status}}</p>
                            </div>
                           <div class="main_info_item_wrapper info_text">
                                <p class="list_item_format">Format:</p>
                                <p class="list_item_format">{{product_data.format}}</p>
                           </div>
                        </div>
                    </div>
                    <div class="right_data">
                        <p class="list_item_attention">{{product_data.attention}}</p>
                        <p class="list_item_info" v-for="item in product_data.info">{{item}}</p>
                    </div>
                </div>
                <button class="show_modal_button" @click="showModal = false">Back to Catalog</button>
            </div>
        </transition>
    </a>
    </div>
</template>

<script>
    // import axios from 'axios'
    export default{
        name:'catalogItem',
        components:{
        },
        props:{
            product_data:{
                type: Object,
                default(){
                    return{
                    }
                }
            }
        },
        data(){
            return{
                showModal: false,
                // products: []
            }
        },
        computed:{
        },
        methods:{ 
            
        },
        mounted(){
            // axios('http://localhost:3000/products')
            // .then(response => this.products = response.data)
        }
    }
</script>

<style lang="scss" src="@/assets/styles/shop-item-styles.scss">
</style>