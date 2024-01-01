<template>
  <div class="navbar">
    <div class="user-info px-3">
      <i class="border-slate-700 w-2 h-2"></i>
      <img class="user-image" src="/logo.png" alt="User Image" />
      <span class="user-name">{{ user.name }}</span>
    </div>
    <div class="title-bar">
      <h1>{{ pageTitle }}</h1>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      user: {
        name: 'John Doe',
        image: '/path/to/user-image.jpg',
      },
      pageTitle: this.$route.meta.title,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: white;
  /* padding: 20px; */
  color: black;
  position: sticky;
  height: fit-content;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

.navbar a:hover {
  color: #ddd;
}

.user-info {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 3px solid #000000;
  margin-bottom: 20px;
  padding-bottom: 20px;
  width: 100%;
}

.title-bar {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 3px solid #000000;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
}

.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
