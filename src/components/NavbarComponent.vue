<template>
  <div class="navbar bg-slate-700 fixed">
    <div class="navbar-col">
      <router-link to="/home">
        <span class="website-name">Giving Hands</span>
      </router-link>
    </div>
    <div class="navbar-col">
      <input
        type="text"
        class="search-bar text-slate-900 max-h-[80px]"
        placeholder="Search..."
      />
    </div>
    <div class="navbar-col">
      <div class="user-info">
        <i class="border-slate-700 w-2 h-2"></i>
        <img class="user-image" src="/square.png" alt="User Image" />
        <span class="user-name">{{ user.name }}</span>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      user: {
        name: 'Laith Elhnaid',
        image: '/path/to/user-image.jpg',
      },
    };
  },
};
</script>

<style scoped>
.navbar {
  color: white;
  position: sticky;
  height: fit-content;
  border-bottom: 3px solid #000000;
  display: flex;
}

.navbar-col {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.website-name {
  font-weight: bold;
}

.search-bar {
  width: 100%;
  padding: 0.75rem;
}

.user-info {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}

.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  filter: brightness(0) invert(1);
}
</style>
