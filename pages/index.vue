<template>
<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="origin-container px-5 mx-auto">
    <nuxt-content :document="home" />
  </div>
</section>
</template>

<script>
import Vue from 'vue'
export default{
  async asyncData ({ $content, params }) {
    const home = await $content('index').fetch()
    return { home }
  }
}
</script>

<style>
.nuxt-content h1 {
  margin: 20px 0px;
  line-height: 3.0rem;
  font-size: 2.0rem;
}
.nuxt-content h2 {
  border-bottom: solid 2px rgba(99, 179, 237, var(--text-opacity));
  margin: 20px 0px;
  line-height: 3.0rem;
  font-size: 1.5rem;
}

.nuxt-content h3{
  border-bottom: solid 0.5px grey;
  margin: 20px 0px;
}

.nuxt-content p{
  line-height: 2em;
}

.nuxt-content li{
  list-style-type: disc;
  line-height: 2em;
}

.nuxt-content ul{
  padding-left: 1.25rem;
  /* padding-bottom: 20px; */
}

.nuxt-content a{
  color: rgb(99, 179, 237);
  font-weight: bolder;
  padding-bottom: 5px 0px;
}

.nuxt-content blockquote{
  position:relative;
  border-left:3px solid rgb(99, 179, 237);
  padding-left:10px;
  margin: 10px 0px 10px 20px; 
}
</style>