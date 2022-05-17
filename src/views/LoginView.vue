<template>
	<br><br><br>
	<div class = "back" >
		<h1 class="login">Login</h1>
		<div class="login">
			<form @submit.prevent="Login">
				<input type="text" placeholder="Email" v-model="email"/>
				<input type="password" placeholder="Password" v-model="password" />
				<input class="login" type="submit" value="Login">
				<p class="login">Need an account? <router-link class="links" to='/register'> Register Here </router-link></p>
			</form>
		</div>
		</div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase/compat/app';

export default {
	setup() {
		const email = ref("");
		const password = ref("");

		const Login = () => {
			firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value)
				.catch(err => alert(err.message));
		}

		return {
			Login,
			email,
			password
		}
	}
}
</script>

<style>

h1.login {
	justify-content: center;
	align-items: center;
	padding-top: 2em;
}

div.login{

	top: 50%;
    left: 50%;
	padding-top: 2em;
	justify-content: center;
	align-items: center;
	margin: 2em;

}

input.login{

  position: relative;
  background-color: #6AAE90;
  border: none;
  padding: .9em 1.5em;
  margin-top: 1em;
  border-radius: 0.5em;
  font-size: 1em;
  color: white;
  top: 0;

}

p.login{

	margin-top: 2em;

}

</style>