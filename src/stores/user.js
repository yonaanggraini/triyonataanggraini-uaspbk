import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(null)
  const token = ref(localStorage.getItem('authToken') || null) // Ambil token dari localStorage jika ada

  // Actions
  const login = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login gagal')
      }

      // Update state
      user.value = data.user
      token.value = data.token

      // Simpan token ke localStorage
      localStorage.setItem('authToken', data.token)

      return data
    } catch (error) {
      console.error('Login error:', error)
      throw error // Re-throw error agar bisa ditangkap di komponen
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('authToken')
  }

  return { user, token, login, logout }
})
