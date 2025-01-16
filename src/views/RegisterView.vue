<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from "../store"
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const router = useRouter();
const password = ref('');
const repassword = ref("");
const store = useStore();
const email = ref('');
const first = ref("")
const last = ref("")

async function registerByEmail() {
  if (password.value !== repassword.value) {
    alert("Your passwords do not match!");
    return;
  }
  try {

    const user = (await createUserWithEmailAndPassword(auth, email.value, password.value)).user;
    await updateProfile(user, { displayName: `${first.value} ${last.value}` });
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error creating a user with email!");
  }
}

async function registerByGoogle() {
  try {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error creating a user with Google!");
  }
}

</script>

<template>
  <Header />
  <div class="container3">
    <div class="form-container">
      <h2>Create an Account</h2>
      <form @submit.prevent="registerByEmail()">
        <input type="text" v-model="first" placeholder="First Name" class="input-field" required>
        <input type="text" v-model="last" placeholder="Last Name" class="input-field" required>
        <input type="email" v-model="email" placeholder="Email" class="input-field" required>
        <input type="password" v-model="password" placeholder="Password" class="input-field" required>
        <input type="password" v-model="repassword" placeholder="Re-Password" class="input-field" required>
        <button type="submit" class="button register">Register</button>
      </form>
    </div>
    <br>
    <button @click="registerByGoogle()" class="button register">Register by Google</button>
  </div>
  <br>
  <br>
  <br>
  <br>
  <Footer />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
}

.container3 {
  background-color: #bea8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin-top: 0px;
  margin-left: 500px;
}

.form-container {
  text-align: center;
}

.form-container h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4e37a3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>