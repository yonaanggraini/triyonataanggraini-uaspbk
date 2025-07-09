import express from 'express'
const router = express.Router()

// Endpoint registrasi
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Validasi input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Semua field harus diisi' })
    }

    // Di sini biasanya:
    // 1. Cek apakah email sudah terdaftar
    // 2. Hash password
    // 3. Simpan ke database

    // Contoh response sukses
    res.status(201).json({
      user: {
        id: 123,
        name,
        email,
      },
      token: 'generated-jwt-token',
    })
  } catch (error) {
    console.error('Error registrasi:', error)
    res.status(500).json({ message: 'Terjadi kesalahan server' })
  }
})

export default router
