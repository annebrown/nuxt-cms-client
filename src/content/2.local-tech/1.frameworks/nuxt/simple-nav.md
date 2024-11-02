---
title: Simple Nav
description: Simple Nav Passed Btw Components
---

using useAsyncData to fetch a list of books labeled 'dragons'. Here's a straightforward example that demonstrates this:
In the child component (ChildComponent.vue):

```js
<script setup>
const dirNode = '/books/dragons'
const pathRegexp = '^/books/dragons'

const { data: dragonBooks } = await useAsyncData('dragonBooks', () => 
  queryContent(dirNode)
    .where({ _path: { $regex: pathRegexp } })
    .find()
)
</script>

<template>
  <div>
    <slot :dragon-books="dragonBooks"></slot>
  </div>
</template>
In the parent component:

<template>
  <ChildComponent v-slot="{ dragonBooks }">
    <h2>Dragon Books</h2>
    <ul v-if="dragonBooks">
      <li v-for="book in dragonBooks" :key="book._path">
        {{ book.title }}
      </li>
    </ul>
  </ChildComponent>
</template>
```

Child component uses useAsyncData to fetch the list of dragon books using queryContent. 

This is based on the Nuxt Content query syntax you provided.

Instead of emitting an event, the child component uses a scoped slot to pass the dragonBooks data to its parent.

The parent component uses the v-slot directive to receive the dragonBooks data from the child component.

The parent then displays the list of dragon books.

This approach doesn't use emit events or require any additional methods. 

It leverages Vue's scoped slots feature to pass data from child to parent, which is a simple and effective way to share data between components.

The useAsyncData composable is used here as it's the recommended way to fetch data in Nuxt 3, as mentioned in the Nuxt 3 documentation.