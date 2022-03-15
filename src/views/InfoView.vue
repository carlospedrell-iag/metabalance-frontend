<template>
  <h1>Info</h1>
  <div class="info">
    <h3 class="infoTitle">6 consells per tenir una alimentació més saludable</h3>
    <img class="dish" src="@/assets/placeholder-square.jpg">
  </div>
  <h1>Receptes</h1>
  <div class="receptes">
    <h3 class="dishTitle">Arròs integral amb verdures</h3>
    <img class="dish" src="@/assets/placeholder-square.jpg">
  </div>
</template>

<script>
export default {

}
</script>

<style>
div.info,div.receptes{

  margin:2em;;
  margin-left:2em;
  margin-right:2em;
  background: #F5F5F5;
  border-radius:10px;
  border: 1px solid DarkSlateGrey;
  padding-bottom:10px;
}

.dishTitle,.infoTitle{

  white-space:break-spaces;
  text-align:center;
  margin-left:10px;
  margin-right:10px;

}

</style>