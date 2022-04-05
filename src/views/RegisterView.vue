<template>
	<br><br><br>
	<h1 class="register">Register</h1>
	<div class="register">
		<form @submit.prevent="Register">
			<input type="text" placeholder="Email" v-model="email"/>
			<input type="password" placeholder="Password" v-model="password" />
			<input class="register" type="submit" value="Register">
			<p class="register">Have an account? <router-link class="link" to='/login'>Login Here </router-link></p>
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

		const Register = () => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value)
				.catch(err => alert(err.message));
		}

		return {
			Register,
			email,
			password
		}
	}
};
</script>

<style>
h1.register {
	justify-content: center;
	align-items: center;
	padding-top: 2em;
}

div.register{

	top: 50%;
    left: 50%;
	padding-top: 2em;
	justify-content: center;
	align-items: center;
}

input.register{

  position: relative;
  background-color: #558fc5;
  border: none;
  padding: .9em 1.5em;
  margin-top: 1em;
  border-radius: 0.5em;
  font-size: 1em;
  color: white;
  top: 0;

}

.link{
	font-weight: bold;
	color: #1E90FF;

}

p.register{

	margin-top: 2em;

}

</style>
