---
title: Nuxt Navi
description: Methods of Obtaining Navi Links
---


## Immediate Children of a Specific Dir

Regexp:

```regexp
'^/some-path/[^/]+$'
```

yields only direct children of the '/some-path/' path, excluding both the parent dir and any nested subdirs.

## Child Links of Any Directory

```js
<template>
<ContentList path="/tech/frameworks" v-slot="{ list }">
    <div v-for="item in list" :key="item._path">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
    </div>
</ContentList>
</template>
```

## Top Links

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

## Top Links and Children

To loop over the children of a link in Vue.js, you can use the v-for directive. Here's an example of how you can do it:

```js
<template>
 <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
            <p class="text-cyan-500">Parent</p>
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          <ul v-if="link.children">
            <p class="text-purple-500">Children</p>
            <li v-for="childLink of link.children" :key="childLink._path">
              <NuxtLink :to="childLink._path">{{ childLink.title }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
</template>
```

## Reverse Order

```js
<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation.slice().reverse()" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>
```

Use `slice()` to copy nav array, then reverse() method to reverse the order. Array is copied because reverse() modifies original array order.
