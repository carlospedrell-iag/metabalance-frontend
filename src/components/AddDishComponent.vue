<template>
	<div><h4>Dish List</h4></div>
	<ul>
		<li v-for="(dish, dish_key) in dishList" :key="dish" class="dish">

			<div class="dish-info">
				<p class="name" style="text-transform:capitalize;">{{dish.name}}</p>
				<p class="total_calories">{{dish.total_calories}} Total Calories</p>
			</div>
			<button class="addDish" @click="addDish(dish, dish_key)">+</button>
		</li>
	</ul>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { getDatabase, ref,  get, child, push as fbPush, remove} from "firebase/database";
import {ref as vueRef} from 'vue';

const firebaseConfig = {
	apiKey: "AIzaSyA-L4m63a_KvLtFAitIoO0xrbwE4J-3Y2g",
	authDomain: "pmmii-d7a71.firebaseapp.com",
	databaseURL: "https://pmmii-d7a71-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "pmmii-d7a71",
	storageBucket: "pmmii-d7a71.appspot.com",
	messagingSenderId: "972862324822",
	appId: "1:972862324822:web:719cd91f83f36addd27bf7",
	measurementId: "G-VW02Q6T63P"
	};


firebase.initializeApp(firebaseConfig);
const user = firebase.auth().currentUser;
console.log(user)

let dishList = [];


export default {
	created() {

		const db = getDatabase();
		const dbRef = ref(db);
		get(child(dbRef, `users/carlos/dishes`)).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

				this.dishList = snapshot.val();
				
			} else {
				console.log("No data available");
				this.dishList = ["no","noo"]
			}
		}).catch((error) => {
			console.error(error);
		});

		
	},
	methods: {
		addDish(dish, dish_key){
			console.log("Dish " + dish.name + ", Prod key: " + dish_key);

			this.$emit('add-dish', dish_key, dish.name, dish.total_calories);
			
		}
	},


	data() {
		return {
			dishList: []
		}
	},

}
</script>

<style>

</style>