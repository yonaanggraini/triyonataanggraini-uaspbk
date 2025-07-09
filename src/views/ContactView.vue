<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <h1>Hubungi Kami</h1>
        <p>Kami siap membantu Anda kapan saja</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form">
            <h2>Kirim Pesan</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Nama Lengkap</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
              <div class="form-group">
                <label for="phone">Nomor Telepon</label>
                <input type="tel" id="phone" v-model="form.phone">
              </div>
              <div class="form-group">
                <label for="message">Pesan</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Kirim Pesan</button>
            </form>
          </div>

          <div class="contact-info">
            <h2>Info Kontak</h2>
            <div class="info-card">
              <h3><i class="icon">📍</i> Alamat</h3>
              <p>Jl. Bunga Indah No. 123<br>Kota Blossom, 12345</p>
            </div>
            <div class="info-card">
              <h3><i class="icon">📞</i> Telepon</h3>
              <p>(021) 1234-5678<br>0812-3456-7890 (WhatsApp)</p>
            </div>
            <div class="info-card">
              <h3><i class="icon">✉️</i> Email</h3>
              <p>info@blossomhaven.com<br>cs@blossomhaven.com</p>
            </div>
            <div class="info-card">
              <h3><i class="icon">⏰</i> Jam Operasional</h3>
              <p>Senin - Jumat: 08.00 - 20.00 WIB<br>Sabtu - Minggu: 09.00 - 17.00 WIB</p>
            </div>
          </div>
        </div>

        <div class="map-section">
          <h2>Lokasi Kami</h2>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnNDEuMSJTIDEwNsKwNDknMTMuMyJF!5e0!3m2!1sen!2sid!4v1623195529546!5m2!1sen!2sid" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  alert(`Terima kasih ${form.value.name}, pesan Anda telah terkirim!`)
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  color: #333;
}

.contact-hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('@/assets/images/contact-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 5rem 1rem;
  text-align: center;
}

.contact-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-hero p {
  font-size: 1.2rem;
}

.contact-content {
  padding: 3rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-form h2, .contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6b6b;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #ff5252;
}

.info-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.info-card h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff6b6b;
  margin-bottom: 0.5rem;
}

.map-section {
  margin-top: 3rem;
}

.map-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6b6b;
  text-align: center;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>