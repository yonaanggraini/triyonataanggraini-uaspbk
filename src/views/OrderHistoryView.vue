<template>
  <div class="order-history">
    <h1>Riwayat Pesanan</h1>
    <!-- Tambahkan konten riwayat pesanan di sini -->
    <div v-if="orders.length === 0">
      <p>Belum ada riwayat pesanan</p>
    </div>
    <div v-else>
      <div v-for="order in orders" :key="order.id" class="order-item">
        <p>Order ID: {{ order.id }}</p>
        <p>Tanggal: {{ order.date }}</p>
        <p>Total: Rp{{ order.total.toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderHistoryView',
  data() {
    return {
      orders: [] 
    }
  }
}
</script>

<style scoped>
.order-history {
  padding: 20px;
}
.order-item {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>