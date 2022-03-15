<template>
  <h1>Lifestyle</h1>
  <h2>Pròxim Apat</h2>
  <div>
    <img class="dish" src="@/assets/placeholder-square.jpg">
  </div>
  <h2>Calories Extra</h2>
  <div>
     <img class="dish" src="@/assets/placeholder-square.jpg">
  </div>
  <button class="dieta">Modificar Dieta</button>

</template>

<script>
export default {

}
</script>

<style>

button.dieta{

  position: relative;
  background-color: #558fc5;
  border: none;
  padding: 15px 32px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  top: 0;
  margin-top:2em;

}
img.dish{
  height:20%;
  width:50%;
  border-radius:10px;

}

</style>