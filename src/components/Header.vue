<template>
  <header>
    <h1>k0tk267.github.io</h1>
    <nav>
      <ul>
        <li v-for="navItem in navItems">
          <NuxtLink :to="navItem.link">
            {{ navItem.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      navItems: [
        { name: 'Home', link: '/'},
        { name: 'Blog', link: '/posts'},
        { name: 'Memo', link: '/memo'},
        { name: 'Links', link: '/links'},
        { name: 'Contact', link: '/contact'},
      ]
    }
  }
});
</script>
