<template>
	<div><h1>Dishes</h1></div>
		<ul>
			<li v-for="(dish, dish_key) in dishesList" :key="dish" class="plat">
				<button class="fas fa-trash-alt" @click="deleteDish(dish_key)"></button>
					<div class="infoPlat">
						<p class="name" style="text-transform:capitalize;">{{dish.name}}</p>
						<p class="calories">{{dish.total_calories}} Calories</p>
					</div>
			</li>
		</ul>
	<div class="add">
		<router-link class="link" to="/create-dish"><i class="fas fa-plus" :class="{ active: $route.path=='/' }"></i></router-link>
	</div>
	

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

export default {
    data(){
        return {
            dishesList: []
		};
    },
	created() {


		const db = getDatabase();
		const dbRef = ref(db);
		let userEmail = sessionStorage.getItem('user');
		get(child(dbRef, 'users/' + userEmail + '/dishes')).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

				this.dishesList = snapshot.val();
				
			} else {
				console.log("No data available");
				this.dishesList = []
			}
		}).catch((error) => {
			console.error(error);
		});
		
	},
    methods: {
        deleteDish(dish_key) {
            console.log("Deleting, Dish key: " + dish_key);
			const db = getDatabase();
			let userEmail = sessionStorage.getItem('user');
			remove(ref(db, 'users/' + userEmail + '/dishes/' + dish_key));

			const dbRef = ref(db);
			get(child(dbRef, 'users/' + userEmail + '/dishes')).then((snapshot) => {
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

			window.location.reload();
        }
    },


}

</script>

<style>

.plat{
	display:flex;
	margin:20px;
	margin-right:2em;
	margin-left:2em;


	border: 1px solid rgb(167, 167, 167);
	border-radius:10px;
	border-width: .1em;
	background: #ffffff;
}
.infoPlat{
	display:column;
	align-content: center;
	flex:1;
}

.name{
	text-align: center;
	font-weight: bold;
	font-size: 1.2em;
}

.calories{
	text-align:center;
}

.food{
	flex:2;
	max-width:30%;
	border-radius:10px;

}

button.fa-trash-alt {
    align-self: center;
	background-color: #6AAE90;
	border: 0;
	border-bottom: solid .2em #467561;
	border-radius: 3px;
	color: white;
	padding: 5px 10px;
	text-align: center;
	display: inline-block;
	font-size: 16px;
	margin-left:2em;
}

i.fas-fa-plus{

 margin-bottom: 1em;

}

.add{
	 margin-bottom: 3em;
}

</style>