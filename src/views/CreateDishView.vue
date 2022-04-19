<template>
    <div class="dish-form">
		<div><h4>Create Dish</h4></div>
		<div class="add-product">
			<form @submit.prevent="addCustomProduct">
				<input type="text" placeholder="Name" v-model="dishName"/>

			</form>
		</div>
        <div><h4>Ingredients</h4></div>

        <product-list :list="currentList" :total_calories="total_calories"/>
        
        <button @click="toggleAddProduct" v-if="!showAddProduct">+</button>
        <add-product-component v-if="showAddProduct" @add-product="onAddProduct"/>
		<div class="line"></div>



        <button class="createDish" @click="createDish()">Create Dish</button>
	</div>
</template>

<script>

import ProductList from '../components/ProductList.vue';
import AddProductComponent from '../components/AddProductComponent.vue'

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
            dishName: "",
            currentList: [],
            total_calories: 0,
		};
    },
    methods: {
        toggleAddProduct () {
            this.showAddProduct = !this.showAddProduct;
        },

        onAddProduct(product_key, product_name, calories, quantity){
            console.log("CreateDish Recieved Product: " + product_name + " Quantity: " + quantity + " Calories: " + calories);
            let product = {};
            product["name"] = product_name
            product["product_key"] = product_key;
            product["quantity"] = quantity;
            product["calories"] = calories;


            this.currentList.push(product)

            this.currentList.forEach(element => {
                this.total_calories += (element["quantity"] * element["calories"]) / 100;
            });
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
			fbPush(ref(db, 'users/carlos/dishes/'), {
				name: this.dishName,
				total_calories: this.total_calories,
				products: this.currentList
			});
            this.$router.push('dishes');     
        }
    },

    components: { 
        ProductList,
        AddProductComponent
    },

}
</script>

<style>

</style>