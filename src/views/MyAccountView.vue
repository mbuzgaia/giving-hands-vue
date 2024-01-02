<template>
  <div class="w-full p-10">
    <!-- Profile Card -->
    <div class="bg-white rounded-lg border-2 border-black mb-4 w-full px-6">
      <div class="p-4">
        <div class="flex items-center justify-between my-4">
          <h2 class="text-xl font-bold">Profile</h2>
        </div>
        <div class="flex items-center justify-between py-6 border-b-2">
          <div class="lbl-i flex">
            <label class="block text-gray-700 text-md font-medium mb-2"
              >Display Name</label
            >
            <div
              class="warning w-6 h-6 ml-8 text-red-600 rounded-full border-2 text-center bg-red-600 flex items-center justify-center"
            >
              !
            </div>
          </div>
          <input
            type="text"
            class="w-600 px-3 py-2 border border-gray-300 rounded text-slate-500"
            disabled
            :value="profile.displayName"
          />
        </div>
        <div class="flex items-center justify-between py-6 border-b-2">
          <div class="lbl-i flex">
            <label class="block text-gray-700 text-md font-medium mb-2"
              >Student ID</label
            >
            <div
              class="warning w-6 h-6 ml-8 text-red-600 rounded-full border-2 text-center bg-red-600 flex items-center justify-center"
            >
              !
            </div>
          </div>
          <input
            type="text"
            class="w-600 px-3 py-2 border border-gray-300 rounded text-slate-500"
            disabled
            :value="profile.studentId"
          />
        </div>
        <div class="flex items-center justify-between py-6 border-b-0">
          <div class="lbl-i flex">
            <label class="block text-gray-700 text-md font-medium mb-2"
              >Email Address</label
            >
            <div
              class="warning w-6 h-6 ml-8 text-red-600 rounded-full border-2 text-center bg-red-600 flex items-center justify-center"
            >
              !
            </div>
          </div>
          <input
            type="text"
            class="w-600 px-3 py-2 border border-gray-300 rounded text-slate-500"
            disabled
            :value="profile.emailAddress"
          />
        </div>
      </div>
    </div>

    <!-- User Picture Card -->
    <div class="bg-white rounded-lg border-2 border-black mb-4 w-full px-6">
      <div class="p-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold">User Picture</h2>
          <button
            class="text-white p-4 rounded-md bg-slate-600 hover:bg-slate-500"
          >
            Upload Picture
          </button>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-md font-medium mb-2"
            >Picture</label
          >
          <input
            type="file"
            accept="image/jpeg, image/png"
            class="w-full p-10 h-60 border bg-slate-100 border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAccountView',
  data() {
    return {
      profile: {
        displayName: 'John Doe',
        studentId: '123456',
        emailAddress: 'john.doe@example.com',
      },
    };
  },
};
</script>

<style>
.container {
  width: 90%;
  height: 100vh;
}

.card {
  width: 90%;
  border: 2px solid black;
  border-radius: 0;
  box-shadow: none;
}

.lbl-i {
  display: flex;
  align-items: center;
}

.warning {
  /* background-color: red; */
  color: white;
  font-weight: bold;
}

input[type='text'] {
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: none;
  width: 50%;
  height: 65px;
  padding: 0 20px;
}
</style>
