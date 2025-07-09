<template>
  <div class="cart-view">
    <h1>Keranjang Belanja</h1>

    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Keranjang kamu masih kosong</p>
      <router-link to="/products" class="shop-btn">Belanja Sekarang</router-link>
    </div>

    <div v-else class="cart-container">
      <div class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="item-image">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="price">{{ formatPrice(item.price) }}</p>
            <div class="quantity-control">
              <button @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            </div>
          </div>
          <button @click="removeItem(item.id)" class="remove-btn">×</button>
        </div>
      </div>

      <div class="cart-summary">
        <h3>Ringkasan Belanja</h3>
        <div class="summary-row">
          <span>Total Harga</span>
          <span>{{ formatPrice(cartStore.totalPrice) }}</span>
        </div>
        <router-link to="/checkout" class="checkout-btn">Lanjut ke Pembayaran</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}

const updateQuantity = (itemId, newQuantity) => {
  cartStore.updateQuantity(itemId, newQuantity)
}

const removeItem = (itemId) => {
  cartStore.removeItem(itemId)
}
</script>

<style scoped>
.cart-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.empty-cart {
  text-align: center;
  padding: 4rem 0;
}

.shop-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: #ffd700;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.cart-container {
  display: flex;
  gap: 2rem;
}

.cart-items {
  flex: 2;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #fff9e6;
  border-radius: 12px;
  margin-bottom: 1rem;
  align-items: center;
  position: relative;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details {
  flex: 1;
}

.price {
  color: #e67e22;
  font-weight: bold;
  margin: 0.5rem 0;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-control button {
  width: 30px;
  height: 30px;
  border: none;
  background: #ffd700;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}

.quantity-control button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #e67e22;
}

.cart-summary {
  flex: 1;
  background: #fff9e6;
  padding: 1.5rem;
  border-radius: 12px;
  height: fit-content;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #ffd700;
}

.checkout-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: #e67e22;
  color: white;
  border: none;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
