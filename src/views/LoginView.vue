<template>
  <main class="grid grid-flow-col grid-cols-11">
    <div
      class="max-h-[38rem] h-fit col-span-9 col-start-2 rounded-lg sm:col-span-9 sm:col-start-2 md:col-span-3 md:col-start-5 mt-12 bg-slate-600 border-2 border-slate-800 z-10"
    >
      <div
        class="grid grid-flow-row sm:grid-flow-col grid-row-2 sm:grid-col-2"
      ></div>
      <div class="divider h-10"></div>
      <p class="mx-auto w-fit text-2xl mb-12 font-semibold text-slate-200">
        Giving Hands!
      </p>
      <div class="grid grid-flow-col grid-cols-12">
        <p class="col-span-10 col-start-2 text-sm font-medium text-slate-200">
          Email
        </p>
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-2">
        <input
          v-model="email"
          id="email"
          type="email"
          placeholder="yourname@gmail.com"
          class="col-span-10 rounded-sm col-start-2 h-[3.375rem] bg-slate-400 pr-4 text-sm font-normal p-3.5"
          required
        />
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-2"></div>
      <div class="grid grid-flow-col grid-cols-12">
        <p class="col-span-10 col-start-2 text-sm font-medium text-slate-200">
          Password
        </p>
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-2">
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="••••••••"
          class="col-span-10 rounded-sm col-start-2 h-[3.375rem] bg-slate-400 pr-4 text-lg font-normal p-3.5"
          required
        />
      </div>
      <div
        v-if="store.errorMessage"
        class="grid grid-flow-col grid-cols-12 my-4"
      >
        <p
          class="col-span-10 
        col-start-2
        text-red-500"
        >
          *Incorrect email or password
        </p>
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-4 pb-5">
        <div class="flex items-center justify-between col-span-10 col-start-2">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50"
              />
            </div>
            <div class="ml-2 text-sm">
              <label for="remember" class="text-gray-400 ">Remember me</label>
            </div>
          </div>
          <router-link
            to="#"
            class="text-sm font-medium text-primary-600 hover:underline text-yellow-400"
          >
            Forgot password?
          </router-link>
        </div>
      </div>
      <router-link to="/home">
        <div class="grid grid-flow-col grid-cols-12 my-4 pb-5">
          <button
            class="bg-slate-800 col-span-10 col-start-2 h-[3.375rem] hover:bg-slate-700 text-white font-medium text-lg rounded-sm"
          >
            Login
          </button>
        </div>
      </router-link>
      <div class="col-span-10 col-start-2">
        <p class="text-center text-sm font-normal text-slate-400">
          Don’t have an account yet?
          <router-link
            to="/home"
            class="text-yellow-400 font-semibold text-primary-600 hover:underline"
            >Sign Up Now!</router-link
          >
        </p>
        <div class="divider h-10"></div>
      </div>
    </div>
  </main>
</template>

<script>
import { useAuthStore } from '../stores/AuthStore';
import { ref } from 'vue';

export default {
  name: 'LoginView',
  methods: {
    async login() {
      this.$router.push('/');
    },
  },
  setup() {
    const store = useAuthStore();
    const email = ref('');
    const password = ref('');
    const errors = ref({
      email: '',
      password: '',
    });

    const submitLoginForm = async () => {
      try {
        await store.login(email.value, password.value);
      } catch (error) {
        console.error(error);
        // Login failed, handle error
        errors.value.email = 'Invalid email or password';
        errors.value.password = 'Invalid email or password';
      }
    };

    return {
      store,
      email,
      password,
      errors,
      submitLoginForm,
    };
  },
};
</script>

<style>
body {
  background-color: #efefef;
}

* {
  font-family: 'Alexandria', sans-serif;
}
</style>
