<template>
   <section class="section has-text-centered component-container">
      <h4 class="title is-4">Some Tools I Work With:</h4>
      <div class="my-tools-container">
         <font-awesome-icon
            class="has-text-info fa-4x"
            :icon="['fab', 'html5']"
            style="color: rgb(227, 76, 38) !important"
         />
         <font-awesome-icon
            class="has-text-info fa-4x"
            :icon="['fab', 'sass']"
            style="color: rgb(205, 103, 153) !important"
         />
         <font-awesome-icon
            class="has-text-info fa-4x"
            :icon="['fab', 'vuejs']"
            style="color: rgb(66, 184, 131) !important"
         />
         <font-awesome-icon
            class="has-text-info fa-4x"
            :icon="['fab', 'node-js']"
            style="color: rgb(68, 136, 62) !important"
         />
      </div>
   </section>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
   .my-tools-container {
      flex-direction: column;
   }
   svg {
      margin: 30%;
      height: 50%;
   }
}

.component-container {
   .my-tools-container {
      display: flex;

      svg {
         margin: auto;
      }
   }
}
</style>
