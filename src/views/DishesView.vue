<template>
  <h1>Dishes</h1>
   <div class="plat">
    <div class="infoPlat">
      <p class="name">Macarrons</p>
      <p class="Calories">Calories: 502</p>
    </div>
    <img class="food" src="@/assets/placeholder-square.jpg">
   </div>
  <div class="plat">
    <div class="infoPlat">
      <p class="name">Entrepà Pernil</p>
      <p class="Calories">Calories: 439</p>
    </div>
    <img class="food" src="@/assets/placeholder-square.jpg">
   </div>
</template>

<script>

</script>

<style>

div.plat{
  display:flex;
  margin:20px;
  margin-right:2em;
  margin-left:2em;


  border: 1px solid rgb(167, 167, 167);
  border-radius:10px;
  border-width: .1em;
  background: #ffffff;
}
div.infoPlat{
  flex:1;
  display:column;
}
p.name{
  text-align: center;

}

p.calories{
  text-align:center;
}

img.food{
  flex:2;
  max-width:30%;
  border-radius:10px;

}

</style>