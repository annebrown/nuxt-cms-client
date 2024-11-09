<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  item: any
  depth: number
}>()

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const isDirectory = computed(() => props.item.children && props.item.children.length > 0)
</script>

<template>
  <li :style="{ paddingLeft: `${depth * 5}px` }">
    <div class="nav-item" :class="{ 'nav-directory': isDirectory }">
      <button v-if="isDirectory" @click="toggleExpand" class="expand-button">
        {{ isExpanded ? '-' : '+' }}
      </button>
      <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
    </div>
    <ul v-if="isDirectory && isExpanded" class="text-xs">
      <NaviNavigationItem
        v-for="child in item.children"
        :key="child._path"
        :item="child"
        :depth="depth + 1"
      />
    </ul>
  </li>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
.expand-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 5px;
}
</style>