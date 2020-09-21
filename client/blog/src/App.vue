<template>
    <div id="app">
        <app_main_container class="main-container"></app_main_container>
    </div>
</template>

<script>
import app_main_container from "./components/app_main_container";


export default {
    components: {
        app_main_container,
    }
}
</script>
<style>
    /*third party css*/

    /*our global css*/
    @import '@/assets/css/style.css';
</style>