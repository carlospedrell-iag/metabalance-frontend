<template>
  <h1>Lifestyle</h1>

  <h2>Next Meal</h2>

  <div class="meal">
    <div class="current-day" style="text-transform:capitalize;">{{current_day}}</div>
    <div class="meal-title-lifestyle" style="text-transform:capitalize;">{{next_meal_title}}</div>
      <ul>
          <li  class="laif" v-for="(dish) in next_meal" :key="dish">     
            <img class="picture" src="@/assets/placeholder-square.jpg"> 
            <p class="dish" style="text-transform:capitalize;">{{dish.name}}</p>
          </li>
      </ul>
  </div>
  <div class="editDiet">
    <router-link class="moddieta" to="/modify-diet">Edit Diet</router-link>
  </div>
  
</template>

<script>
/* eslint-disable */
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { getDatabase, ref,  get, child, push as fbPush, remove} from "firebase/database";
import {ref as vueRef} from 'vue';
import {useRouter, useRoute } from 'vue-router';

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
      days: ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
      current_day: '',
      next_meal_title: '',
      dishesList: [],
      next_meal: []
    }

  },
  created(){
    const d = new Date();
    let day = d.getDay();

    this.current_day = this.days[day];

    let hour = d.getHours();

    if((hour < 11) && (hour > 0) ) {
      this.next_meal_title = 'breakfast'
    } else

    if((hour >= 11) && (hour < 15)) {
      this.next_meal_title = 'lunch'
    } else

    if((hour >= 15) && (hour < 19)) {
      this.next_meal_title = 'snack'
    } else 

    if((hour >= 19) && (hour < 25)) {
      this.next_meal_title = 'dinner'
    }


    const db = getDatabase();
		const dbRef = ref(db);
    let userEmail = sessionStorage.getItem('user');
		get(child(dbRef, 'users/' + userEmail + '/schedule/' + this.current_day + '/' + this.next_meal_title + '/dishes' )).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

        this.next_meal = snapshot.val();
				
			} else {
				console.log("No data available");
				this.next_meal = [];
        this.next_meal.push({ name: 'No next meal'})
        console.log(this.next_meal);
			}
		}).catch((error) => {
			console.error(error);
		});
  }

}
</script>

<style>


.current-day{
  margin:.5em;

}
 .day {
    margin: 2em;

    border: 3px solid #ccc;
    border-radius: 4px;
  }

 .picture {

    display: block;
    max-width: 100%;
    border-bottom: 0.1em solid;

  }
  
  p.dish {
    margin: .5em;
  }

  .laif{
    border-radius: 0px;
    border-bottom-left-radius: .5em;
    border-bottom-right-radius: .5em;

  }
  
  .meal-title-lifestyle{
    color:rgb(66, 66, 66);
    font-size: 2em;
  }

.moddieta{
  background-color: #558fc5;
  border: none;
  padding: .5em 1em;
  border-radius: 8px;
  font-size: 1em;
  color: white;
  top: 0;
  margin-top:5em;
  margin-bottom: 2.5em;
  text-decoration: none;
  position: relative;
}

.editDiet{
  margin-bottom: 3em;
}
 

</style>