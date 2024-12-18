<!-------------------@/components/content/NavigationItem.vue------------------->
<script setup lang="ts">
    defineProps<{ item: any; level: number; }>()

    const openItems = inject('openItems')
    const toggleItem = inject('toggleItem')
    const isPathMatched = inject('isPathMatched')
    // const route = useRoute()

    import { useRoute } from 'vue-router'
    const route = useRoute()

    const isActive = (path) => {
        return route.path === path
    }
</script>

<template><div>

<div :style="{ marginLeft: `${level * 8}px` }">
    <div class="link-text flex items-center max-w-fit">

        <NuxtLink :to="item._path" 
            :class="{ 'font-bold': isPathMatched(route.path, item._path) }">
            {{ item.title }} 
        </NuxtLink>

        <button 
            v-if="item.children && item.children.length" 
            @click="toggleItem(item._path)" 
            class="ml-2 w-4"
        >
            <ImgNavigationRightDown
            v-if="openItems.has(item._path)" 
            :class="{ 'text-current': isActive(item._path) }"
            class="w-4 h-4" />
            <ImgFolder
                v-else
                :class="{ 'text-current': isActive(item._path) }"
                class="w-4 h-4" />
        </button>


        <span v-else class=" w-4 ml-2"></span>

    </div>

    <!-- Children -->
    <ul v-if="item.children && item.children.length && openItems.has(item._path)">
        <li v-for="child in item.children" :key="child._path">
            <NavigationItem :item="child" :level="level + 1" />
        </li>
    </ul>

</div>

</div></template>

<style>
font-bold { @apply text-purple-500 dark:text-purple-500; }
</style>
<!-------------------@/components/content/NavigationItem.vue------------------->