<template>
    <div><h2>Create Dish</h2></div>
    <div class="dish-form">
		<div>
			<form class="insertName" @submit.prevent="addCustomProduct">
				<input type="text" placeholder="Name" v-model="dishName"/>

			</form>
		</div>
        <div><h4>Ingredients</h4></div>
        <div class ="create-dish">
            <button class="add-product" @click="toggleAddProduct" v-if="!showAddProduct">Add Product</button>
            <add-product-component v-if="showAddProduct" @add-product="onAddProduct"/>
            
            <div class="line"></div>

            <product-list :list="currentList" :total_calories="total_calories"/>

            <button class="createDish" @click="createDish()">Create Dish</button>
        </div>
	</div>
</template>

<script>

import ProductList from '../components/ProductList.vue';
import AddProductComponent from '../components/AddProductComponent.vue'
import GlobalProductList from '../components/GlobalProductList.vue';

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


export default {
    data(){
        return {
			showAddProduct: false,
            showCreateProduct: false,
            dishName: "",
            currentList: [],
            total_calories: 0,
		};
    },
    methods: {
        toggleAddProduct () {
            this.showAddProduct = !this.showAddProduct;
        },

        toggleCreateProduct () {
            this.showCreateProduct = !this.showCreateProduct;
        },

        onAddProduct(product_key, product_name, calories, quantity, image){
            console.log("CreateDish Recieved Product: " + product_name + " Quantity: " + quantity + " Calories: " + calories);
            let product = {};
            product["name"] = product_name
            product["product_key"] = product_key;
            product["quantity"] = quantity;
            product["calories"] = calories;
            product["image"] = image;


            this.currentList.push(product)

         
            this.total_calories += (product["quantity"] * product["calories"]) / 100;
  
            this.toggleAddProduct()
        },
        createDish(){

            if (this.dishName === ""){
                console.log("NO NAME")
                alert("Please name your dish.");
                return;
            }
            console.log(this.currentList)
            if (this.currentList.length == 0) {
                console.log("NO dishes")
                alert("Please add products to your dish.");
                return;
            }
            console.log("Creating Dish, Name: " + this.dishName);
            
            const db = getDatabase();
            let userEmail = sessionStorage.getItem('user');
			fbPush(ref(db, 'users/' + userEmail + '/dishes/'), {
				name: this.dishName,
				total_calories: this.total_calories,
				products: this.currentList
			});
            this.$router.push('dishes');     
        }
    },

    components: { 
        ProductList,
        AddProductComponent,
        GlobalProductList
    },

}
</script>

<style>

.dish-form{
    display:column;
}

.insertName{
    display:flex;
	margin:20px;
	margin-right:2em;
	margin-left:2em;
}

button.createDish{
    align-self: center;
	background-color: #6AAE90;
	border-radius: 0.4em;
	color: white;
	padding: 0.6em 1em;
	text-align: center;
	display: inline-block;
	font-size: 16px;
    border: none;
    margin-bottom: 3em;
}

button.add-product{
    align-self: center;
	background-color: #6AAE90;
	border-radius: 1px;
	color: white;
	padding: 0.6em 1em;;
	text-align: center;
	display: inline-block;
	font-size: 16px;
    border-radius: 0.4em;

}

.create-dish{
    display: block;
    align-self: center;
}

</style>