<!-- <script lang="ts">
const colorMode = useColorMode()
</script> -->

<template>
    <div class="flex grid-flow-col text-neutral">
        <icon  icon="mdi:weather-sunny" class="text-lg m-auto"></icon>
        <input type="checkbox" class="toggle mx-2 m-auto" ref="toggleSwitch" @change="toggleTheme"/>
        <icon  icon="mdi:weather-night" class="text-lg m-auto"></icon>
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