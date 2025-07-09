<template>
  <div class="product-card" @click="$emit('view-detail', product.id)">
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
      <span class="price">Rp {{ formatPrice(product.price) }}</span>
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.shortDescription }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return price.toLocaleString('id-ID')
}
</script>

<style scoped>
.product-card {
  background: #fff9e6;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(255, 215, 0, 0.2);
  transition: transform 0.3s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.add-to-cart-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: #ffd700;
  border: none;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background: #ffc800;
  transform: scale(1.1);
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin: 0 0 8px 0;
  color: #5a4a3a;
  font-size: 1.1rem;
}

.price {
  color: #e67e22;
  font-weight: bold;
  margin: 0 0 8px 0;
}

.description {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0;
}
</style>
