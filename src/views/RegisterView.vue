<template>
  <div class="register-view">
    <div class="register-container">
      <div class="register-header">
        <h1 class="register-title">Buat Akun Baru</h1>
        <p class="register-subtitle">Bergabunglah dengan komunitas kami</p>
      </div>
      
      <form @submit.prevent="handleSubmit" class="register-form">
        <div class="form-group">
          <label for="name">Nama Lengkap</label>
          <div class="input-container">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="Masukkan nama lengkap"
              required
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">Alamat Email</label>
          <div class="input-container">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="contoh@email.com"
              required
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-container">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input 
              type="password" 
              id="password" 
              v-model="form.password" 
              placeholder="Minimal 8 karakter"
              required
              minlength="8"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Konfirmasi Password</label>
          <div class="input-container">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="form.confirmPassword" 
              placeholder="Ulangi password"
              required
            >
          </div>
        </div>
        
        <div v-if="errorMessage" class="error-message">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {{ errorMessage }}
        </div>
        
        <div v-if="successMessage" class="success-message">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          {{ successMessage }}
        </div>
        
        <button 
          type="submit" 
          class="register-button"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Daftar Sekarang</span>
          <span v-else>
            <svg class="spinner" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
          </span>
        </button>
      </form>
      
      <div class="divider">
        <span>ATAU</span>
      </div>
      
      <div class="social-login">
        <button class="social-button google">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Daftar dengan Google
        </button>
        <button class="social-button facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" fill="#1877F2"/>
          </svg>
          Daftar dengan Facebook
        </button>
      </div>
      
      <div class="login-link">
        Sudah punya akun? <router-link to="/login">Masuk disini</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'RegisterView',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const isLoading = ref(false)
    const errorMessage = ref('')
    const successMessage = ref('')
    
    const form = ref({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    
    const handleSubmit = async () => {
      if (form.value.password !== form.value.confirmPassword) {
        errorMessage.value = 'Password dan konfirmasi password tidak sama!'
        return
      }
      
      try {
        isLoading.value = true
        errorMessage.value = ''
        
        await authStore.register({
          name: form.value.name,
          email: form.value.email,
          password: form.value.password
        })
        
        successMessage.value = 'Registrasi berhasil! Mengarahkan ke halaman login...'
        
        // Redirect ke halaman login setelah 2 detik
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      } catch (error) {
        errorMessage.value = error.message || 'Terjadi kesalahan saat registrasi'
      } finally {
        isLoading.value = false
      }
    }
    
    return {
      form,
      isLoading,
      errorMessage,
      successMessage,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.register-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem;
}

.register-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  width: 100%;
  max-width: 480px;
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

.register-title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.register-subtitle {
  color: #7f8c8d;
  font-size: 0.95rem;
}

.register-form {
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #34495e;
  font-weight: 500;
}

.input-container {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #95a5a6;
}

input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  outline: none;
}

.error-message {
  color: #e74c3c;
  background-color: #fdecea;
  padding: 0.75rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.success-message {
  color: #27ae60;
  background-color: #e8f5e9;
  padding: 0.75rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.register-button {
  width: 100%;
  padding: 0.9rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.register-button:hover {
  background-color: #2980b9;
}

.register-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.spinner {
  animation: rotate 1s linear infinite;
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}

.spinner circle {
  stroke: white;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.divider {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #95a5a6;
  font-size: 0.8rem;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
}

.divider::before {
  margin-right: 1rem;
}

.divider::after {
  margin-left: 1rem;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  background: white;
  color: #34495e;
}

.social-button:hover {
  background-color: #f8f9fa;
}

.social-button svg {
  width: 18px;
  height: 18px;
}

.social-button.google:hover {
  border-color: #dd4b39;
  color: #dd4b39;
}

.social-button.facebook:hover {
  border-color: #1877f2;
  color: #1877f2;
}

.login-link {
  text-align: center;
  font-size: 0.9rem;
  color: #7f8c8d;
}

.login-link a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}

@media (max-width: 576px) {
  .register-container {
    padding: 1.5rem;
  }
  
  .register-title {
    font-size: 1.5rem;
  }
}
</style>