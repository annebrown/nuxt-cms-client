---
title: Data From Component
description: Data From Component
---

## List Object Items from Custom Component

### Create Custom Component

#### Custom Navi Component

```js
<template>
<ContentNavigation v-slot="{ navigation }">
    <ul>
        <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
    </ul>
</ContentNavigation>
</template>
```

#### Custom Data Component

```js
<script setup>
    const items = [
    { id: 1, name: 'Oranges' },
    { id: 2, name: 'Apples' },
    { id: 3, name: 'Giraffes' }
    ]
</script>

<template>
  <slot :items="items"></slot>
</template>
```

### Listing Obj Items from Custom Component

```js
<template>
  <CustomComponent v-slot="{ items }">
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </CustomComponent>
</template>
```

or

```js
<CustomComponent v-slot="{ items }">
    <ul>
        <li v-for="item in items" :key="item._path">
            <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
        </li>
    </ul>
</CustomComponent>
```

## Component from Nuxt UI or Nuxt Content

### UDropdown

Pass an array of items as a prop and use the #item slot to customize how each item is rendered

```js
<template>
  <UDropdown :items="items">
    <template #item="{ item }">
      <span>{{ item.name }}</span>
    </template>
  </UDropdown>
</template>

<script setup>
const items = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' }
]
</script>
```
