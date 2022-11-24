<template>
   <section class="section has-text-left">
      <h2 class="title is-2 has-text-centered">Welcome</h2>
      <div class="media box" style="z-index: 1">
         <figure class="image is-96x96 media-left">
            <img class="is-rounded" src="@/assets/me.jpg" />
         </figure>
         <p class="media-content typedtext" style="text-indent: 1em"></p>
      </div>
   </section>
</template>

<script>
import Typedjs from 'typed.js'

export default {
   mounted() {
      const specialTyped = new Typedjs('.typedtext', {
         strings: [
            "Oh, hey there! You've found my website! Here I showcase my projects, posts, articles, and career. I hope all the resources that I have here are helpful to you. All your feedback is appreciated. Thank you, and God bless.<br/><i style='margin-left: 20px'>~Wesley Ford</i><br/><span class='alsotyped'></span>",
         ],
         typeSpeed: 15,
         cursorChar: '_',
      })
      return specialTyped
   },
}
</script>

<style lang="scss" scoped>
.media.box {
   @media (max-width: calc(769px + (2 * 0.75rem))) {
      flex-direction: column;
      figure {
         margin: 0 auto 1rem auto;
      }
   }
}
</style>
