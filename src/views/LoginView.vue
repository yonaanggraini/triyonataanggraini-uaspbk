<template>
  <div class="login-view">
    <div class="login-container">
      <h2>Masuk ke Akun Anda</h2>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            placeholder="email@contoh.com"
            @input="clearError"
          >
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            placeholder="••••••••"
            @input="clearError"
          >
        </div>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <button type="submit" class="login-btn" :disabled="isLoading">
          {{ isLoading ? 'Memproses...' : 'Masuk' }}
        </button>
      </form>

      <p class="register-link">
        Belum punya akun? <router-link to="/register">Daftar disini</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const isLoading = ref(false)
const errorMessage = ref('')

const form = ref({
  email: '',
  password: ''
})

// Clear error saat user mulai mengetik
const clearError = () => {
  errorMessage.value = ''
}

// Handle login
const handleLogin = async () => {
  if (!form.value.email || !form.value.password) {
    errorMessage.value = 'Email dan password harus diisi'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    await userStore.login({
      email: form.value.email,
      password: form.value.password
    })
    
    // Redirect ke halaman setelah login berhasil
    router.push('/dashboard') // Ganti dengan route yang sesuai
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = error.message || 'Login gagal. Periksa email dan password Anda.'
  } finally {
    isLoading.value = false
  }
}

// Cek jika user sudah login
onMounted(() => {
  if (userStore.token) {
    router.push('/dashboard') // Redirect jika sudah login
  }
})
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: #f5f5f5;
  padding: 1rem;
}

.login-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: #2c3e50;
  font-weight: 500;
}

input {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #42b983;
}

.error-message {
  color: #e74c3c;
  background-color: #fdeded;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.login-btn {
  padding: 0.8rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1rem;
}

.login-btn:hover {
  background: #3aa876;
}

.login-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.register-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #7f8c8d;
}

.register-link a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>