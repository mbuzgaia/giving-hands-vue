<template>
  <div class="bg-slate-600 grid grid-cols-12 h-screen">
    <NavbarComponent class="col-span-12" v-if="!$route.meta.hideNavbar" />
    <router-view
      class="h-screen col-span-12 flex items-center justify-center bg-slate-800"
      :class="{
        'bg-white': !$route.meta.hideNavbar,
        'bg-gray-100': $route.meta.hideNavbar,
      }"
    />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #313335;
  height: 100%;
}
</style>
