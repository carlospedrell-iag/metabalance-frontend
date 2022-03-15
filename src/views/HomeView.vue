<template>

<h2>Welcome to Metabalance</h2>
   


  <product-list/>
  <button class="logout" @click="Logout">Logout</button>
</template>

<script>

import { ref, onBeforeMount } from 'vue';

import firebase from 'firebase/compat/app';

import ProductList from '../components/ProductList.vue';

export default {
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
    ProductList
  }
}
</script>

<style>

button.logout{

  position: relative;
  background-color: #558fc5;
  border: none;
  padding: 15px 32px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  top: 0;

}

</style>
