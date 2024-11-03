<script setup lang="ts">
import { useAsyncData } from '#app'
const props = defineProps<{
  path: string
}>()

const { data: navigation } = await useAsyncData(`navigation-${props.path}`, () => 
  fetchContentNavigation(props.path)
)

const isExpanded = ref<{ [key: string]: boolean }>({})

const toggleExpand = (path: string) => {
  isExpanded.value[path] = !isExpanded.value[path]
}

const hasChildren = (item: NavItem) => item.children && item.children.length > 0
</script>

<template>
  <ul v-if="navigation">
    <li v-for="item in navigation" :key="item._path">
      <div v-if="hasChildren(item)">
        <button @click="toggleExpand(item._path)">
          {{ isExpanded[item._path] ? '▼' : '▶' }} {{ item.title }}
        </button>
        <NaviNavigationTree v-if="isExpanded[item._path]" :path="item._path" />
      </div>
      <NuxtLink v-else :to="item._path">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>