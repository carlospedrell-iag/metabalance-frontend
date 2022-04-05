<template>
  <h1>Info</h1>
  <div class="info">
    <h3 class="infoTitle">6 consells per tenir una alimentació més saludable</h3>
    <img class="dish" src="@/assets/healthy.jpg">
  </div>
  <h1>Receptes</h1>
  <div class="receptes" >
    <h3 class="dishTitle">Arròs integral amb verdures</h3>
    <router-link to="/recipe"> <img class="dish" src="@/assets/arros.jpg"> </router-link>
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
  border: 1px solid rgb(167, 167, 167);
  border-radius:10px;
  border-width: .1em;
  background: #ffffff;
  padding-bottom:10px;
}

.dishTitle,.infoTitle{

  white-space:break-spaces;
  text-align:center;
  margin-left:10px;
  margin-right:10px;

}

img.dish{

  width: 80%;
  height: 80%;

}

</style>