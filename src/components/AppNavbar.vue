<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <span>🌸 Blossom Haven</span>
      </router-link>

      <div class="nav-menu">
        <div class="nav-links">
          <router-link to="/products" class="dropdown-trigger"  >
            Produk
            <div class="dropdown-menu mega-menu">
              <div class="mega-menu-content">
                <div class="menu-column">
                  <h4>Kategori Bunga</h4>
                  <router-link to="/products/bouquet">Buket Bunga</router-link>
                  <img src="@/assets/images/buketbunga.jpg" id="1" alt="Special Offer" style="width: 100%; max-width: 100px; height: auto; margin: 10px 0;">

                  <router-link to="/products/vase">Bunga dalam Vas</router-link>
                  <img src="@/assets/images/bunga-vas.jpg" alt="Special Offer" style="width: 100%; max-width: 100px; height: auto; margin: 10px 0;">

                  <router-link to="/products/wedding">Bunga Pernikahan</router-link>
                  <img src="@/assets/images/bunga-pernikahan.jpg" alt="Special Offer" style="width: 100%; max-width: 100px; height: auto; margin: 10px 0;">

                </div>
                <div class="menu-column">
                  <h4>Bunga Populer</h4>
                  <router-link to="/products/rose">Mawar</router-link>
                  <img src="@/assets/images/mawar.jpg" alt="Special Offer" style="width: 100%; max-width: 100px; height: auto; margin: 10px 0;">

                  <router-link to="/products/tulip">Tulip</router-link>
                  <img src="@/assets/images/tulip.jpg" alt="Special Offer" style="width: 100%; max-width: 100px; height: auto; margin: 10px 0;">

                  <router-link to="/products/sunflower">Bunga Matahari</router-link>
                  <img src="@/assets/images/bunga-matahari.jpg" alt="Special Offer" style="width: 100%; max-width: 100px; height: auto; margin: 10px 0;">

                </div>
                <div class="menu-column">
                  <h4>Untuk Acara</h4>
                  <router-link to="/products/anniversary">Ulang Tahun</router-link>
                  <router-link to="/products/wedding">Pernikahan</router-link>
                  <router-link to="/products/graduation">Wisuda</router-link>
                  <router-link to="/products/funeral">Duka Cita</router-link>
                </div>
                <div class="menu-promo">
                  <img src="@/assets/images/flower-promo.jpg" alt="Special Offer">
                  <p>Diskon 20% untuk pembelian pertama!</p>
                </div>
              </div>
            </div>
          </router-link>
          <router-link to="/AboutView">Tentang Kami</router-link>
          <router-link to="/contact">Kontak</router-link>
        </div>

        <div class="user-actions">
          <router-link to="/cart" class="cart-btn">
            <span class="cart-icon">🛒</span>
            <span v-if="cartStore?.totalItems > 0" class="badge">{{ cartStore.totalItems }}</span>
          </router-link>

          <template v-if="!userStore?.isLoggedIn">
            <router-link to="/login" class="auth-btn">Login</router-link>
          </template>
          <template v-else>
            <div class="dropdown">
              <button class="profile-btn">
                <span class="user-icon">👤</span>
                <span class="user-name">{{ userStore.user?.name || 'Profile' }}</span>
              </button>
              <div class="dropdown-menu">
                <router-link to="/profile">Profil</router-link>
                <router-link to="/orders">Pesanan</router-link>
                <a href="#" @click.prevent="handleLogout">Logout</a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const cartStore = useCartStore()
const userStore = useUserStore()

const handleLogout = async () => {
  try {
    await userStore.logout()
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>


<style scoped>
/* Base Navbar Styles */
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  padding: 0.8rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

/* Efek saat di-scroll */
.navbar.scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: #ff6b6b;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo span {
  margin-left: 0.5rem;
}

/* Nav Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links {
  display: flex;
  gap: 1.8rem;
  align-items: center;
}

.nav-links a {
  color: #4a4a4a;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  transition: all 0.3s;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a:not(.dropdown-trigger):after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ff6b6b;
  transition: width 0.3s;
}

.nav-links a:hover:after,
.nav-links a.router-link-exact-active:after {
  width: 100%;
}

.nav-links a:hover {
  color: #ff6b6b;
}

.nav-links a.router-link-exact-active {
  color: #ff6b6b;
}

/* Dropdown Trigger */
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
}

.dropdown-trigger:after {
  content: '⌄';
  font-size: 0.9rem;
  margin-left: 0.3rem;
  transition: transform 0.3s;
}

.dropdown-trigger:hover:after {
  transform: rotate(180deg);
}

/* Mega Menu */
.mega-menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  width: 900px;
  background: white;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 1.8rem;
  display: none;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
  visibility: hidden;
}

.dropdown-trigger:hover .mega-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.mega-menu-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr) 220px;
  gap: 2rem;
}

.menu-column {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.menu-column h4 {
  margin-bottom: 0.8rem;
  color: #ff6b6b;
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #eee;
}

.menu-column a {
  color: #555;
  text-decoration: none;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  transition: all 0.3s;
  font-size: 0.95rem;
  margin-left: -0.6rem;
}

.menu-column a:hover {
  color: #ff6b6b;
  background-color: #fff5f5;
  transform: translateX(5px);
}

/* Menu Promo */
.menu-promo {
  border-left: 1px solid #f0f0f0;
  padding-left: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-promo img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.menu-promo img:hover {
  transform: scale(1.02);
}

.menu-promo p {
  color: #ff6b6b;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  background: #fff5f5;
  padding: 0.6rem;
  border-radius: 6px;
}

/* User Actions */
.user-actions {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

/* ... (style untuk cart-btn, auth-btn, dropdown user tetap sama) ... */

/* Responsive */
@media (max-width: 1024px) {
  .mega-menu {
    width: 750px;
    left: 0;
    transform: none;
  }

  .mega-menu-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .menu-promo {
    display: none;
  }
}

@media (max-width: 768px) {
  .mega-menu {
    width: 100vw;
    position: fixed;
    left: 0;
    border-radius: 0;
    padding: 1rem;
  }

  .nav-menu {
    display: none;
  }

  .menu-column .menu-image {
  width: 100%;
  max-width: 180px; /* Sesuaikan ukuran maksimal yang diinginkan */
  height: auto;
  margin: 20px 0;
  border-radius: 6px;
  display: block; /* Agar margin bisa bekerja */
}


}
</style>

