<template>
	<br><br><br>
	<h1>Login</h1>
	<div class="login">
		<form @submit.prevent="Login">
			<input type="text" placeholder="Email" v-model="email"/>
			<input type="password" placeholder="Password" v-model="password" />
			<input type="submit" value="Login">
			<p>Need an account? <router-link to='/register'> Register Here </router-link></p>
		</form>
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

</style>