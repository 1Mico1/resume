<template>
  <div id="app">
    <Resume />
  </div>
</template>

<script>
import Resume from './components/Resume.vue'

export default {
  components: { Resume }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

#app {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}
</style>