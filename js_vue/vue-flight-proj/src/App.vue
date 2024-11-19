<script setup lang="ts">
</script>

<template>
  <RouterLink to="/">
    <h1>Flights</h1>
  </RouterLink>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
h1 {
  color: #b1ffdc;
  font-size: 3.2rem;
  text-align: center;
  margin: 1rem 5rem;
  padding: 1rem 0;
}
</style>
