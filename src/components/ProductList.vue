<template>
  <div><h4>Product List</h4></div>

  <ul>
    <li v-for="product in productList" :key="product">{{product.name}}  --  Calories: {{product.calories}}</li>
  </ul>

  <div class="add-product">
		<form @submit.prevent="addProduct">
			<input type="text" placeholder="Name" v-model="productName"/>
			<input type="text" placeholder="Calories" v-model="productCalories" />
			<input type="submit" value="addProduct">
		</form>
	</div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { getDatabase, ref,  get, child, push} from "firebase/database";
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

const db = getDatabase();
const dbRef = ref(db);

let productList = ["AAS"];

get(child(dbRef, `users/carlos/products`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    productList = snapshot.val()
  } else {
    console.log("No data available");
    productList = ["no","noo"]
  }
}).catch((error) => {
  console.error(error);
});



export default {
    data() {
        return {
            productList
        };
    },
    created() {
      const db = getDatabase();
      const dbRef = ref(db);
      get(child(dbRef, `users/carlos/products`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          this.productList = snapshot.val()
        } else {
          console.log("No data available");
          this.productList = ["no","noo"]
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    setup() {
      const productName = vueRef("");
      const productCalories = vueRef("");

      const addProduct = () => {
        console.log(productName.value);
        console.log(productCalories.value);


        const db = getDatabase();
        push(ref(db, 'users/carlos/products/'), {
          name: productName.value,
          calories: productCalories.value
        });


        
      }

      return {
        addProduct,
        productName,
        productCalories
		  }
    }
};
</script>

<style>
ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
}
</style>