<template>
   <b-navbar class="my-2">
      <template #brand>
         <b-navbar-item tag="router-link" :to="{ path: '/' }" class="mx-2">
            <img src="../assets/full-logo.png" alt="ntohq namebrand logo" />
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

<style lang="css" scoped>
b-navbar-item {
   border-radius: 10px;
}

a {
   text-decoration: underline 0.15em rgba(255, 255, 255, 0);
   transition: text-decoration-color 600ms;
}

a:hover {
   text-decoration-color: rgb(150, 187, 202);
   text-underline-offset: 0.4em;
}

img {
   height: 120%;
}

nav {
   min-height: 5rem;
}
</style>
