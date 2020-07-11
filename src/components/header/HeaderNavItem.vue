<template>
  <li
    :class="{'header-nav-item--large': large}"
    class="header-nav-item"
  >
    <template slot="button-content">
      {{ item.name }}
    </template>

  </li>
</template>

<script>
export default {
  components: {

  },
  props: {
    item: {
      type: String,
      default () {
        return {}
      },
    },
  }
}
</script>

<style lang="scss" scoped>
  .header-nav-item {
    height: 40px;
  }
</style>