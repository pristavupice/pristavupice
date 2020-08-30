<template>
  <div style="background-color:#D3D3D3">
    <h1 style="text-align:center; font-size: xx-large; font-family: Courier; padding: 10px 0px 10px 0px; color:#593C1F">
      Vítejte na stránkách Přístavu Úpice
    </h1>

    

    <div>
      <p class="leftblock">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce nibh. 
        Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. 
        Maecenas libero. Nullam at arcu a est sollicitudin euismod. Sed elit dui, pellentesque a, 
        faucibus vel, interdum nec, diam. Fusce nibh. Nullam faucibus mi quis velit. Etiam ligula pede, 
        sagittis quis, interdum ultricies, scelerisque eu. Morbi imperdiet, mauris ac auctor dictum, 
        nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Sed ac dolor sit amet purus 
        malesuada congue. Curabitur bibendum justo non orci. Etiam dui sem, fermentum vitae, sagittis 
        id, malesuada in, quam. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. 
        Fusce consectetuer risus a nunc. Nulla pulvinar eleifend sem. Nullam feugiat, turpis at pulvinar 
        vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.
      </p>
      <img id ="kavaPristav" style="float:right; height: 15%; width:15%; padding: 2em 3em 0em 1em;" src="@/assets/kavovnikPristav.png"/>
      <div style="color: black">
        <p> Chosen tab is {{ $store.getters.activeTab }}</p>
    </div>
    
    </div>

    <div>
      <p class="rightblock">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce nibh. 
        Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. 
        Maecenas libero. Nullam at arcu a est sollicitudin euismod. Sed elit dui, pellentesque a, 
        faucibus vel, interdum nec, diam. Fusce nibh. Nullam faucibus mi quis velit. Etiam ligula pede, 
        sagittis quis, interdum ultricies, scelerisque eu. Morbi imperdiet, mauris ac auctor dictum, 
        nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Sed ac dolor sit amet purus 
        malesuada congue. Curabitur bibendum justo non orci. Etiam dui sem, fermentum vitae, sagittis 
        id, malesuada in, quam. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. 
        Fusce consectetuer risus a nunc. Nulla pulvinar eleifend sem. Nullam feugiat, turpis at pulvinar 
        vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.
      </p>
      <img id ="kavaPristav" style="float:left; height: 20%; width:20%; padding: 1.5em 1em 0em 1em;" src="@/assets/kavaPristav.png"/>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.leftblock {
  color: black;
  align-content: center;
  font-size: medium;
  max-width: 50em;
  padding: 3em 3em 0em 3em;
  float: left;
}

.rightblock {
  color: black;
  align-content: center;
  font-size: medium;
  max-width: 50em;
  padding: 3em;
  float: right;
}

</style>