<template>

  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import {useRouter, useRoute } from 'vue-router';
import firebase from 'firebase/compat/app';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else if (route.path == '/login' || route.path == '/register'){
          router.replace('/');
        }
      });
    });
  }
}
</script>

<style lang="scss">
body {

  background: #ffffff;
  color: rgb(29, 29, 29);
  position: sticky;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* Style inputs */
  input[type=text], input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}



/* Add a background color to the submit button on mouse-over */
input[type=submit]:hover {
  background-color: #558fc5;
}

div.login, div.register{
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2em;
  padding-right: 2em;
  
}

div.home {
display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2em;
  padding-right: 2em;
  width: 19em;

}

a {
  color: inherit;
}

@media (max-width : 500px) {
    body {
      position: fixed;
    }
}
</style>
