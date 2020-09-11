<template>
    <div>
        <h1>Good Morning</h1>
    </div>
</template>

<script>
    // Firebase
    import { db } from '../assets/js/firebase_middleware'
    export default {
        name: "app_center_panel",
        data () {
            return {
                blog_posts: [],
            }
        },
        firestore () {
            // firestore DB
            return {
                blog_posts: db.collections('blog_posts'),
            }
        }
    }
</script>

<style scoped>

</style>