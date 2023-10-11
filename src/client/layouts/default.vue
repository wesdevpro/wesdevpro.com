<template>
    <div>
        <NavBar :navRoutes="layoutRoutes" />
        <slot />
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            layoutRoutes: [
                {
                    title: 'Home',
                    path: '/'
                },
                {
                    title: 'Home1',
                    path: '/'
                }
            ]
        }
    }
}
</script>