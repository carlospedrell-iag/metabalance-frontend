<template>
  <h1>Info</h1>

  <router-link to="/Information"> 
    <div class="info">
    <h3 class="infoTitle">6 consells per tenir una alimentació més saludable</h3>
    <img class="dish" src="@/assets/healthy.jpg"> 
    </div> 
  </router-link>

  <h1>Receptes</h1>

  <router-link to="/recipe">
    <div class="receptes" >
    <h3 class="dishTitle">Arròs integral amb verdures</h3>
    <img class="dish" src="@/assets/arros.jpg">
    </div>
   </router-link>
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
  border-radius: 1em;
  border-width: .1em;
  background: #F5F5F5;
  padding-bottom: 1em;
  
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
  box-shadow: 0 0.2em 0.4em 0 rgba(0, 0, 0, 0.2), 0 0.4em 0.8em 0 rgba(0, 0, 0, 0.19);

}

</style>