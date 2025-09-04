<script lang="ts" setup>
import heroDesk from '~/assets/images/hero-desk.svg?raw'
</script>

<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container is-fluid">
                <div class="columns is-vcentered">
                    <div class="column is-half svg-column">
                        <div class="svg-wrapper" v-html="heroDesk">
                        </div>
                    </div>
                    <div class="column is-half">
                        <h1 class="title is-1">Hello World!</h1>
                        <p class="subtitle">I am wesdevpro</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.svg-wrapper svg {
    height: 100%;
    width: 100%;
}

#blob-start {
    fill: var(--bulma-accent);
}
</style>

<script lang="ts">
import KUTE from 'kute.js'

export default {
  mounted() {
    const fromPath = document.getElementById('blob-start')
    const middlePath = document.getElementById('blob-middle')
    //const toPath = document.getElementById('blob-end')

    if (fromPath && middlePath) {
      const startMorph = () => {
        const duration = 2500 + Math.random() * 1000

        const blobMorph = KUTE.fromTo(
          fromPath,
          { path: fromPath },
          { path: middlePath },
          {
            delay: 500,
            duration,
            yoyo: true,
            repeat: Infinity,
            easing: 'easingCubicInOut',
          }
        )
        blobMorph.start()
      }
    }
  }
}
</script>
