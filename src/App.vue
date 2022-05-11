<template>
  <header-component v-if="$route.path!=='/login' && $route.path!=='/register'"/>
  <div class="app">
    <router-view />
    
  </div>
  <navigation-component v-if="$route.path!=='/login' && $route.path!=='/register'"/>
</template>

<script>
import { onBeforeMount } from 'vue';
import {useRouter, useRoute } from 'vue-router';
import firebase from 'firebase/compat/app';
import NavigationComponent from './components/NavigationComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';


export default {
  setup() {
    const router = useRouter();
    const route = useRoute();


    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          console.log("No user")
          router.replace('/login');
        } else {

          console.log("Logged in")
          console.log(user)
          console.log(user.email)
          let userEmail  = user.email.replace('.', '');
          sessionStorage.setItem('user', userEmail);
          if (route.path == '/login' || route.path == '/register'){
            router.replace('/');
          }
        }
      });
    });
  },
  components: {
    NavigationComponent,
    HeaderComponent
  },
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

body {
  margin: 0;
  background: white;
  color: rgb(29, 29, 29);
  height: 100%;
  width: 100%;

}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-align: center;
}

div.app{
    width:100%;
    height:100%;
  background: white;
  padding-top: 4em;
  padding-bottom: 4em;
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

div.back{

	background: url(assets/outgenieros_gray.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center center;

}

a {
  color: inherit;
}

.links{
	font-weight: bold;
	color: #1E90FF;

}

@media (max-width : 500px) {

}
</style>
