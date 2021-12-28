<template>
<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="origin-container px-5 py-24 mx-auto">
    <div class="blog-title text-center">
      <img class="mx-auto w-full" :src="post.cover" alt="Background Image">
      <time>{{ post.date | moment }}</time>
      <h1>{{ post.title }}</h1>
    </div>
    <nuxt-content :document="post" />
  </div>
</section>
</template>

<script>
import moment from "moment";
export default {
  filters: {
    moment(date) {
      return moment(date).format('YYYY/MM/DD');
    }
  },
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  },
  head() {
    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://kmly267.github.io/posts/${this.post.id}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.post.title}`
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: this.post.cover
        // },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'OGP image'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@kmly267' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `${this.post.title}`
        },
        { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' }
      ]
    }
  }
}
</script>

<style>
.blog-title h1{
  font-size: 2.5rem;
  line-height: 3.4rem;
}
</style>