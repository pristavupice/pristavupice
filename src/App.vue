<template>
  <div
    id="app"
    class="app">

    <app-header/>

    <main>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </main>

    <app-footer/>
  </div>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import { store } from './store/store'

  export default {
    name: 'App',
    components: {
      'app-header' : Header,
      'app-footer' : Footer,
    },
    store,
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
  .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
