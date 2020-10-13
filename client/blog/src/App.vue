<template>
    <div id="app">
        <app_navbar class="navbar full"></app_navbar>
        <app_main_container class="main-container"></app_main_container>
    </div>
</template>

<script>
import app_main_container from "./components/app_main_container";
import app_navbar from "./components/app_navbar";


export default {
    components: {
        app_main_container,
        app_navbar,
    }
}
</script>
<style>
    /*third party css*/

    /*our global css*/
    @import '@/assets/css/style.css';
</style>