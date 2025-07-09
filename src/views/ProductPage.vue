<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="product-hero" :style="currentProduct.image ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${currentProduct.image})` } : { backgroundColor: '#ff6b6b' }">
      <div class="container">
        <h1>{{ currentProduct.name }}</h1>
        <p>{{ currentProduct.shortDescription }}</p>
      </div>
    </section>

    <section class="product-details">
      <div class="container">
        <div class="product-grid">
          <div class="product-images">
            <img v-if="currentProduct.image" :src="currentProduct.image" :alt="currentProduct.name" class="main-image">
            <div v-else class="image-placeholder main-image">
              <span>Gambar Tidak Tersedia</span>
            </div>

            <div class="thumbnail-gallery">
              <template v-if="currentProduct.thumbnails && currentProduct.thumbnails.length">
                <img
                  v-for="(thumb, index) in currentProduct.thumbnails"
                  :key="index"
                  :src="thumb"
                  :alt="`${currentProduct.name} thumbnail ${index+1}`"
                  @click="changeMainImage(thumb)"
                >
              </template>
              <div v-else class="thumbnail-placeholder">
                <div v-for="i in 3" :key="i" class="placeholder-thumb"></div>
              </div>
            </div>
          </div>

          <div class="product-info">
            <h2>{{ currentProduct.name }}</h2>
            <div class="price">Rp {{ formatPrice(currentProduct.price) }}</div>

            <div class="product-description">
              <p>{{ currentProduct.longDescription }}</p>
            </div>

            <div class="product-features">
              <h3>Keistimewaan Bunga Ini:</h3>
              <ul>
                <li v-for="(feature, index) in currentProduct.features" :key="index">
                  <i class="icon-check"></i> {{ feature }}
                </li>
              </ul>
            </div>

            <div class="product-actions">
              <div class="quantity-selector">
                <button @click="decreaseQuantity">-</button>
                <span>{{ quantity }}</span>
                <button @click="increaseQuantity">+</button>
              </div>
              <button class="add-to-cart" @click="addToCart">Tambah ke Keranjang</button>
            </div>

            <div class="product-meta">
              <div class="meta-item">
                <i class="icon-tag"></i> Kategori: {{ currentProduct.category }}
              </div>
              <div class="meta-item">
                <i class="icon-box"></i> Stok Tersedia: {{ currentProduct.stock }}
              </div>
              <div class="meta-item">
                <i class="icon-truck"></i> Pengiriman Cepat 1-2 Hari
              </div>
            </div>
          </div>
        </div>

        <div class="product-recommendations">
          <h2>Anda Mungkin Juga Suka</h2>
          <div class="recommendation-grid">
            <div
              v-for="item in recommendedProducts"
              :key="item.id"
              class="recommendation-item"
              @click="changeProduct(item.id)"
            >
              <img v-if="item.image" :src="item.image" :alt="item.name">
              <div v-else class="recommendation-placeholder"></div>
              <h3>{{ item.name }}</h3>
              <p>Rp {{ formatPrice(item.price) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>




<script>
export default {
  data() {
    return {
      quantity: 1,
      currentProduct: {},
      allProducts: [
        {
          id: 1,
          name: "Buket Mawar Merah Romantis",
          shortDescription: "Buket eksklusif untuk momen spesial penuh cinta",
          longDescription: "Buket mawar merah premium...",
          price: 450000,
          stock: 15,
          category: "Buket Bunga",
          image: "https://via.placeholder.com/800x600?text=Buket+Mawar+Merah",
          thumbnails: [
            "https://via.placeholder.com/200x200?text=Mawar+1",
            "https://via.placeholder.com/200x200?text=Mawar+2"
          ],
          features: ["Mawar segar...", "Tahan segar..."]
        },
        {
          id: 3, // Pastikan ID Lily sesuai dengan yang direkomendasikan
          name: "Rangkaian Bunga Lily",
          shortDescription: "Lily putih anggun dengan vas kristal",
          longDescription: "Rangkaian bunga lily putih dalam vas kristal...",
          price: 525000,
          stock: 8,
          category: "Bunga Vas",
          image: "https://via.placeholder.com/800x600?text=Bunga+Lily",
          thumbnails: [
            "https://via.placeholder.com/200x200?text=Lily+1",
            "https://via.placeholder.com/200x200?text=Lily+2"
          ],
          features: [
            "Lily putih segar",
            "Vas kristal premium",
            "Aroma harum"
          ]
        }
      ],
      recommendedProducts: [
        {
          id: 3, // Pastikan ID sama dengan di allProducts
          name: "Rangkaian Bunga Lily",
          price: 525000,
          image: "https://via.placeholder.com/400x300?text=Bunga+Lily"
        },
        // Produk rekomendasi lainnya
      ]
    }
  },
  created() {
    this.loadProduct();
  },
  methods: {
    loadProduct() {
      const productId = parseInt(this.$route.params.id) || 1;
      const product = this.allProducts.find(p => p.id === productId) || this.allProducts[0];
      this.currentProduct = JSON.parse(JSON.stringify(product)); // Deep copy
    },

    changeProduct(productId) {
      // Perbarui URL
      if (this.$router) {
        this.$router.push(`/product/${productId}`).catch(() => { });
      } else {
        window.history.pushState({}, '', `/product/${productId}`);
      }

      // Muat ulang produk
      this.loadProduct();
      this.quantity = 1; // Reset quantity
    },


    data() {
      return {
        quantity: 1,
        currentProduct: {},
        allProducts: [],
        recommendedProducts: []
      }
    },
    created() {
      this.loadProduct();
    },
    methods: {
      loadProduct() {
        const productId = parseInt(this.$route?.params?.id) || 1;
        const product = this.allProducts.find(p => p.id === productId) || this.allProducts[0];
        if (product) {
          this.currentProduct = JSON.parse(JSON.stringify(product));
        }
      },

      changeProduct(productId) {
        if (this.$router) {
          this.$router.push(`/product/${productId}`).catch(err => {
            console.error("Routing error:", err);
          });
        }
      }
    },
    watch: {
      '$route.params.id': {
        handler(newId) {
          if (newId) {
            this.loadProduct();
          }
        },
        immediate: true
      }
    }
  }
}


</script>
<style scoped>
/* Your existing styles remain the same */
</style>
