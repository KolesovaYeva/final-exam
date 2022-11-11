<template>
    <div class="band_wrapper">
        <div class="mate_wrapper">
            <router-link :to="{name:'freddieMercury'}">
                <img class="mate_image" src="https://www.queenonline.com/global/assets/modules/site/images/band/freddie.jpg" alt="">
                <a href="" class="mate_link">Freddie Mercury</a>
            </router-link>
        </div>
        <div class="mate_wrapper">
            <router-link :to="{name:'brianMay'}">
                <img class="mate_image" src="https://www.queenonline.com/global/assets/modules/site/images/band/brian.jpg" alt="">
                <a href="" class="mate_link">Brian May</a>
            </router-link>
        </div>
        <div class="mate_wrapper">
            <router-link :to="{name:'rogerTaylor'}">
                <img class="mate_image" src="https://www.queenonline.com/global/assets/modules/site/images/band/roger.jpg" alt="">
                <a href="" class="mate_link">Roger Taylor</a>
            </router-link>
        </div>
        <div class="mate_wrapper">
            <router-link :to="{name:'johnDeacon'}">
                <img class="mate_image" src="https://www.queenonline.com/global/assets/modules/site/images/band/john.jpg" alt="">
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

<style lang="scss">
    .band_wrapper{
        width:100%;
        position:relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .mate_wrapper{
            position: relative;
            width:50%;
            .mate_image{
                width:100%;
                transition: all 0.5s ease;;
            }.mate_link {
                display:none;
                position: absolute;
                z-index: 1;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 20px;
                padding: 18px 36px;
                border: 2px solid white;
                transition: all .5s ease;   
            }
            &:hover{
                .mate_link{
                    display: block;
                    transition: all .5s ease;
                }
                .mate_image{
                    background-color: rgb(0, 0, 0);
                    opacity: 0.8;
                    transition: all 0.5s ease;
                }
            }
        }
    }
    
</style>