<script setup lang="ts">
  import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
  const query: QueryBuilderParams = {
    path: '/memo',
    where: {
      layout: 'memo'
    },
    sort: {
      date: -1
    }
  }
</script>

<template>
  <main>
    <h3>Memo</h3>
    <p>
      ブログ記事は書くのに気合を入れる必要があるので、箇条書きかつ殴り書きはメモとして公開することにした。<br>
      もちろんただのメモなので、中身が途中だったりする。
    </p>
    <br>
    <ContentList :query="query" v-slot="{ list }">
      <ul>
        <li v-for="memo in list" :key="memo._path">
          <NuxtLink :to="memo._path">
            {{ memo.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentList>
  </main>
</template>
