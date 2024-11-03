<template>
    <pre v-if="props.code"><code v-html="props.code"></code></pre>
  </template>
  
  <script setup>
  const props = defineProps({
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  })
  </script>
  
  <style>
  pre {
    background-color: #f6f8fa;
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
  }
  </style>