<template>
   <section class="section my-tools-container">
      <font-awesome-icon class="has-text-info fa-4x" :icon="['fab', 'html5']" />
      <font-awesome-icon class="has-text-info fa-4x" :icon="['fab', 'sass']" />
      <font-awesome-icon class="has-text-info fa-4x" :icon="['fab', 'vuejs']" />
      <font-awesome-icon
         class="has-text-info fa-4x"
         :icon="['fab', 'node-js']"
         style="color: rgb(68, 136, 62) !important"
      />
   </section>
</template>

<style lang="scss" scoped>
.my-tools-container {
   display: flex;
}
</style>
