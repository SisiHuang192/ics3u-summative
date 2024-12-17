<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  height: 1000px;
  font-family: 'Arial', sans-serif;
}
</style>