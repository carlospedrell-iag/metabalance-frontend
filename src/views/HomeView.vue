<template>

<h2>Welcome to Metabalance</h2>
   


  <global-product-list/>
  <p class="signed-in-as">Signed in as {{ userEmail }}</p>
  <button class="logout" @click="Logout">Logout</button>
</template>

<script>

import { ref, onBeforeMount } from 'vue';

import firebase from 'firebase/compat/app';

import GlobalProductList from '../components/GlobalProductList.vue';

export default {
  data() {
		return {
			userEmail: ''
		};
	},
  created() {
    this.userEmail  = sessionStorage.getItem('user');
  },
  setup() {

    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed out"))
        .catch(err => alert(err.message));
    }

    return {
      name,
      Logout
    }
  },
  components : {
    GlobalProductList
  }
}
</script>

<style>

button.logout{

  position: relative;
  background-color: #6AAE90;
  border: none;
  padding: 15px 32px;
  margin-bottom: 2.5em;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  top: 0;

}

p.signed-in-as {
  color: gray;
}

</style>
