<template>
<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="origin-container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-800" v-for="(post, i) in posts" :key="i" 
    :class="{ 'border-t-2 border-gray-800': i != 0 }">
      <nuxt-link :to="'/posts/'+post.slug">
        <Card :post="post"/>
      </nuxt-link>
    </div>
  </div>
</section>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  async asyncData ({ $content, params }) {
    const posts = await $content('posts', { deep: true }).sortBy('date', 'desc').fetch()
    return { posts }
  }
}
</script>
