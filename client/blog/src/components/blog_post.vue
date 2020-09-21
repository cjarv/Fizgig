<template>
    <div :class="type">
        <h3>{{ title }}</h3>
        <p>{{ p }}</p>

    </div>
</template>

<script>
export default {
    name: 'blog',
    props: {
        title: String,
        p: String,
        timestamp: String,
        location: {},
        type: String
    },
    data () {
        return {

        }
    }
}
</script>
