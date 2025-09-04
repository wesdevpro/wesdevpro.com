<template>
   <b-navbar>
      <template #brand>
         <NavBrand />
      </template>
      <template #start>
         <b-navbar-item tag="router-link" :to="'/'">Home</b-navbar-item>
         <!--b-navbar-item tag="router-link" :to="'/projects'">Projects</b-navbar-item>
         <b-navbar-item tag="router-link" :to="'/blog'">Blog</b-navbar-item-->
      </template>
      <template #end>
         <ThemeToggle />
      </template>
   </b-navbar>
</template>

<script setup lang="ts">
import { BNavbar, BNavbarItem } from "buefy";
</script>

