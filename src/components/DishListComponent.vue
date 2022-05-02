<template>
	<ul>
		<li v-for="(dish, dish_key) in list" :key="dish" class="dish">
			<button class="delete" @click="deleteDish(dish_key)">X</button>
			<div class="dish-info">
				<p class="name">{{dish["name"]}}</p>
				<p class="total_calories">{{dish["total_calories"]}} Calories</p>
			</div>
			<img class="food" :src="dish['image']" alt="dish">
		</li>
		<p class="meal_calories">Total Calories: {{meal_calories}}</p>
	</ul>
</template>

<script>



export default {
 
	props: ['list', 'meal_calories'],

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