<template>
   <ColorScheme>
  <div class="navbar-item">
    <button class="theme-toggle" type="button" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="ToggleView">
         <b-icon pack="fas" :icon="isDark ? 'moon' : 'sun'" size="is-small"></b-icon>
      </button>
   </div>
   </ColorScheme>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useColorMode } from '#imports'

export default defineComponent({
  name: 'ThemeToggle',
  setup() {
    const colorMode = useColorMode()

    const isDark = computed(() => colorMode.value === 'dark')

    function ToggleView() {
      colorMode.preference = isDark.value ? 'light' : 'dark'
    }

    return { isDark, ToggleView }
  }
})
</script>
