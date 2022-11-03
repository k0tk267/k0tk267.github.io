<template>
  <main>
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
          <h3>{{ article.title }}</h3>
        </NuxtLink>
        <span>{{ String(article.date).substr(0, 10) }}</span>
      </div>
    </ContentList>
  </main>
</template>
