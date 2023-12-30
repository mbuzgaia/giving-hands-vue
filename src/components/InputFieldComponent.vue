<template>
  <div>
    <label class="block"></label>
    <input :type="{ type }" class="border-2 border-gray-300 rounded-md" />
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text',
  },
});
</script>
