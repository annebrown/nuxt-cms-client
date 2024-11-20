<template>
    <ul>
      <li v-for="item in items" :key="item._path">
        <div class="nav-item">
          <NuxtLink :to="item._path" :class="{ 'active': isActive(item._path) }">
            {{ item.title }}
          </NuxtLink>
          <button v-if="item.children" @click="toggleExpand(item)">
            {{ item.isExpanded ? '-' : '+' }}
          </button>
        </div>
        <NaviLocalNavigationItem
          v-if="item.children && item.isExpanded" 
          :items="item.children"
          :current-path="currentPath"
        />
      </li>
    </ul>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    currentPath: {
      type: String,
      required: true
    }
  })
  
  const isActive = (path) => path === props.currentPath
  
  const toggleExpand = (item) => {
    item.isExpanded = !item.isExpanded
  }
  
  watch(() => props.currentPath, () => {
    expandCurrentPath(props.items, props.currentPath)
  }, { immediate: true })
  
  const expandCurrentPath = (items, path) => {
    for (const item of items) {
      if (path.startsWith(item._path)) {
        item.isExpanded = true
        if (item.children) {
          expandCurrentPath(item.children, path)
        }
      } else {
        item.isExpanded = false
      }
    }
  }
  </script>