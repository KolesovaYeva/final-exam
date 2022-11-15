<template>
    <div class="music_wrapper">
        <sliderMusicWrapper :carousel_music_data="sliderItems">
            <sliderMusicItem @click="showInfoHandler">
            </sliderMusicItem>
        </sliderMusicWrapper>
       <div class="info_wrapper container flex-row" v-if="dataToShow">
        <div class="left_part">
            <img class="" :src="require('@/assets/images/music/'+ dataToShow.alblumLogo)" alt="">
        </div>
        <div class="right_part">
            <p class="album_name">{{dataToShow.name}}</p>
            <p class="album_quote">{{dataToShow.quote}}</p>
            <p class="album_info">{{dataToShow.info[1]}}</p>
            <p class="album_info">{{dataToShow.info[2]}}</p>
            <p class="album_info">{{dataToShow.info[3]}}</p>
            <p class="album_info">{{dataToShow.info[4]}}</p>
            <p class="album_info">{{dataToShow.info[5]}}</p>
            <p class="album_info">{{dataToShow.info[6]}}</p>
            <p class="album_info">{{dataToShow.info[7]}}</p>
            <p class="album_info">{{dataToShow.info[8]}}</p>
            <p class="album_info">{{dataToShow.info[9]}}</p>
            <p class="album_info">{{dataToShow.info[10]}}</p>
            <p class="album_info">{{dataToShow.info[11]}}</p>
        </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios';
import sliderMusicItem from '@/components/Music/Slider/sliderMusicItem.vue'
import sliderMusicWrapper from '@/components/Music/Slider/sliderMusicWrapper.vue';
export default {
    name: 'musicWrapper',
    components: {
        sliderMusicWrapper,
        sliderMusicItem
    },
    props: {
    },
    data() {
        return {
            sliderItems: [
                { id: "1", img: 'QUEEN_1.jpg' },
                { id: "2", img: 'QUEEN_2.jpg' },
                { id: "3", img: 'SHA.jpg' },
                { id: "4", img: 'ANATO.jpg' },
                { id: "5", img: 'DATR.jpg' },
                { id: "6", img: 'NOTW.jpg' },
                { id: "7", img: 'JAZZ.jpg' },
                { id: "8", img: 'LIVE_KILLERS.jpg' },
                { id: "9", img: 'GAME.jpg' },
                { id: "10", img: 'FLASH.jpg' },
                { id: "11", img: 'HOT_SPACE.jpg' },
                { id: "12", img: 'WORKS.jpg' },
                { id: "13", img: 'AKOM.jpg' },
                { id: "14", img: 'LIVE_MAGIC.jpg' },
                { id: "15", img: 'MIRACLE.jpg' },
                { id: "16", img: 'INNUENDO.jpg' },
                { id: "17", img: 'LAWS.jpg' },
                { id: "18", img: 'MIH.jpg' },
                { id: "19", img: 'ON_FIRE.jpg' },
                { id: "20", img: 'HUNGARIAN_RHAPSODY.jpg' },
                { id: "21", img: "RAINBOW'74.jpg" },
                { id: "22", img: 'ANATODEON.jpg' },
                { id: "23", img: 'ON_AIR.jpg' },
                { id: "24", img: 'GREATEST_HITS_V2.jpg' },
                { id: "25", img: 'GREATEST_HITS_2.jpg' },
                { id: "26", img: 'QUEEN_ROCKS_V1.jpg' },
                { id: "27", img: 'GREATEST_HITS_3_V1.jpg' },
                { id: "28", img: 'ABSOLUTE_GREATEST.jpg' },
                { id: "29", img: 'DEEP_CUTS.jpg' },
                { id: "30", img: 'DEEP_CUTS_2.jpg' },
                { id: "31", img: 'DEEP_CUTS_3.jpg' },
                { id: "32", img: 'BOHEMIANRHAPSODY.jpg' }
            ],
            allData: {}, 
            dataToShow: null
        }
    },
    computed: {
    },
    methods: {
        showInfoHandler(e) {
            const dataIndex = e.target.closest('.slider_item_wrapper').getAttribute('data-index');
            if(dataIndex >= 0) {
                this.dataToShow = this.allData[dataIndex];
            }
        }
    },
    mounted() {
        document.getElementsByClassName('slick-slide').forEach(el => {
            el.addEventListener('click', this.showInfoHandler)
        });
        axios
            .get('http://localhost:3000/music')
            .then(response => this.allData = response.data)
    }
}
</script>

<style lang="scss" src="@/assets/styles/music-wrapper-styles.scss">
</style>