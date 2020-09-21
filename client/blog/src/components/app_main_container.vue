<template>
    <div class="flx-row">
        <app_center_panel :blog_posts="blog_posts"></app_center_panel>
        <app_right_panel :blog_posts="blog_posts"></app_right_panel>
    </div>
</template>

<script>
    import { db } from '../assets/js/firebase_middleware';

    import app_center_panel from "../components/app_center_panel";
    import app_right_panel from "../components/app_right_panel";

    export default {
        name: 'app_main_container',
        components: {
            app_center_panel,
            app_right_panel,
        },
        data () {
            return {
                blog_posts: []
            }
        },
        firestore () {
            // firestore DB
            return {
                blog_posts: db.collection('blog')
            }
        }
    }

</script>

<style scoped>

</style>