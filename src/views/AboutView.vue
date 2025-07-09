<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="container">
        <h1>Tentang Blossom Haven</h1>
        <p>Menghadirkan keindahan alam melalui rangkaian bunga terbaik sejak 2023</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-story">
            <h2>Cerita Kami</h2>
            <p>Blossom Haven dimulai dari kecintaan terhadap bunga dan keinginan untuk berbagi kebahagiaan melalui karangan bunga. Dari sebuah kios kecil di sudut kota, kini kami telah berkembang menjadi toko bunga online terpercaya dengan ribuan pelanggan setia.</p>
            <p>Setiap rangkaian bunga kami dibuat dengan penuh cinta oleh florist berpengalaman yang memahami seni merangkai bunga.</p>
          </div>

          <div class="about-values">
            <h2>Nilai Kami</h2>
            <div class="value-cards">
              <div class="card">
                <h3>Kualitas Terbaik</h3>
                <p>Kami hanya menggunakan bunga segar pilihan dengan kualitas terbaik langsung dari petani lokal dan importir terpercaya.</p>
              </div>
              <div class="card">
                <h3>Ramah Lingkungan</h3>
                <p>Kami berkomitmen menggunakan kemasan ramah lingkungan dan mengurangi limbah plastik dalam setiap pengiriman.</p>
              </div>
              <div class="card">
                <h3>Kepuasan Pelanggan</h3>
                <p>Tim customer service kami siap membantu 24/7 untuk memastikan pengalaman berbelanja yang menyenangkan.</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  color: #333;
}

.hero-section {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('@/assets/images/flower-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 5rem 1rem;
  text-align: center;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
}

.about-content {
  padding: 3rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.about-story h2, .about-values h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6b6b;
}

.value-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card h3 {
  color: #ff6b6b;
  margin-bottom: 0.5rem;
}

.team-section {
  text-align: center;
  padding: 3rem 0;
}

.team-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ff6b6b;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.member {
  width: 200px;
}

.member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #ff6b6b;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>