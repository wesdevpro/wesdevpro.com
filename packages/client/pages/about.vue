<template>
   <div style="display: flex; flex-direction: column">
      <section class="section content-wrapper" style="flex: 1">
         <article class="wrapper-content pl-2">
            <h1 class="title is-4">Quick Summary</h1>
            <p>
               I'm a student studying for my bachelor's in computer science at
               Pensacola Christain College. Currently, I'm freelancing in web
               design. Over the summer, I will continue to develop my projects
               to further develop my skills and improve the open source
               community.
            </p>
         </article>
         <div class="wrapper-content">
            <my-animation id="my-animation"></my-animation>
         </div>
      </section>
      <section class="section" style="flex: 2">
         <div class="has-text-centered">
            <a href="/resume.pdf">
               <b-button>
                  <b>My Resume</b>
               </b-button>
            </a>
         </div>
         <expertise style="margin-top: 5%"></expertise>
      </section>
   </div>
</template>

<script>
import KUTE from 'kute.js'
import myAnimation from '~/assets/wesdevpro-animation.svg?inline'
import expertise from '@/components/myTools.vue'

export default {
   components: {
      myAnimation,
      expertise,
   },
   head: {
      title: 'About Me - wesdevpro',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: "wesdevpro's personal website - About Me Page!",
         },
      ],
   },
   mounted() {
      KUTE.fromTo(
         '#blob2',
         { path: '#blob2' },
         { path: '#blob1' },
         {
            duration: 4000,
            repeat: 99999,
            yoyo: true,
         }
      ).start()
   },
}
</script>

<style lang="scss">
.content-wrapper {
   display: flex;
   flex-direction: row;
   padding: 0 50px 0 50px;
   margin-top: 10px;
}

.wrapper-content {
   margin: 0 auto 0 auto;
   flex: 1;
   padding: 10px;
}

article.wrapper-content {
   margin: 0 auto 0 10px;
   text-align: left;
}

div.wrapper-content {
   margin: 0 10px 0 auto;
   text-align: center;
}

#my-animation {
   height: 70%;
}

@media screen and (max-width: 768px) {
   .content-wrapper {
      flex-direction: column;
   }

   div.wrapper-content,
   article.wrapper-content .wrapper-content {
      margin: 10px 0 10px 0;
      text-align: center;
   }
}

@media screen and (max-width: 1400px) {
   #my-animation {
      display: none;
   }

   .content-wrapper div {
      display: none;
   }

   .content-wrapper article {
      text-align: center;
      margin: auto;
   }
}
</style>
