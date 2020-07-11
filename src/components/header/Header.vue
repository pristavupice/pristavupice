<template>
    <div>
        <header>
            <img id ="panorama" class ="panorama" src="@/assets/pristav-panorama2.jpg"/>
        </header>

        <!-- {{userName}} -->

        <!-- <button @click='changeUserName()'>Change UserName</button> -->
    </div>
</template>

<script>

  export default {

    props: {
      userName: String
    },

    methods: {
      changeUserName () {
        this.$emit('changeUserName')
      }
    },

    mounted () {
      console.log(this.$store.state.user.username);
    },
  }

  
</script>

<style>
  .panorama {
    width: 100%;
  }
</style>