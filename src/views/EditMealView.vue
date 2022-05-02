<template>
    <h1>Edit Meal</h1>
    <h3 style="text-transform:capitalize;">{{day}}, {{meal}}</h3>

    <ul>
        <li v-for="(dish, dish_key) in currentList" :key="dish" class="plat">
            <button class="delete" @click="deleteDish(dish_key)">X</button>
            <div class="infoPlat">
                <p class="name" style="text-transform:capitalize;">{{dish.name}}</p>
                <p class="calories">{{dish.total_calories}} Calories</p>
            </div>
        </li>
	</ul>

    <dish-list :list="currentList" :total_calories="total_calories"/>
    
    <button @click="toggleAddDish" v-if="!showAddDish">+</button>
    <add-dish-component v-if="showAddDish" @add-dish="onAddDish"/>
    <br><br><br>
	<button class="setMeal" @click="setMeal()">Confirm</button>

</template>

<script>

import AddDishComponent from '../components/AddDishComponent.vue'

import { useRoute } from 'vue-router';
/* eslint-disable */
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { getDatabase, ref,  get, child, push as fbPush, remove, update as fbUpdate} from "firebase/database";
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
        return{
            meal_name: '',
            day: '',
            meal: '',
            currentList: [],
            dishesList: [],
            showAddDish: false,
        }
    },
    
    created(){
        const route = useRoute();
        console.log(route.query.name);
        let day_meal = route.query.name.split('_');
        this.day = day_meal[0];
        this.meal = day_meal[1];


        const db = getDatabase();
		const dbRef = ref(db);
		get(child(dbRef, 'users/carlos/schedule/' + this.day + '/' + this.meal + '/dishes')).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

				this.currentList = this.snapshotToArray(snapshot);

			} else {
				console.log("No data available");
				this.currentList = []
			}
		}).catch((error) => {
			console.error(error);
		});

        get(child(dbRef, 'users/carlos/dishes')).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

				this.dishesList = this.snapshotToArray(snapshot);
				
			} else {
				console.log("No data available");
				this.dishesList = []
			}
		}).catch((error) => {
			console.error(error);
		});

    },

    methods: {
        toggleAddDish () {
            this.showAddDish = !this.showAddDish;
        },
        onAddDish(dish_key, dish_name, dish_total_calories){
            console.log("CreateDish Recieved Dish: " + dish_name + "Total Calories: " + dish_total_calories);
            let dish = {};
            dish["name"] = dish_name
            dish["dish_key"] = dish_key;
            dish["total_calories"] = dish_total_calories;


            this.currentList.push(dish)

  
            this.toggleAddDish()
        },
        setMeal(){

            console.log("Setting Meal");
            
            const db = getDatabase();
			fbUpdate(ref(db, 'users/carlos/schedule/' + this.day + '/' + this.meal ), {
                dishes: this.currentList
            });
            this.$router.push('modify-diet');     
        },

        deleteDish(dish_key) {
            console.log("Deleting, Dish key: " + dish_key);
			const db = getDatabase();
			remove(ref(db, 'users/carlos/schedule/' + this.day + '/' + this.meal + '/dishes/' + dish_key ));

			const dbRef = ref(db);
			get(child(dbRef, 'users/carlos/dishes')).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());

                    this.dishesList = this.snapshotToArray(snapshot);
                    window.location.reload();
                    
                } else {
                    console.log("No data available");
                    this.dishesList = []
                }
            }).catch((error) => {
                console.error(error);
            });
        },

        snapshotToArray(snapshot) {
            var returnArr = [];

            snapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;

                returnArr.push(item);
            });

            return returnArr;
        },
    },

    components: {
        AddDishComponent
    }

}
</script>

<style>

</style>