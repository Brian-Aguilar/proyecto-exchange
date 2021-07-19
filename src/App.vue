<template>
  <navbar />
  <content />
</template>

<script >
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'

export default {
  components: {
    Navbar,
    Content
  }
}
</script>

<style lang="scss">
@import 'assets/base.scss';

* {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100vh;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  font-size: 16px;
  color: $black;
  background-color: $background;
}

#app {
  height: 100%;
}
</style>
