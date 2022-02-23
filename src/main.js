import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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



createApp(App).use(router).mount('#app')
