<template>
	<div class="product-form">
		<div><h4>Add a new product</h4></div>

		<div class="selector">
			<div class="file-button selector-mode" @click="showMode('file')"  :class="{ active: FileModeVisible }"><p class="mode-title">Barcode</p></div>
			<div class="custom-button selector-mode" @click="showMode('custom')" :class="{ active: CustomModeVisible }"><p class="mode-title">Custom</p></div>
			<div class="isbn-button selector-mode" @click="showMode('isbn')" :class="{ active: ISBNModeVisible }"><p class="mode-title">ISBN</p></div>
			
		</div>

		<div class="selector-container">
			<div class="add-product" v-if="CustomModeVisible">
				<form @submit.prevent="addCustomProduct">
					
					<input type="text" placeholder="Name" v-model="productName"/>
					<input type="text" placeholder="Calories per 100g" v-model="productCalories" />
					<input type="submit" class="addProduct" value="Add Product">
				</form>
			</div>

			<label for="file-upload" class="custom-file-upload" v-if="FileModeVisible">
				Upload File
				<i class="fas fa-upload"></i>
			</label>

			<div class="add-product" v-if="ISBNModeVisible">
				<form @submit.prevent="addProductByISBN">
					
					<input id="file-upload" type="file" @change="onFileChange">
					<input type="text" placeholder="ISBN" v-model="productISBN"/>
					<input type="submit" class="addProduct" value="Add Product by ISBN">
				</form>	
			</div>

		</div>
		
		<div class="line"></div>
	</div>

	<div><h4>Product List</h4></div>

	<ul>
	<li v-for="(product, product_key) in myProductList" :key="product" class="product">
		<button class="fas fa-trash-alt" @click="deleteProduct(product_key)"></button>
		<div class="product-info">
			<p class="name">{{product.name}}</p>
			<p class="calories">{{product.calories}} Calories per 100g</p>
		</div>
		<img class="food" :src="product.image" alt="product">
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


function loadProducts(){

	console.log("hoy")
	const db = getDatabase();
	const dbRef = ref(db);
	let userEmail = sessionStorage.getItem('user');
	return new Promise(
		get(child(dbRef, 'users/' + userEmail + '/products')).then((snapshot) => {
		if (snapshot.exists()) {

			return snapshot.val();
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	})
	);
}



export default {
	data() {
		return {
			productList: [],
			isCustomModeVisible: false,
			isFileModeVisible: true,
			isISBNModeVisible: false,
		};
	},
	computed: {
		myProductList: function () {
			return  Object.assign({}, this.productList)
		},

		CustomModeVisible() {return this.isCustomModeVisible},
		FileModeVisible() {return this.isFileModeVisible},
		ISBNModeVisible() {return this.isISBNModeVisible},
	},
	methods: {

		showMode(mode){
			console.log("Showing mode: " + mode);

			this.isFileModeVisible = false
			this.isCustomModeVisible = false
			this.isISBNModeVisible = false

			if(mode == 'file') {this.isFileModeVisible = true}
			if(mode == 'custom') {this.isCustomModeVisible = true}
			if(mode == 'isbn') {this.isISBNModeVisible = true}

		}
	},
	created() {


		const db = getDatabase();
		const dbRef = ref(db);
		let userEmail = sessionStorage.getItem('user');
		get(child(dbRef, 'users/' + userEmail + '/products')).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

				this.productList = snapshot.val();
				
			} else {
				console.log("No data available");
				this.productList = []
			}
		}).catch((error) => {
			console.error(error);
		});





		
	},
	setup() {
		const productName = vueRef("");
		const productCalories = vueRef("");
		const productISBN = vueRef("");


		function changeFile(e){
			const name = e.target.name,
					file = e.target.files[0]
			const hasName = ['file', 'logo','headerImg'].includes(name)
			if(hasName && file) this[name] = file
			else console.log('error')
		}


		function extractBarcode(file){
			var Quagga = require('quagga');

			Quagga.decodeSingle({
				src: file,
				numOfWorkers: 0,  // Needs to be 0 when used within node
				inputStream: {
					size: 800  // restrict input-size to be 800px in width (long-side)
				},
				decoder: {
					readers: ["ean_reader"] // List of active readers
				},
			}, function(result) {
				if(typeof result !== 'undefined') {
					console.log("result", result.codeResult.code);
					getFoodAPI(result.codeResult.code)
				} else {
					console.log("not detected");
					alert("Could not detect barcode")
					return 0
				}
			});
		}

		function getFoodAPI(ISBNcode){
			console.log("ISBN CODE REVIEVED:" + ISBNcode);
			var requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};

			fetch("https://world.openfoodfacts.org/api/v0/product/" + ISBNcode + ".json", requestOptions)
			.then(response => response.text())
			.then(result => processFoodAPI(result))
			.catch(error => console.log('error', error));

		}

		function processFoodAPI(result){
			console.log(result)
			let data = JSON.parse(result)
			let product = {}
			//{"code":"9789681670481","status":0,"status_verbose":"product not found"}
			if (!data["status"]){
				alert("Product not found in Food Database");
				return;
			}

			product["name"] = data["product"]["product_name"];
			if (product["name"] == ""){
				product["name"] = data["product"]["product_name_es"];
			}
			product["calories"] = data['product']['nutriments']['energy-kcal_100g'];
			product["image"] = data['product']['image_front_url']
			console.log(data["product"]["product_name"])
			console.log(data['product']['nutriments']['energy-kcal_100g'])
			console.log(data['product']['image_front_url'])

			const db = getDatabase();
			let userEmail = sessionStorage.getItem('user');
			fbPush(ref(db, 'users/' + userEmail + '/products/'), product);

			alert(product["name"] + " Added to your List!");
			this.$forceUpdate();
		}

		function deleteProduct(product_key){
			console.log("Prod key: " + product_key);

			const db = getDatabase();
			let userEmail = sessionStorage.getItem('user');
			remove(ref(db, 'users/' + userEmail + '/products/' + product_key));

			const dbRef = ref(db);
			
			get(child(dbRef, 'users/' + userEmail + '/products')).then((snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());
					this.productList = snapshot.val();
				} else {
					console.log("No data available");
					this.productList = []
				}
			}).catch((error) => {
				console.error(error);
			});

		}



		function onFileChange(e) {
			console.log(e.target.files[0]);
			let image_file = URL.createObjectURL(e.target.files[0]);
			console.log(image_file);
			extractBarcode(image_file);

			
		}
		
		const addCustomProduct = () => {
			console.log(productName.value);
			console.log(productCalories.value);


			const db = getDatabase();
			let userEmail = sessionStorage.getItem('user');
			fbPush(ref(db, 'users/' + userEmail + '/products/'), {
				name: productName.value,
				calories: productCalories.value,
				image: "https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
			});

		}

		const addProductByISBN = () => {
			console.log(productISBN.value);

			getFoodAPI(productISBN.value);


		}

		return {
			addCustomProduct,
			addProductByISBN,
			deleteProduct,
			productName,
			productCalories,
			productISBN,
			changeFile,
			onFileChange
		}
	}
};
</script>

<style>
div.line{

  border: 0.125em;
  border-color: #CFD8DC;
  margin-top:10px;
  margin-left:15px;
  margin-right:15px;
  border-radius: 1px;
  border-style: solid ;
}

ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
}

li{
  display:inline-block; 
  margin: 5px;
  padding: 5px;
  margin-left:20px;
  margin-right:20px;
  background: #ECEFF1;
  border-radius: 8px;
  border:1px grey solid;
  white-space: break-spaces;
  align-items: center;
  justify-content: center;

}


div.add-product{
	margin-bottom: 2em;
}

input.addProduct{

  position: relative;
  background-color: #6AAE90;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  top: 0;
  margin: 5px;

}

li.product{
  display:flex;
  margin:20px;
  margin-right:2em;
  margin-left:2em;
  border: 1px solid rgb(167, 167, 167);
  border-radius:10px;
  border-width: .1em;
  background: #ECEFF1;
}
div.product-info{
  flex:1;
  display:column;
}

div.product-form{
	padding-left: 2em;
	padding-right: 2em;
}
p.name{
  text-align: center;

}

p.calories{
  text-align:center;
}

img.food{
  flex:2;

  border-radius:10px;
  object-fit: cover;
  width:1em;
  height:6em;

}

button.fa-trash-alt {
    align-self: start;
	background-color: #6AAE90;
	border-radius: 3px;
	color: white;
	padding: 5px 10px;
	text-align: center;
	display: inline-block;
	font-size: 16px;
}

input[type="file"] {
    display: none;
}

.custom-file-upload {
	border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
	background:#6AAE90;
	border-radius: 8px;
	font-size: 12px;
  	color: white;
}

div.selector{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-radius: 9px;

}

div.selector-mode{

	background:#c1e6d6;
	border-radius: 9px;
	padding: .5em 1em .5em 1em;

}

div.selector-container{

	background:#e9e9e9;
	border-radius: 9px;
	padding: 2em;
	height: 10em;
	margin-top: 1em;
}

div.selector-mode.active{
	background:#70b497;
}


p.mode-title{
	margin: auto;
}
</style>