<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
    // created() {
    //     this.setViewport();
    // },
    // methods: {
    //     setViewport: function() {
    //         let changeWindowSize = 375
    //         let viewportContent = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
    //         if (window.innerWidth < changeWindowSize ) {
    //             viewportContent = "width=375,user-scalable=no,viewport-fit=cover"
    //         }
    //         document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent)
    //     }
    // }
}
</script>

<style>
.origin-container {
  width: 70%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
	.origin-container {
    width: 100%;
  }
}

@media screen and (min-width: 769px) {
	.origin-container {
    width: 50%;
  }
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
