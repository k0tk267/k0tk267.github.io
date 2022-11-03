<script setup lang="ts">
  import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
  const query: QueryBuilderParams = {
    path: '/posts',
    where: {
      layout: 'article'
    },
    sort: {
      date: -1
    }
  }
</script>

<template>
  <main>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
          <h3>{{ article.title }}</h3>
        </NuxtLink>
        <span>{{ String(article.date).substr(0, 10) }}</span>
      </div>
    </ContentList>
  </main>
</template>
