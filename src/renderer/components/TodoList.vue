<template>
    <h1>{{ list.title }}</h1>
</template>

<script>
export default {
    props: {
        list: {
            type: Object,
            required: true
        }
    },
    computed: {
        todos() {
            return this.$store.getters['ToDos/todosForList'](this.id)
        }
    }
}
</script>