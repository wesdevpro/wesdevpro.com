<template>
   <b-navbar class="my-2">
      <template #brand>
         <b-navbar-item tag="router-link" :to="{ path: '/' }" class="mx-4">
            <img src="../assets/logoName.png" alt="ntohq namebrand logo" />
         </b-navbar-item>
      </template>
      <template #start class="has-text-centered">
         <b-navbar-item
            v-for="{ link, name } in nav"
            :key="name"
            tag="router-link"
            exact-active-class="is-active"
            :to="{ path: link }"
            class="is-size-4"
         >
            {{ name }}
         </b-navbar-item>
      </template>
   </b-navbar>
</template>

<script>
export default {
   data() {
      return {
         nav: [
            {
               name: 'Home',
               link: '/',
            },
            {
               name: 'About',
               link: '/about',
            },
            {
               name: 'Projects',
               link: '/projects',
            },
            {
               name: 'Blog',
               link: '/blog',
            },
         ],
      }
   },
}
</script>

<style lang="css">
b-navbar-item {
   border-radius: 10px;
   background: #088f04;
}
</style>
