<template>
  <div class="post flex flex-col">
    <h1 class="text-xl font-semibold">{{ title }}</h1>
    <p class="mt-2 font-normal max-w-[65%]">{{ body }}</p>
    <div class="tags mt-4">
      <span v-for="tag in tags" :key="tag" class="tag bg-slate-300 ">{{
        tag
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnnouncementComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding-bottom: 20px;
  border-bottom: 1px solid black;
}

.tags {
  margin-top: 10px;
}

.tag {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
}
</style>
