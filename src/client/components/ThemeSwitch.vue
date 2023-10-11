<!-- <script lang="ts">
const colorMode = useColorMode()

console.log(colorMode.preference)
</script> -->

<template>
    <div>
        <icon icon=""/>
        <input type="checkbox" class="toggle toggle-md" v-model="setTheme"/>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            isToggled: false
        }
    },
    methods: {
        setTheme() {
            this.isToggled = !this.isToggled;
        }
    }
}
</script>