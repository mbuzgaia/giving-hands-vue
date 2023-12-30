<template>
  <section class="h-screen">
    <div
      id="card"
      class="border-slate-800 border-2 flex flex-col items-center justify-center min-h-fit my-auto mx-auto w-full max-w-md max-h-screen bg-white rounded-lg"
    >
      <div class="w-full pt-12 flex flex-col items-center justify-center ">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img
            class="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          OnTime
        </a>
      </div>
      <div class="w-full px-8 pt-4 pb-8">
        <h1
          class="flex flex-row justify-center text-2xl font-bold leading-tight text-gray-900 md:text-2xl "
        >
          Good to see you again!
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div class="pt-10">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-slate-700 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 placeholder:text-sm"
              placeholder="yourname_id@university.edu.ly"
              required
            />
          </div>
          <div class="divider h-0"></div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 "
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-slate-700 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5"
            />
          </div>
          <div class="divider h-0"></div>
          <div class="flex items-center justify-between">
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
                <label for="remember" class="text-gray-500 ">Remember me</label>
              </div>
            </div>
            <router-link
              to="#"
              class="text-sm font-medium text-primary-600 hover:underline text-blue-600"
            >
              Forgot password?
            </router-link>
          </div>
          <div class="divider h-0"></div>
          <button
            type="submit"
            class="w-full text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center my-6"
          >
            Login
          </button>
          <p class="text-center text-sm font-normal text-slate-700">
            Don’t have an account yet?
            <router-link
              to="/signup"
              class="text-blue-700 font-bold text-primary-600 hover:underline"
              >Sign Up Now!</router-link
            >
          </p>
        </form>
      </div>
    </div>
  </section>
  <p class="text-center text-sm font-normal text-slate-700">
    &copy; 2022 OnTime
  </p>
</template>

<script>
export default {
  name: 'login',
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
