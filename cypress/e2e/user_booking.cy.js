describe('Skenario Pemesanan Sepeda (User)', () => {

  it('User memilih sepeda reguler dan durasi sewa', () => {
    // 1. Buka Halaman Utama
    cy.visit('https://capstone-dtei.um.ac.id/goweslurrmalang/public/');

    // 2. Pilih Sepeda dari Dropdown
    // Kita pakai ID: #sepeda-sepeda-reguler dan pilih value: SR001
    cy.get('#sepeda-sepeda-reguler').select('SR001');

    // 3. Pilih Durasi dari Dropdown
    // Kita pakai ID: #durasi-sepeda-reguler dan pilih value: PK001
    cy.get('#durasi-sepeda-reguler').select('PK001');

    // 4. Pastikan harga muncul (Opsional, biar keren aja lihat robotnya nunggu)
    // Biasanya kalau pilih durasi, harga berubah. Kita kasih jeda dikit.
    cy.wait(500); 

    // 5. Klik Tombol "Pesan Sekarang"
    // Kita pakai selector spesifik data-kategori="sepeda-reguler" biar gak salah klik tombol premium
    cy.get('button[data-kategori="sepeda-reguler"]').click();

    // 6. Verifikasi Berhasil Masuk Halaman Pembayaran
    // Sesuai request kamu, kita cek apakah URL-nya mengandung kata 'pembayaran' dan id sepedanya
    cy.url().should('include', '/pembayaran');
    cy.url().should('include', 'id_sepeda=SR001');
  });

});