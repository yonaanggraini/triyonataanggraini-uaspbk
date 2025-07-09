<template>
  <div class="detail-produk">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb">
      <router-link to="/">Home</router-link> /
      <router-link to="/products">Produk</router-link> /
      <span>Detail Produk</span>
    </div>

    <!-- Product Detail Section -->
    <div class="product-container">
      <!-- Product Images -->
      <div class="product-gallery">
        <div class="main-image">
          <img src="https://via.placeholder.com/600x400?text=Bouquet+Mawar+Merah" alt="Bouquet Mawar Merah">
        </div>
        <div class="thumbnail-container">
          <div class="thumbnail" v-for="(thumb, index) in thumbnails" :key="index">
            <img :src="thumb" :alt="'Thumbnail ' + (index+1)">
          </div>
        </div>
      </div>

      <!-- Product Info -->
      <div class="product-info">
        <h1>Bouquet Mawar Merah Premium</h1>

        <div class="product-meta">
          <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(24 ulasan)</span>
          </div>
          <div class="sku">SKU: BH-MR-001</div>
        </div>

        <div class="price-container">
          <span class="current-price">Rp 350.000</span>
          <span class="original-price">Rp 450.000</span>
          <span class="discount">22%</span>
        </div>

        <div class="availability">
          <i class="fas fa-check-circle"></i>
          <span>Tersedia: 15 buah</span>
        </div>

        <div class="product-description">
          <p>Bouquet eksklusif berisi 24 tangkai mawar merah segar langsung dari kebun kami, dikombinasikan dengan daun eucalyptus dan dikemas dengan wrapping paper premium.</p>
          <ul>
            <li><i class="fas fa-check"></i> Bunga segar dipetik hari H</li>
            <li><i class="fas fa-check"></i> Free greeting card</li>
            <li><i class="fas fa-check"></i> Kemasan premium</li>
          </ul>
        </div>

        <div class="quantity-selector">
          <label>Jumlah:</label>
          <div class="quantity-control">
            <button @click="decreaseQuantity">-</button>
            <input type="number" v-model="quantity" min="1" max="15">
            <button @click="increaseQuantity">+</button>
          </div>
        </div>

        <div class="action-buttons">
          <button class="add-to-cart" @click="addToCart">
            <i class="fas fa-shopping-cart"></i> Tambah ke Keranjang
          </button>
          <button class="buy-now" @click="buyNow">
            <i class="fas fa-bolt"></i> Beli Sekarang
          </button>
        </div>

        <div class="delivery-info">
          <div class="delivery-option">
            <i class="fas fa-truck"></i>
            <div>
              <strong>Gratis Ongkir</strong>
              <p>Untuk pembelian di atas Rp 500.000</p>
            </div>
          </div>
          <div class="delivery-option">
            <i class="fas fa-clock"></i>
            <div>
              <strong>Pengiriman Cepat</strong>
              <p>Dikirim dalam 3 jam (Jakarta)</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Tabs -->
    <div class="product-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="{ active: activeTab === tab.id }"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Description Tab -->
      <div v-if="activeTab === 'description'" class="tab-pane">
        <h3>Deskripsi Produk</h3>
        <p>Bouquet Mawar Merah Premium dari Blossom Haven adalah pilihan sempurna untuk berbagai momen spesial seperti anniversary, Valentine, atau sebagai ungkapan sayang. Setiap tangkai mawar dipilih dengan standar kualitas tertinggi untuk memastikan kesegaran dan keindahan yang tahan lama.</p>

        <h4>Spesifikasi:</h4>
        <ul>
          <li>Isi: 24 tangkai mawar merah</li>
          <li>Tambahan: Daun eucalyptus segar</li>
          <li>Kemasan: Wrapping paper premium dengan pita</li>
          <li>Ukuran: Tinggi ±50cm, diameter ±30cm</li>
        </ul>
      </div>

      <!-- Reviews Tab -->
      <div v-if="activeTab === 'reviews'" class="tab-pane">
        <h3>Ulasan Pelanggan</h3>
        <div class="review" v-for="review in reviews" :key="review.id">
          <div class="review-header">
            <div class="reviewer-info">
              <span class="reviewer-name">{{ review.name }}</span>
              <div class="review-rating">★★★★★</div>
            </div>
            <span class="review-date">{{ review.date }}</span>
          </div>
          <p class="review-text">{{ review.text }}</p>
        </div>
      </div>

      <!-- Shipping Tab -->
      <div v-if="activeTab === 'shipping'" class="tab-pane">
        <h3>Info Pengiriman</h3>
        <div class="shipping-info">
          <div class="shipping-method">
            <i class="fas fa-motorcycle"></i>
            <div>
              <strong>Same Day Delivery</strong>
              <p>Dikirim dalam 3 jam (khusus Jabodetabek)</p>
              <p class="price">Rp 25.000</p>
            </div>
          </div>
          <div class="shipping-method">
            <i class="fas fa-truck"></i>
            <div>
              <strong>Next Day Delivery</strong>
              <p>Dikirim esok hari (seluruh Indonesia)</p>
              <p class="price">Rp 15.000 - Rp 75.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="related-products">
      <h2>Produk Lainnya</h2>
      <div class="product-grid">
        <div class="related-product" v-for="product in relatedProducts" :key="product.id">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailProduk',
  data() {
    return {
      quantity: 1,
      activeTab: 'description',
      thumbnails: [
        'https://via.placeholder.com/150?text=Thumb+1',
        'https://via.placeholder.com/150?text=Thumb+2',
        'https://via.placeholder.com/150?text=Thumb+3',
        'https://via.placeholder.com/150?text=Thumb+4'
      ],
      tabs: [
        { id: 'description', label: 'Deskripsi' },
        { id: 'reviews', label: 'Ulasan' },
        { id: 'shipping', label: 'Pengiriman' }
      ],
      reviews: [
        {
          id: 1,
          name: 'Dian Sastrowardoyo',
          date: '15 Februari 2023',
          text: 'Bunganya sangat segar dan tahan lama! Kemasannya juga sangat rapi. Pelayanannya cepat sekali.'
        },
        {
          id: 2,
          name: 'Iwan Setiawan',
          date: '10 Februari 2023',
          text: 'Istri sangat suka dengan bouquetnya. Harumnya segar dan mawarnya fresh banget. Recommended!'
        }
      ],
      relatedProducts: [
        {
          id: 1,
          name: 'Bouquet Mawar Putih',
          price: 'Rp 300.000',
          image: 'https://via.placeholder.com/200?text=Mawar+Putih'
        },
        {
          id: 2,
          name: 'Bouquet Campur',
          price: 'Rp 275.000',
          image: 'https://via.placeholder.com/200?text=Bouquet+Campur'
        },
        {
          id: 3,
          name: 'Bunga Meja Minimalis',
          price: 'Rp 180.000',
          image: 'https://via.placeholder.com/200?text=Bunga+Meja'
        },
        {
          id: 4,
          name: 'Bunga Papan Wedding',
          price: 'Rp 1.500.000',
          image: 'https://via.placeholder.com/200?text=Bunga+Papan'
        }
      ]
    }
  },
  methods: {
    increaseQuantity() {
      if (this.quantity < 15) {
        this.quantity++
      }
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCart() {
      alert('Produk telah ditambahkan ke keranjang')
    },
    buyNow() {
      alert('Proses ke checkout')
    }
  }
}
</script>

<style scoped>
.detail-produk {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
}

.breadcrumb {
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.breadcrumb a {
  color: #666;
  text-decoration: none;
}

.breadcrumb a:hover {
  color: #ff6b6b;
}

.product-container {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.product-gallery {
  flex: 1;
}

.main-image img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.thumbnail-container {
  display: flex;
  gap: 10px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  flex: 1;
}

.product-info h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #222;
}

.product-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
}

.stars {
  color: #FFD700;
  font-size: 16px;
}

.review-count {
  font-size: 14px;
  color: #666;
}

.sku {
  font-size: 14px;
  color: #666;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.current-price {
  font-size: 28px;
  font-weight: bold;
  color: #ff6b6b;
}

.original-price {
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
}

.discount {
  background: #ff6b6b;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 14px;
}

.availability {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #4CAF50;
  margin-bottom: 20px;
}

.product-description {
  margin-bottom: 25px;
  line-height: 1.6;
}

.product-description ul {
  margin-top: 10px;
  padding-left: 20px;
}

.product-description li {
  margin-bottom: 5px;
}

.product-description i {
  color: #4CAF50;
  margin-right: 5px;
}

.quantity-selector {
  margin-bottom: 25px;
}

.quantity-selector label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.quantity-control {
  display: flex;
  align-items: center;
  width: 120px;
}

.quantity-control button {
  width: 35px;
  height: 35px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  font-size: 16px;
  cursor: pointer;
}

.quantity-control input {
  width: 50px;
  height: 35px;
  text-align: center;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.add-to-cart, .buy-now {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
}

.add-to-cart {
  background: #ff6b6b;
  color: white;
}

.add-to-cart:hover {
  background: #e05555;
}

.buy-now {
  background: #333;
  color: white;
}

.buy-now:hover {
  background: #222;
}

.delivery-info {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.delivery-option {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.delivery-option i {
  font-size: 20px;
  color: #ff6b6b;
}

.delivery-option strong {
  display: block;
  margin-bottom: 3px;
}

.delivery-option p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.product-tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.product-tabs button {
  padding: 12px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #666;
  position: relative;
}

.product-tabs button.active {
  color: #ff6b6b;
}

.product-tabs button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #ff6b6b;
}

.tab-content {
  margin-bottom: 40px;
}

.tab-pane h3 {
  font-size: 22px;
  margin-bottom: 15px;
}

.tab-pane h4 {
  font-size: 18px;
  margin: 20px 0 10px;
}

.tab-pane ul {
  padding-left: 20px;
}

.tab-pane li {
  margin-bottom: 8px;
}

.review {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.reviewer-info {
  display: flex;
  flex-direction: column;
}

.reviewer-name {
  font-weight: 500;
}

.review-rating {
  color: #FFD700;
  font-size: 14px;
}

.review-date {
  color: #999;
  font-size: 14px;
}

.review-text {
  line-height: 1.6;
}

.shipping-method {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.shipping-method i {
  font-size: 24px;
  color: #ff6b6b;
}

.shipping-method .price {
  color: #ff6b6b;
  font-weight: 500;
}

.related-products {
  margin-top: 40px;
}

.related-products h2 {
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.related-product {
  text-align: center;
}

.related-product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}

.related-product h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.related-product .price {
  color: #ff6b6b;
  font-weight: 500;
}

@media (max-width: 992px) {
  .product-container {
    flex-direction: column;
  }

  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-tabs button {
    padding: 10px 12px;
    font-size: 14px;
  }
}
</style>
