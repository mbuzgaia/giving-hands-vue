<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/login">Login</router-link> |
  <router-link to="/signup">Sign Up</router-link> |
  <router-link to="/">Timetable</router-link>
  <div class="grid grid-cols-12 h-screen">
    <NavbarComponent class="col-span-12" v-if="!$route.meta.hideNavbar" />
    <SideBarComponent
      class="col-span-2 full-minus-navbar"
      v-if="!$route.meta.hideNavbar"
    />
    <router-view
      :class="
        $route.meta.hideNavbar
          ? 'col-span-full bg-white'
          : 'col-span-10 bg-white'
      "
    />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import SideBarComponent from './components/SideBarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SideBarComponent,
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: white;
}

.full-minus-navbar {
  height: calc(100vh - 60px);
}

router-view {
  padding: 2rem;
  max-height: 100vh;
}
</style>
