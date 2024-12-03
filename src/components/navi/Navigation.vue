<script setup lang="ts">
import { computed } from 'vue'
const remoteQuery = queryContent('/')
const { data: navigation, pending } = await useLazyAsyncData('navigation', () => fetchContentNavigation(remoteQuery))

const organizedNavigation = computed(() => {
  if (!navigation.value) return []
  
  const items = [...navigation.value]
  const index = items.find(item => item._path === '/index' || item._path === '/')
  
  if (index) {
    const indexIndex = items.indexOf(index)
    items.splice(indexIndex, 1)
    
    // Make the index item expandable and contain all other items
    index.children = items
    return [index]
  }
  
  return items
})

const uniqueRoutes = new Set()

const filterDuplicateRoutes = (items) => {
  return items.filter(item => {
    if (uniqueRoutes.has(item._path)) {
      return false
    }
    uniqueRoutes.add(item._path)
    if (item.children) {
      item.children = filterDuplicateRoutes(item.children)
    }
    return true
  })
}

const filteredNavigation = computed(() => filterDuplicateRoutes(organizedNavigation.value))
</script>

<template>
  <nav>
    <ul class="navigation-tree">
      <NaviNavigationItem
        v-for="item in filteredNavigation"
        :key="item._path"
        :item="item"
        :depth="0"
      />
    </ul>
  </nav>
</template>

<style scoped>
.navigation-tree {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>