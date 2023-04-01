<template>

    <div>
        <SideBar/>
        <slot name="content"></slot>
    </div>

</template>

<script>

import NavBar from '@/Components/Main/NavBar.vue';
import Footer from '@/Components/Main/Footer.vue';
import SideBar from '@/Components/Main/SideBar.vue';

export default {

    components: {
        NavBar,
        Footer,
        SideBar
    }

}


</script>

<style>

</style>
