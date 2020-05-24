<template>
  <div
    id="app"
    class="app">

    <app-header>

    </app-header>

    <main>
      app body
    </main>

    <app-footer>

    </app-footer>
  </div>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'

  export default {
    name: 'App',
    components: {
      'app-header' : Header,
      'app-footer' : Footer
    }
  }
</script>

<style>
  body {
    background-color: rgb(137, 145, 151);
    color: #fefefe;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 2rem;
    position: relative;
  }
  th, td {
    padding: 5px;
    border: 1px solid #fefefe;
    text-align: center;
  }
</style>
