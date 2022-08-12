<template>
  <main>
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
          <h2>{{ article.title }}</h2>
        </NuxtLink>
        <p>{{ article.date }}</p>
      </div>
    </ContentList>
  </main>
</template>
