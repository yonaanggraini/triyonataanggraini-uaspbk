import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    async login(credentials) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', credentials)

        this.token = response.data.token
        this.user = response.data.user

        localStorage.setItem('token', this.token)

        return response.data
      } catch (error) {
        if (error.response?.status === 401) {
          throw new Error('Email atau password salah')
        }
        throw error
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
  },
})
