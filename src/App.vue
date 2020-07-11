<template>
  <div
    id="app"
    class="app">

    <app-header
      :user-name="user.username"
      @changeUserName="user.username = 'new name'"
    />

    <main>
      <tab-content></tab-content>
    </main>

    <app-footer>

    </app-footer>
  </div>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import TabContent from '@/components/content/TabContent.vue'

  export default {
    name: 'App',
    components: {
      'app-header' : Header,
      'app-footer' : Footer,
      'tab-content' : TabContent,
    },
    data () {
      return {
        user: {
          username: "Dave"
        }
      }
    }
  }
</script>

<style>
  body {
    background-color: #fefefe;
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
