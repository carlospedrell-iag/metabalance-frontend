<template>
	<ul>
		<li v-for="(product, product_key) in list" :key="product" class="product">
			<button class="delete" @click="deleteProduct(product_key)">X</button>
			<div class="product-info">
				<p class="name">{{product.name}}</p>
				<p class="calories">{{product.calories}} Calories per 100g</p>
			</div>
			<img class="food" :src="product.image" alt="product">
		</li>
	</ul>
</template>

<script>


export default {
 
	props: ['list'],

	data() {

	}
}

</script>

<style>

</style>