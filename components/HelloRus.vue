<template>
  <div>
    count=> {{ count }}
    <button @click="add">add</button>
  </div>
</template>

<script setup lang="ts">
  const count = ref(0);

  const add = () => count.value++
</script>
