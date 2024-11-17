<!-- components/content/Card.vue -->
<template>
    <div class="card">
      <h2><ContentSlot :use="$slots.title" unwrap="p" /></h2>
      <p><ContentSlot :use="$slots.default" unwrap="p" /></p>
    </div>
  </template>
  
  <script setup>
  // No additional setup needed for this example
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
  }
  </style>