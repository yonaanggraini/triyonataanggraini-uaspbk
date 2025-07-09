import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          ...product,
          quantity
        })
      }
    },
    increaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
      }
    },
    decreaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeFromCart(productId)
        }
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    clearCart() {
      this.items = []
    }
  },
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }
})
