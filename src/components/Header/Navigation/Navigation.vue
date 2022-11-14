<template>
    <div>
        <nav class="navigation_wrapper container" id="navBlock">
            <ul class="navigation_list">
                <router-link :to="{ name: 'band' }">
                    <li class="navigation_item">
                        <span class="navigation_item_link">THE BAND</span>
                    </li>
                </router-link>
                <router-link :to="{ name: 'live' }">
                    <li class="navigation_item">
                        <span class="navigation_item_link">LIVE</span>
                    </li>
                </router-link>
                <router-link :to="{ name: 'music' }">
                    <li class="navigation_item">
                        <span class="navigation_item_link">MUSIC</span>
                    </li>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                    <li class="navigation_item">
                        <span class="navigation_item_link">SHOP</span>
                    </li>
                </router-link>
                <router-link :to="{ name: 'link', params: {} }">
                    <li class="navigation_item">
                        <span class="navigation_item_link">LINKS</span>
                    </li>
                </router-link>
            </ul>
        </nav>
        <button @click="toggleMenu" class="hamburger hamburger--emphatic" type="button" id="hamburger">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'navigationWrapper',
    components: {
    },
    data() {
        return {
            items: [
                {
                    title: "Queen",
                    link: "#"
                },
                {
                    title: "Brian May",
                    link: "#"
                },
                {
                    title: "Freddie Mercury",
                    link: "#"
                },
                {
                    title: "Roger Taylor",
                    link: "#"
                },
                {
                    title: "John Deacon",
                    link: "#"
                },
                {
                    title: "Features",
                    link: "#"
                },
            ]
        }
    },
    methods: {
        toggleMenu() {
            const hamburger = document.getElementById('hamburger');
            const navigation = document.getElementById('navBlock');

            if(hamburger) {
                hamburger.classList.toggle('is-active');
            }

            if(navigation) {
                navigation.classList.toggle('open');
            }
        }
    }
}
</script>

<style lang="scss"  src="@/assets/styles/navigation-styles.scss">

</style>