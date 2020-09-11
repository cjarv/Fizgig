import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import App from './App.vue'

// Middleware
Vue.use(firestorePlugin);

new Vue({
    el: '#app',
    render: h => h(App),
});
