<template>
   <section class="section" style="margin-top: 0px">
      <div class="has-text-left" style="margin-top: 0px">
         <b-tooltip label="Advance stock analyzer" position="is-right">
            <figure class="image media-left is-4by2" style="max-width: 145px">
               <a href="https://github.com/Sergix/analyst">
                  <img
                     class="is-rounded"
                     src="@/assets/analyst-logo-padded.png"
                     style="margin-bottom: 5px"
                  />
               </a>
            </figure>
         </b-tooltip>
         <div class="media-content">
            <p>
               This stock analyzer was made to help users trade on the stock
               market. To help us accomplish this goal we use an advanced
               back-end server that determines several different factors and
               predictions from machine models and other great APIs. My area of
               expertise in this project was mostly the backend flask server. My
               friend Sergix was in charge of the front-end. Sergix used the
               nuxtjs framework and buefy to quickly make the front end. You can
               find <a href="sergix.net">sergix</a> here or on
               <a href="https://github.com/Sergix">github</a>.
            </p>
            <br />
            <b-button
               tag="router-link"
               to="https://github.com/Sergix/analyst-server"
               >Server repository</b-button
            >
         </div>
      </div>
      <div class="has-text-centered" style="margin-top: 144px">
         <b-tooltip label="Outreach website for a podcast" position="is-top">
            <figure class="image media-left">
               <h2 class="title is-4" style="color: rgb(186, 85, 211)">
                  Mango Morning
               </h2>
            </figure>
         </b-tooltip>
         <div class="media-content">
            <p class="has-text-centered">
               I made a website for the mango morning podcast. I used gridsome,
               Cloudflare worker and the SendGrid API
            </p>
            <br />
            <div class="has-text-centered">
               <b-button
                  tag="router-link"
                  to="https://github.com/ntohq/mango-morning--website"
                  >Website repository</b-button
               >
            </div>
         </div>
      </div>
   </section>
</template>
