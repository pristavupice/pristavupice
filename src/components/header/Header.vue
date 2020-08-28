<template>
    <div>
        <header class="header-style">
            <img id ="panorama" class ="panorama" src="@/assets/pristav-panorama2.jpg"/>
            <br/>
            <header-nav-bar/>
        </header>
    </div>
</template>

<script>
  import HeaderNavBar from './HeaderNavBar.vue'

  export default {
    components: {
      HeaderNavBar,
    },
  }

</script>

<style>
  .panorama {
    width: 100%;
  }
  
  .header-style {
    text-align: center;
  }
</style>