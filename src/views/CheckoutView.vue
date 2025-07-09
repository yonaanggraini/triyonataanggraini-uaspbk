<template>
  <div class="checkout-container">
    <div class="checkout-header">
      <h1 class="checkout-title">Proses Checkout</h1>
      <div class="checkout-steps">
        <span class="step active">1. Keranjang</span>
        <span class="step active">2. Pengiriman</span>
        <span class="step">3. Pembayaran</span>
      </div>
    </div>

    <div class="checkout-content">
      <div class="order-summary">
        <h2>Ringkasan Pesanan</h2>
        <div class="product-list">
          <div v-for="item in cartItems" :key="item.id" class="product-item">
            <img :src="item.image" :alt="item.name" class="product-image">
            <div class="product-details">
              <h3>{{ item.name }}</h3>
              <p class="product-price">Rp {{ item.price.toLocaleString('id-ID') }}</p>
              <div class="product-quantity">
                <span>Qty: {{ item.quantity }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-total">
          <div class="total-row">
            <span>Subtotal</span>
            <span>Rp {{ subtotal.toLocaleString('id-ID') }}</span>
          </div>
          <div class="total-row">
            <span>Ongkir</span>
            <span>Rp {{ shippingCost.toLocaleString('id-ID') }}</span>
          </div>
          <div class="total-row grand-total">
            <span>Total Pembayaran</span>
            <span>Rp {{ grandTotal.toLocaleString('id-ID') }}</span>
          </div>
        </div>
      </div>

      <div class="shipping-form">
        <h2>Detail Pengiriman</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nama Penerima</label>
            <input type="text" id="name" v-model="shippingInfo.name" required>
          </div>
          <div class="form-group">
            <label for="phone">Nomor Telepon</label>
            <input type="tel" id="phone" v-model="shippingInfo.phone" required>
          </div>
          <div class="form-group">
            <label for="address">Alamat Lengkap</label>
            <textarea id="address" v-model="shippingInfo.address" required></textarea>
          </div>
          <div class="form-group">
            <label for="courier">Kurir Pengiriman</label>
            <select id="courier" v-model="shippingInfo.courier" required>
              <option value="jne">JNE</option>
              <option value="tiki">TIKI</option>
              <option value="pos">POS Indonesia</option>
            </select>
          </div>
          <button type="submit" class="checkout-button">Lanjut ke Pembayaran</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Data dummy untuk contoh
const cartItems = ref([
  {
    id: 1,
    name: 'Bunga Mawar Merah',
    price: 75000,
    quantity: 2,
    image: '/images/rose.jpg'
  },
  {
    id: 2,
    name: 'Bunga Tulip Ungu',
    price: 65000,
    quantity: 1,
    image: '/images/tulip.jpg'
  }
])

const shippingInfo = ref({
  name: '',
  phone: '',
  address: '',
  courier: 'jne'
})

const shippingCost = ref(15000)

const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const grandTotal = computed(() => {
  return subtotal.value + shippingCost.value
})

const handleSubmit = () => {
  console.log('Shipping info submitted:', shippingInfo.value)
  // Logika untuk melanjutkan ke pembayaran
}
</script>

<style scoped>
.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.checkout-header {
  margin-bottom: 2rem;
  text-align: center;
}

.checkout-title {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.checkout-steps {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.step {
  color: #95a5a6;
  font-weight: 500;
  position: relative;
}

.step.active {
  color: #3498db;
  font-weight: bold;
}

.step.active:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #3498db;
  margin-top: 0.5rem;
}

.checkout-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.order-summary, .shipping-form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.order-summary h2, .shipping-form h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ecf0f1;
}

.product-list {
  margin-bottom: 1.5rem;
}

.product-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ecf0f1;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.product-details {
  flex: 1;
}

.product-price {
  color: #e74c3c;
  font-weight: bold;
  margin: 0.3rem 0;
}

.order-total {
  margin-top: 1.5rem;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.grand-total {
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ecf0f1;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.checkout-button {
  width: 100%;
  padding: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.checkout-button:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .checkout-content {
    grid-template-columns: 1fr;
  }
  
  .checkout-steps {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>