<template>
  <div class="img">
    <img class="recipe-Image" src="@/assets/arros.jpg">
    <h2>Arròs integral amb verdures</h2>
  </div>
  <div class="mealInfo">
    <h3>Informació nutricional</h3>
    <table>
        <tr>
            <th>Calories:</th>
            <th>84 Kcal/100g</th>
        </tr>
        <tr>
            <th>Proteines:</th>
            <th>2,2g</th>
        </tr>
        <tr>
            <th>Carbohidrats:</th>
            <th>15,1g</th>
        </tr>
        <tr>
            <th>Greixos:</th>
            <th> 1g </th>
        </tr>
    </table>

  </div>
  <div class="ingredients">
    <h3>Ingredients</h3>
    <ul>
        <li>2 Pastanagues</li>
        <li>1 Puerro</li>
        <li>1 Litre d'aigua / Caldo de verdures</li>
        <li>Un pols de sal</li>
        <li>300g d'arros integral</li>
        <li>50g d'espinacs</li>
        <li>1 Tomàquet</li>
        <li>2 Dents d'all</li>
        <li>1 raig d'oli</li>
        <li>1 llimona</li> 
    </ul>
  </div>
  <div class="steps">
    <h3>Preparació</h3>
    <p class="steps">
        1- Et ipsam ducimus reiciendis ut minima nihil blanditiis. Quia modi error nobis rem. Necessitatibus cumque neque animi et voluptas necessitatibus. Voluptatum deserunt enim dolores dignissimos et. Repellat quaerat vero nemo quae quia qui odit reiciendis.
        <br><br>
        2- Totam non deleniti natus dicta eum a perferendis autem. Et soluta eum in omnis fugiat quis. Ad sint rem ut necessitatibus eveniet perspiciatis soluta dolore. Maiores facilis fugiat enim molestias atque quia. Modi ullam et voluptatem.
        <br><br>
        3- Odit cupiditate fuga aut et nihil qui qui. Ipsa ipsam illum ipsum dolorem porro. Praesentium non at iusto facere. Et magnam architecto culpa pariatur. Nisi placeat officiis provident aspernatur a. Saepe eum facilis voluptas velit quibusdam dolor optio.
        <br><br>
        4- Atque voluptate ea amet. Repellat harum maxime voluptatem et voluptas. Tempora ducimus voluptatibus iste eaque officia blanditiis. Nisi rerum quia modi cumque praesentium aperiam.
        <br><br>
        5- Accusantium neque ducimus sed officiis nisi labore sapiente. Sit quia qui reiciendis tempore dolores. Ut autem odio et aspernatur voluptatem incidunt.
    </p>
  </div>
</template>

<script>
</script>

<style>

div.img {

    width: 100%;

}

img.recipe-Image{

    width: 100%
}

div.mealInfo{

    display: flex;
    flex-direction: column;
    justify-content: center;

    border: 0.1em solid rgb(150, 150, 150);
    border-width: .1em;
    background: #E0E0E0;
    margin-bottom:1em;

}

div.steps {

    margin: 1.5em;


}

table{

    margin:1em;

}

tr{

    padding:1em;
    margin:1em;

}

p.steps{

    padding: 1em;
    text-align:justify;

}

</style>