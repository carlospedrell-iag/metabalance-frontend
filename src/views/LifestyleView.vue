<template>
  <h1>Lifestyle</h1>
  <h2>Pròxim Apat</h2>
  <div>
    <img class="dish" src="@/assets/placeholder-square.jpg">
  </div>

  <router-link class="moddieta" to="/modify-diet">Modificar Dieta</router-link>

</template>

<script>
export default {

}
</script>

<style>

.moddieta{

  position: relative;
  background-color: #558fc5;
  border: none;
  padding: 15px 32px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  top: 0;
  margin-top:2em;
  text-decoration: none;
}
img.dish{
  height:20%;
  width:50%;
  border-radius:10px;

}

</style>