<template>
  <ul class="header-nav-item">

    <router-link
      :to="`/${ item.url }`"
      @click="tabSelected(item.url)"
      >
      {{ item.name }}
    </router-link>

  </ul>
</template>

<script>
export default {
  components: {

  },

  props: {
    item: {
      type: Object,
      default () {
        return {}
      },
    },
  },

  computed: {
    isTabActive: function() {
      return this.$store.activeTab === "Fotogalerie"
    }
  },

  methods: {
    defaultClickHandler(url) {
      this.$emit('click')
      if(url==='/home') {
        this.dispatchEvent('Home')
      }
    },
    tabSelected(url){
      this.$store.commit('change',url)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-nav-item {
    display: inline-block;
    text-align: center;
    margin: 0 auto;
  }

  .header-nav-item a {
    display: inline;
    text-decoration: none;
    font-weight: 500;
    font-size: .8em;
    color: grey;

    &:hover,
    &:active {
      outline: none;
      text-decoration: underline !important;
    }
  }
</style>