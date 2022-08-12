<template>
  <main>
    <h4>(2022/08/12) <br> 記事以降作業中に付き、画像が表示されない状態となっています。</h4>
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
