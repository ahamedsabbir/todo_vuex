<script>
import { RouterView } from 'vue-router';
import BsNav from './components/BsNav.vue'
export default {
  name: 'App',
  data() {
    return {
      //
    }
  },
  components: {
    BsNav
  }
}
</script>

<template>
  <header>
    <BsNav />
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
