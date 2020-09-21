<template>
    <div class="right-panel flx-col center">
        <h1>Good Morning Blog</h1>
        <div v-for="post in blog_posts">
            <blog :type="post.type" :title="post.title" :p="post.p" :location="post.location"></blog>
        </div>
    </div>
</template>

<script>
    import blog from '../components/blog_post';


    export default {
        name: "app_right_panel",
        components: {
            blog,
        },
        props: {
            blog_posts: []
        },
        data () {
            return {
            }
        }
    }
</script>
<style scoped>
</style>