<template>
  <div class="product-list">
    <div class="header">
      <h1>Koleksi Bunga Kami</h1>
      <div class="filters">
        <select v-model="selectedCategory">
          <option value="">Semua Kategori</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
        <input type="text" v-model="searchQuery" placeholder="Cari bunga...">
      </div>
    </div>

    <div class="products-container">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useApi } from '@/composables/useApi'

const { get } = useApi()
const products = ref([])
const categories = ref([])
const selectedCategory = ref('')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesCategory = !selectedCategory.value ||
      product.categoryId == selectedCategory.value
    const matchesSearch = product.name.toLowerCase().includes(
      searchQuery.value.toLowerCase()
    )
    return matchesCategory && matchesSearch
  })
})

onMounted(async () => {
  try {
    products.value = await get('/products')
    categories.value = await get('/categories')
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
})
</script>

<style scoped>
.product-list {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  gap: 1rem;
}

.filters select, .filters input {
  padding: 0.5rem 1rem;
  border: 1px solid #ffd700;
  border-radius: 8px;
  background: #fff9e6;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
