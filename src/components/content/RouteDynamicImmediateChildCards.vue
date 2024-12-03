<script setup>
  const route = useRoute()
const currentPath = route.path

// Fetch immediate subpages of the current page
const { data: allSubpages } = await useAsyncData(`subpages-${currentPath}`, () => 
  queryContent(currentPath)
    .where({ _path: { $contains: currentPath }, _path: { $ne: currentPath } })
    .find()
)

// Filter to get only immediate children
const immediateSubpages = computed(() => {
  if (!allSubpages.value) return []
  return allSubpages.value.filter(page => {
    const relativePath = page._path.slice(currentPath.length)
    return !relativePath.slice(1).includes('/')
  })
})
</script>

<template><div>

    <div class="flex flex-row gap-4 flex-wrap">
        <div v-for="page in immediateSubpages" :key="page._path" class="card">
            <NuxtLink :to="page._path">
                <h2 class="text-center pb-2 !leading-6">{{ page.title }}</h2>
                <p class="text-xs text-current">
                    {{ page.description }}
                </p>
            </NuxtLink>
        </div>
    </div>
    
    </div></template>
  
  
  
  <style scoped>
 .card { @apply w-44 h-24 m-0 p-2 ring-1 rounded-md text-center bg-gray-950; }
  </style>