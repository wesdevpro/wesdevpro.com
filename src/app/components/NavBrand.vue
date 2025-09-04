<script lang="ts" setup>
import brandLogo from '~/assets/images/wesdevpro-full-logo-no-sub.svg'
import { BNavbarItem } from "buefy";
</script>

<template>
   <b-navbar-item tag="router-link" :to="{ path: '/' }">
      <img
         :src="brandLogo"
         style="max-height:2rem; margin-right:3px;"
         alt="wesdevpro Brand Logo"
      />
   </b-navbar-item>
</template>
