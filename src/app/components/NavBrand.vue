<script lang="ts" setup>
import brandMark from '~/assets/images/wesdevpro-profile-logo.svg'

withDefaults(
   defineProps<{
      compact?: boolean
   }>(),
   {
      compact: false,
   },
)
</script>

<template>
   <NuxtLink class="navbar-item site-brand" :class="{ 'site-brand--compact': compact }" to="/">
      <img
         class="site-brand__mark"
         :src="brandMark"
         width="288"
         height="288"
         alt=""
      />
      <!--
        Live text, not the outlined wesdevpro-text.svg image — the logo's
        source font can't be recovered from that file (Illustrator exports
        outline the glyphs to paths, stripping all font metadata), so the
        wordmark is reproduced in Space Grotesk, the site's own display
        voice, rather than guessed at from an SVG. Since this is live text
        built this session (not a fixed brand asset), it's theme-aware:
        the logo's own fixed ink (navy/teal) on light surfaces, but the
        site's own ink/accent tokens in dark mode — no background chip
        needed to keep it legible.
      -->
      <span class="site-brand__word" aria-hidden="true">wesdev<span class="site-brand__word--accent">pro</span></span>
      <span class="visually-hidden">wesdevpro</span>
   </NuxtLink>
</template>

<style scoped>
.site-brand__word {
   font-family: var(--font-family-display);
   font-weight: var(--weight-bold);
   letter-spacing: -0.02em;
   color: #002F5A;
}

.site-brand__word--accent {
   color: #006089;
}

[data-theme="dark"] .site-brand__word,
.theme-dark .site-brand__word {
   color: var(--color-ink);
}

[data-theme="dark"] .site-brand__word--accent,
.theme-dark .site-brand__word--accent {
   color: var(--color-accent);
}

.visually-hidden {
   position: absolute;
   width: 1px;
   height: 1px;
   padding: 0;
   margin: -1px;
   overflow: hidden;
   clip: rect(0, 0, 0, 0);
   white-space: nowrap;
   border: 0;
}
</style>
