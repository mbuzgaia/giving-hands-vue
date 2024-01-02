<template>
  <div class="w-full content flex flex-col">
    <div class=" flex justify-center items-center h-full w-full">
      <div class=" flex justify-between w-full m-20">
        <div class="w-[30%] h-[100%] text-right">
          <div
            class="min-h-80 bg-slate-600 text-slate-100 rounded-lg shadow-lg p-4 mb-4"
          >
            <h3 class="text-right text-xl font-semibold mb-2">
              الجامعة الدولية
            </h3>
          </div>
        </div>
        <div class="w-[30%]">
          <div
            class="min-h-80 bg-slate-600 text-slate-100 rounded-lg shadow-lg p-4 mb-4"
          >
            <h3 class="text-right text-xl font-semibold mb-2">بنغازي الامل</h3>
          </div>
        </div>
        <div class="w-[30%]">
          <div
            class="min-h-80 bg-slate-600 text-slate-100 rounded-lg shadow-lg p-4 mb-4"
          >
            <h3 class="text-right text-xl font-semibold mb-2">
              لأجلك بنغازي أبادر
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <router-link to="/donate">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Donate Now
        </button>
      </router-link>
      <router-link to="/history">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Donation History
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style>
.content {
  height: 100%;
  border-color: black;
}
body {
  background-color: #efefef;
}
</style>
