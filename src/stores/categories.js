import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await fetch('/api/categories')
        this.categories = await response.json()
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
  },
})
