<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/login">Login</router-link> |
  <router-link to="/signup">Sign Up</router-link>

  <router-view />
</template>

<script setup></script>

<style>
body {
  background-color: #e2e7f0;
}
</style>
