<template>
    <div class="band_wrapper">
        <div class="mate_wrapper">
            <router-link :to="{name:'freddieMercury'}">
                <img class="mate_image" src="@/assets/images/bandImage/freddie.webp" alt="">
                <a href="" class="mate_link">Freddie Mercury</a>
            </router-link>
        </div>
        <div class="mate_wrapper">
            <router-link :to="{name:'brianMay'}">
                <img class="mate_image" src="@/assets/images/bandImage/brian.webp" alt="">
                <a href="" class="mate_link">Brian May</a>
            </router-link>
        </div>
        <div class="mate_wrapper">
            <router-link :to="{name:'rogerTaylor'}">
                <img class="mate_image" src="@/assets/images/bandImage/roger.webp" alt="">
                <a href="" class="mate_link">Roger Taylor</a>
            </router-link>
        </div>
        <div class="mate_wrapper">
            <router-link :to="{name:'johnDeacon'}">
                <img class="mate_image" src="@/assets/images/bandImage/john.webp" alt="">
                <a href="" class="mate_link">John Deacon</a>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bandWrapper',
        components: {

        }
    }
</script>

<style lang="scss" src="@/assets/styles/band-main-wrapper.scss">
</style>