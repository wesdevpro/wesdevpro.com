<template>
   <b-navbar class="site-navbar" :close-on-click="true" :mobile-burger="true" centered>
      <template #brand>
         <NavBrand />
      </template>
      <template #start>
         <b-navbar-item class="is-nav-link" tag="router-link" :to="'/'" exact>Home</b-navbar-item>
         <b-navbar-item class="is-nav-link" tag="router-link" :to="'/projects'">Projects</b-navbar-item>
         <b-navbar-item class="is-nav-link" tag="router-link" :to="'/blog'">Blog</b-navbar-item>
         <b-navbar-item class="is-nav-link" tag="router-link" :to="'/about'">About</b-navbar-item>
         <b-navbar-item class="is-nav-link" tag="router-link" :to="'/contact'">Contact</b-navbar-item>
      </template>
      <template #end>
         <ThemeToggle />
      </template>
   </b-navbar>
</template>

<script setup lang="ts">
import { BNavbar, BNavbarItem } from "buefy";
</script>

