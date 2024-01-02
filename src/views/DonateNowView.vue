<template>
  <div class="w-full content flex flex-col mt-12">
    <div class=" flex justify-center items-center h-full w-full">
      <div class="grid grid-cols-2 gap-4">
        <div class="w-full">
          <div
            class="min-h-60 min-w-60 text-right bg-slate-600 text-slate-100 rounded-lg shadow-lg p-4 mb-4"
          >
            <label for="payment1" class="text-right text-xl font-semibold mb-2"
              >إدفع لي</label
            >
            <input
              class="ml-5"
              type="radio"
              id="payment1"
              name="payment"
              value="إدفع لي"
            />
          </div>
        </div>
        <div class="w-full">
          <div
            class="min-h-60 min-w-60 text-right bg-slate-600 text-slate-100 rounded-lg shadow-lg p-4 mb-4"
          >
            <label for="payment2" class="text-right text-xl font-semibold mb-2"
              >موبي كاش</label
            >
            <input
              class="ml-5"
              type="radio"
              id="payment2"
              name="payment"
              value="موبي كاش"
            />
          </div>
        </div>
        <div class="w-full">
          <div
            class="min-h-60 min-w-60 text-right bg-slate-600 text-slate-100 rounded-lg shadow-lg p-4 mb-4"
          >
            <label for="payment3" class="text-right text-xl font-semibold mb-2"
              >نقدي</label
            >
            <input
              class="ml-5"
              type="radio"
              id="payment3"
              name="payment"
              value="نقدي"
            />
          </div>
        </div>
        <div class="w-full">
          <div
            class="min-h-60 min-w-60 text-right bg-slate-600 text-slate-100 rounded-lg shadow-lg p-4 mb-4"
          >
            <label for="payment4" class="text-right text-xl font-semibold mb-2"
              >صك</label
            >
            <input
              class="ml-5"
              type="radio"
              id="payment4"
              name="payment"
              value="صك"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        @click="showAlert"
      >
        Donate Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonateNowView',
  methods: {
    showAlert() {
      const donationAmount = prompt('Enter the donation amount:'); // Prompt the user to enter the donation amount
      if (donationAmount) {
        alert(`Thank you for donating ${donationAmount}! Dinar`);
      }
    },
  },
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
