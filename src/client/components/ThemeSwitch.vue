<!-- <script lang="ts">
const colorMode = useColorMode()
</script> -->

<template>
    <div class="flex grid-flow-col text-neutral">
        <!-- <icon icon="quill:sun" class="text-neutral text-lg"/> -->
        <span class="i-mdi-weather-sunny text-lg m-auto"></span>
        <input type="checkbox" class="toggle mx-2 m-auto" ref="toggleSwitch" @change="toggleTheme"/>
        <span class="i-mdi-weather-night text-lg m-auto"></span>
        <!-- <icon icon="mdi:weather-night" class="text-neutral text-lg"/> -->
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
    'system',
    'dark',
    'light'
];
</script>

<script lang="ts">
export default {
    mounted() {
        if(this.$colorMode.value == 'dark') {
            this.$refs.toggleSwitch.checked = true;
        }
    },
    methods: {
        toggleTheme(event) {
            if(event) {
                let checked = event.target.checked || false;

                if(checked) {
                    this.$colorMode.value ='dark';
                }
                else {
                    this.$colorMode.value = 'light';
                }
            }
            else {
                throw console.error("toggleTheme event param is null or undefined. Pleaser reload the webpage.");
            }
        }
    }
}
</script>