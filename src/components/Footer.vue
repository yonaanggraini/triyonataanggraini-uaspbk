<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Blossom Haven</h3>
        <p>Toko bunga online dengan kualitas terbaik</p>
      </div>

      <div class="footer-section">
        <h3>Kontak</h3>
        <p>Email: info@blossomhaven.com</p>
        <p>Telepon: (021) 12345678</p>
      </div>

      <div class="footer-section">
        <h3>Jam Operasional</h3>
        <p>Senin - Jumat: 09.00 - 17.00</p>
        <p>Sabtu: 09.00 - 15.00</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Blossom Haven. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: #fff9e6;
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.footer-bottom {
  text-align: center;
  padding: 1rem;
  background-color: #e67e22;
  color: white;
  margin-top: 2rem;
}
</style>