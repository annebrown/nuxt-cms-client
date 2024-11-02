---
title: Vercel Build 404 - Content Navi
filename: issue-nitro.24-10-04.00-15.md
description: 'Vercel Build Error - 404 doc not found - /api/_content/navigation/'
tags: 'Issue, CLOSED, Nuxt, Vercel, Build Log, Nitro, Content Module, Navigation, ab.ca'
----

## Issue

Nuxt-Framework WebApp operates as expected on dev svr but fails in production.

Fails with with 404 msg in Nitro pre-render log, showing relation to `@nuxt/content` Module navi.

Occurs when using both `@nuxt/content` Module in document-driven mode, AND `vue-router`.  Vercel's Nitro engine doesn't recognize `/pages/bummer` dir when pre-rendering routes.

## Status

OPEN FAILOVER

### Solution

Add route rule to `nuxt.conf.ts`:

```js
   routeRules: {
    '/devy': { prerender: true }
    },
```

### Failover

Added config to `nuxt.conf.ts`:

```js
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  }
```
Skips dynamic route pre-rendering.

Ref: [answer](https://www.reddit.com/r/Nuxt/comments/1bnc32g/nuxt_contentdriven_querycontent_giving_404s/.) from [sekerng](https://www.reddit.com/user/sekerng/) on [reddit](https://www.reddit.com/)


## Logs

Vercel Build Log:

```txt 
[log] [nitro]   ├─ /api/_content/query/oWHhTkscLk.1727963953649.json (3ms)
[log] [nitro]   ├─ /_payload.json (2ms)
[log] [nitro]   ├─ /api/_content/navigation/i5pZc4XEtQ.1727963953649.json (6ms)
[log] [nitro] 
Errors prerendering:
[log] [nitro]   ├─ /api/_content/query/0CgxMh2nDn.1727963953649.json (3ms)
  │ ├── Error: [404] Document not found!
  │ └── Linked from /
```

## Ideas

### 1. Past Solution

Removed `:component-tag`, with no corresp component, from /contents/...

### 2. From logs

Comment `navigation`-related code from `/content` components

## Tries

### Commit Prefix

Err-Isolation-nnn: 

### 1. Quarantine All Content Except `cover.md`

#### Commit Message

Err-Isol-001: Quatantine All Content Except /content/cover.md

### 2. From logs

Remove `content`,`navigation`-related code

### Commit Message

Err-Isol-002: Removed `content`,`navigation`-related code

### Action

- Quarantined `/components/ContentNav.vue`
- Commented `<ContentNav />` in `layouts/default.vue` 

### Commit Message

Err-Isol-002-00: Commented query in `/layouts/default`

### Action

Commented:

```tsx
const { data } = await useAsyncData('page-data', () => queryContent('').findOne())
```

in `/layouts/default`

### Action

Commented `<PageTOC />` in /layouts/default.vue
Quarantined '/components/content/PageTOC'

### Commit Message

Err-Isol-002-00: Commented `<PageTOC />` in /layouts/default.vue

### Action

Quarantined:

`/components/DevySidebarNav.vue` 

`/layouts/devyLayout.vue`

`/pages/devy.vue`

`pages/devy/*`

Removed Link from `/components/AppHeader.vue`

Err-Isol-002-00: Quarantined all devies

### ACtion

Quarantined `/layouts/default.vue` 

Uncommented:

`const { data } = await useAsyncData('page-data', () => queryContent('').findOne())`

in `layouts/AppLayout.vue`

Err-Isol-002-02: Quarantined `/layouts/default.vue`

### Action

Kamakazi quarantine

Remaining Files:

`/pages/index.vue` w mods:

```txt
<!-- <NuxtLayout name="app-layout"> -->
<NuxtLayout>
```

`/content/0.cover.md`

Err-Isol-002-03: Kamakazi quarantine

### Action

Quarantine `app.config.ts`

Err-Isol-002-04: Quarantine `app.config.ts`

### Action

Deleted from `/nuxt.config.tx`:

```
    content: {
      documentDriven: true,
    },
```

Err-Isol-002-05: Removed `/content` and its module config in `nuxt.config.ts` 

SUCCESS!!!

## Rewind

Add backs:

### Rewind-000

Commit: Rewind-000: /content/*

### Rewind-001

Commit: Rewind-001: `/layouts/appLayout.vue`

and uncommented `<!-- <NuxtLayout name="app-layout"> -->` in `/pages/index.vue`

### Rewind-002

Commit: Rewind-002: `/components/AppHeader.vue` and `AppFooter.vue`

### Rewind-003

Commit: Rewind-003: `/components/ColorModeswitch.vue`

### Rewind-004

Commit: Rewind-004: `/pages/about.vue` and `devy.vue`

### Rewind-005

Commit: Rewind-005: `/layouts/devyLayout.vue`

### Rewind-006

Commit: Rewind-006: `/pages/devy/*`

Contents:

```bash
/pages/devy/[slug]/1.previews.vue
/pages/devy/[slug]/2.testing.vue
```

### Rewind-007

Commit: Rewind-007: `/components/devy/DevySidebarNav.vue` and `DevyTOC`

### Rewind-008

Commit: Rewind-008: `app.config.ts`

### Rewind-009

Commit: Rewind-009: `/pages/[slug].vue`

### Rewind-010

Commit: Rewind-010: `/layoutsdefault.vue`

### Rewind-011

Commit: Rewind-011: `/components/content/ButtonLink.vue` and `ContentNav.vue`

### Rewind-012

Commit: Rewind-012: `/components/content/ContentSidebarNav.vue` and `ContentTOC`

### Rewind-013

Commit: Rewind-013: `/components/images/IconDarkMode.vue`

### Rewind-014

Commit: Rewind-014: Replace Mock Content TOC with Computed

Can't reproduce error while undoing err-isol quarantines and configs.  Must have fixed it accidentally during rewind.  

CLOSED
