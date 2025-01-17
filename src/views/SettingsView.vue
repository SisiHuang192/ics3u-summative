<script setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { useStore } from '../store';
import { auth } from "../firebase";
import { ref, computed } from 'vue';
import { updatePassword, updateProfile } from 'firebase/auth';

const store = useStore();
const newPassword = ref('');
const user = ref(store.user);
const first = ref(store.user.displayName.split(" ")[0]);
const last = ref(store.user.displayName.split(" ")[1]);
const password = user.value.password


const isGoogleSignIn = computed(() => {
  return auth.currentUser?.providerData?.some(provider => provider.providerId === 'google.com');
});

const SaveChanges = async () => {
  try {
    if (newPassword.value) {
      await updatePassword(auth.currentUser, newPassword.value);
      alert("Password updated successfully.");
    }

    await updateProfile(auth.currentUser, { displayName: `${first.value} ${last.value}` });
    alert("Profile updated successfully.");
  } catch (error) {
    console.error("Error updating profile or password:", error);
    alert("Failed to update. Please try again.");
  }
};
</script>

<template>
    <Header />

    <div class="settings-container">
        <h1>Settings</h1>
        <div class="setting-item">
            <label for="firstName">First Name:</label>
            <input type="text" v-model="first":disabled="isGoogleSignIn"/>
        </div>
        <div class="setting-item">
            <label for="lastName">Last Name:</label>
            <input type="text" v-model="last":disabled="isGoogleSignIn"/>
        </div>
        <div class="setting-item">
            <label for="password"> Change Password:</label>
            <input type="password" v-model="newPassword":disabled="isGoogleSignIn"/>
        </div>
        <div class="setting-item">
            <label for="email">Email:</label>
            <input type="email" :value="store.user.email" disabled />
        </div>
        <button @click="SaveChanges" :disabled="isGoogleSignIn">Save Changes</button>
    </div>
    <br>
    <Footer />
</template>

<style scoped>
.settings-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #e6d1f2;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #000;
}

.setting-item {
    margin-bottom: 15px;
    max-width: 750px;
}

.setting-item label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #000;
}

.setting-item input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.setting-item input[readonly] {
    background-color: #000;
    cursor: not-allowed;
}
</style>