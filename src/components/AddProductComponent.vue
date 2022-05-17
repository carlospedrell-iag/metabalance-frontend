<template>
	<div><h4>Product List</h4></div>
	<ul>
		<li v-for="(product, product_key) in productList" :key="product" class="product">

			<div class="product-info">
				<p class="name">{{product.name}}</p>
				<p class="name">{{product.calories}} calories per 100g</p>
			</div>
			<img class="food" :src="product['image']" alt="product">
			<button class="addProduct" @click="addProduct(product, product_key)">Add</button>
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

let productList = [];


export default {
	created() {

		const db = getDatabase();
		const dbRef = ref(db);
		get(child(dbRef, `users/carlos/products`)).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

				this.productList = snapshot.val();
				
			} else {
				console.log("No data available");
				this.productList = ["no","noo"]
			}
		}).catch((error) => {
			console.error(error);
		});
		
	},
	methods: {
		addProduct(product, product_key){
			console.log("Product " + product.name + ", Prod key: " + product_key);
			var quantity = (function ask() {
  var n = prompt('Number from 1 to 100:');
  return isNaN(n) || +n > 100 || +n < 1 ? ask() : n;
}());

			this.$emit('add-product', product_key, product.name, product.calories, quantity , product.image);
			
		}
	},


	data() {
		return {
			productList: []
		}
	},

}
</script>

<style>

button.addProduct{
	align-self: center;
	background-color: #6AAE90;
	border-radius: 3px;
	color: white;
	padding: 5px 10px;
	text-align: center;
	display: inline-block;
	font-size: 16px;
	margin-left:auto;
	margin-right:auto;
}

</style>