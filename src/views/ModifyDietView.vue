<template>

  <h1>Diet</h1>

  <div class="day">

    <h2>Monday</h2>

    <div class="meal" @click="editDish('monday_breakfast')">
      <p class="meal-title">Breakfast</p>
      <ul>
        <li v-for="(dish) in schedule.monday.breakfast.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>  
    </div>

    <div class="meal" @click="editDish('monday_lunch')">    
      <p class="meal-title">Lunch</p>
      <ul>
        <li v-for="(dish) in schedule.monday.lunch.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('monday_snack')">  
      <p class="meal-title">Snack</p>
      <ul>
        <li v-for="(dish) in schedule.monday.snack.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('monday_dinner')">  
      <p class="meal-title">Dinner</p>
      <ul>
        <li v-for="(dish) in schedule.monday.dinner.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
      </div>

  </div>
  

  <div class="day">

    <h2>Tuesday</h2>

    <div class="meal" @click="editDish('tuesday_breakfast')">
      <p class="meal-title">Breakfast</p>
      <ul>
        <li v-for="(dish) in schedule.tuesday.breakfast.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>  
    </div>

    <div class="meal" @click="editDish('tuesday_lunch')">    
      <p class="meal-title">Lunch</p>
      <ul>
        <li v-for="(dish) in schedule.tuesday.lunch.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('tuesday_snack')">  
      <p class="meal-title">Snack</p>
      <ul>
        <li v-for="(dish) in schedule.tuesday.snack.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('tuesday_dinner')">  
      <p class="meal-title">Dinner</p>
      <ul>
        <li v-for="(dish) in schedule.tuesday.dinner.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
      </div>
      
  </div>
  

  <div class="day">

    <h2>Wednesday</h2>

    <div class="meal" @click="editDish('wednesday_breakfast')">
      <p class="meal-title">Breakfast</p>
      <ul>
        <li v-for="(dish) in schedule.wednesday.breakfast.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>  
    </div>

    <div class="meal" @click="editDish('wednesday_lunch')">    
      <p class="meal-title">Lunch</p>
      <ul>
        <li v-for="(dish) in schedule.wednesday.lunch.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('wednesday_snack')">  
      <p class="meal-title">Snack</p>
      <ul>
        <li v-for="(dish) in schedule.wednesday.snack.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('wednesday_dinner')">  
      <p class="meal-title">Dinner</p>
      <ul>
        <li v-for="(dish) in schedule.wednesday.dinner.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
      </div>
      
  </div>
  

  <div class="day">

    <h2>Thursday</h2>

    <div class="meal" @click="editDish('thursday_breakfast')">
      <p class="meal-title">Breakfast</p>
      <ul>
        <li v-for="(dish) in schedule.thursday.breakfast.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>  
    </div>

    <div class="meal" @click="editDish('thursday_lunch')">    
      <p class="meal-title">Lunch</p>
      <ul>
        <li v-for="(dish) in schedule.thursday.lunch.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('thursday_snack')">  
      <p class="meal-title">Snack</p>
      <ul>
        <li v-for="(dish) in schedule.thursday.snack.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('thursday_dinner')">  
      <p class="meal-title">Dinner</p>
      <ul>
        <li v-for="(dish) in schedule.thursday.dinner.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
      </div>
      
  </div>
  

  <div class="day">

    <h2>Friday</h2>

    <div class="meal" @click="editDish('friday_breakfast')">
      <p class="meal-title">Breakfast</p>
      <ul>
        <li v-for="(dish) in schedule.friday.breakfast.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>  
    </div>

    <div class="meal" @click="editDish('friday_lunch')">    
      <p class="meal-title">Lunch</p>
      <ul>
        <li v-for="(dish) in schedule.friday.lunch.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('friday_snack')">  
      <p class="meal-title">Snack</p>
      <ul>
        <li v-for="(dish) in schedule.friday.snack.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('friday_dinner')">  
      <p class="meal-title">Dinner</p>
      <ul>
        <li v-for="(dish) in schedule.friday.dinner.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
      </div>
      
  </div>
  

  <div class="day">

    <h2>Saturday</h2>

    <div class="meal" @click="editDish('saturday_breakfast')">
      <p class="meal-title">Breakfast</p>
      <ul>
        <li v-for="(dish) in schedule.saturday.breakfast.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>  
    </div>

    <div class="meal" @click="editDish('saturday_lunch')">    
      <p class="meal-title">Lunch</p>
      <ul>
        <li v-for="(dish) in schedule.saturday.lunch.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('saturday_snack')">  
      <p class="meal-title">Snack</p>
      <ul>
        <li v-for="(dish) in schedule.saturday.snack.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('saturday_dinner')">  
      <p class="meal-title">Dinner</p>
      <ul>
        <li v-for="(dish) in schedule.saturday.dinner.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
      </div>
      
  </div>
  

  <div class="day">

    <h2>Sunday</h2>

    <div class="meal" @click="editDish('sunday_breakfast')">
      <p class="meal-title">Breakfast</p>
      <ul>
        <li v-for="(dish) in schedule.sunday.breakfast.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>  
    </div>

    <div class="meal" @click="editDish('sunday_lunch')">    
      <p class="meal-title">Lunch</p>
      <ul>
        <li v-for="(dish) in schedule.sunday.lunch.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('sunday_snack')">  
      <p class="meal-title">Snack</p>
      <ul>
        <li v-for="(dish) in schedule.sunday.snack.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
    </div>

    <div class="meal" @click="editDish('sunday_dinner')">  
      <p class="meal-title">Dinner</p>
      <ul>
        <li v-for="(dish) in schedule.sunday.dinner.dishes" :key="dish">      
          <p class="dish">{{dish}}</p>
        </li>
      </ul>
      </div>
      
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
            schedule: []
		};
    },
	created() {


		const db = getDatabase();
		const dbRef = ref(db);
		get(child(dbRef, `users/carlos/schedule`)).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());

				this.schedule = snapshot.val();
				
			} else {
				console.log("No data available");
				this.schedule = []
			}
		}).catch((error) => {
			console.error(error);
		});
		
	},
    methods: {
      editDish(dish_key) {
        console.log("Edit Dish:" + dish_key);
      }
    },


}
</script>

<style>
 
  li {
    padding: 0em;
    margin-right: 2em;
    margin-left: 2em;
    
  }

  .day {
    margin: 2em;

    border: 3px solid #ccc;
    border-radius: 4px;
  }

  .meal {
    margin: 2em;
    margin-left: 2em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  p.dish {
    margin: .5em;
  }

  .meal-title{
    color:rgb(66, 66, 66);
    font-size: .8em;
  }

</style>