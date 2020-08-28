<template>
    <div class="header-nav-bar">
        <header-nav-item
        v-for="menuItem in menuItems"
        :item="menuItem"
        :key="menuItem.name"
        />
    </div>
</template>

<script>
import HeaderNavItem from './HeaderNavItem.vue'

  export default {
    components: {
      HeaderNavItem,
    },

    data() {
      return {
        menuItems: [
          { name: 'Úvod', url: "Uvod"},
          { name: 'Nabídka', url: "Nabidka"},
          { name: 'Fotogalerie', url: "Fotogalerie"},
          { name: 'O nás', url: "Onas"},
          { name: 'Kontakty', url: "Kontakty"}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.header-nav-bar {
    position: middle;
    display: inline;
    align-content: center;
    text-align: center;
    color:black;
  }
</style>

