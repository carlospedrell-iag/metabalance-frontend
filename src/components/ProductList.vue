<template>
	<ul>
		<li v-for="(product, product_key) in list" :key="product" class="product">
			<button class="fas fa-trash-alt" @click="deleteProduct(product_key)"></button>
			<div class="product-info">
				<p class="name">{{product["name"]}}</p>
				<p class="calories">{{(product["quantity"] * product["calories"]) / 100}} Calories</p>
			</div>
			<img class="food" :src="product['image']" alt="product">
		</li>
		<p class="total_calories">Total Calories: {{total_calories}}</p>
	</ul>
</template>

<script>



export default {
 
	props: ['list', 'total_calories'],

	data() {


        },

	created() {


		
	},
	methods: {

	},
}

</script>

<style>
button.fa-trash-alt{
    align-self: center;
	background-color: #558fc5;
	border-radius: 3px;
	color: white;
	padding: 5px 10px;
	text-align: center;
	display: inline-block;
	font-size: 16px;
	margin-left:2em;
}
</style>