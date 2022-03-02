<template>

<h2>Welcome to Metabalance</h2>

  <div class="home">

  <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';

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
  }
}
</script>
