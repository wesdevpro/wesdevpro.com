<template>
   <section class="section has-text-left">
      <h2 class="title is-2">Welcome</h2>
      <div class="media box" style="z-index: 1">
         <figure class="image is-48x48 media-left">
            <img class="is-rounded" src="@/assets/logo.png" />
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
         onComplete() {
            const alsotyped = new Typedjs('.alsotyped', {
               strings: ['P.s Use the navigationbar to navigate my website!'],
               typeSpeed: 15,
               cursorChar: '_',
            })
            return alsotyped
         },
      })
      return specialTyped
   },
}
</script>
