<template>
	<ul>
		<li v-for="(product, product_key) in list" :key="product" class="product">
			<button class="delete" @click="deleteProduct(product_key)">X</button>
			<div class="product-info">
				<p class="name">{{product["name"]}}</p>
				<p class="calories">{{(product["quantity"] * product["calories"]) / 100}} Calories</p>
			</div>
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

</style>