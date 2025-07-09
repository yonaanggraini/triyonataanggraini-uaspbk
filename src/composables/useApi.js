// src/composables/useApi.js
import { ref } from 'vue'
import axios from 'axios'

export function useApi() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const api = axios.create({
    baseURL: 'http://localhost:3000', // sesuaikan dengan API endpoint Anda
  })

  const get = async (url) => {
    try {
      loading.value = true
      const response = await api.get(url)
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }



  
  

  const post = async (url, payload) => {
    try {
      loading.value = true
      const response = await api.post(url, payload)
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    get,
    post,
    // tambahkan method lain jika diperlukan (put, delete, dll)
  }
}
