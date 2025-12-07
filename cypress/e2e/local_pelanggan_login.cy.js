describe("Skenario Pemesanan Sepeda (Localhost)", () => {
  it("User memilih sepeda dan masuk ke halaman pembayaran", () => {
    // 1. Buka Halaman Utama Localhost
    cy.visit("http://127.0.0.1:8000/");

    // 2. Pilih Sepeda (Pastikan datanya ada di database localhostmu)
    // Kita pilih Sepeda Reguler pertama (SR001 - Exotic)
    cy.get("#sepeda-sepeda-reguler").select("SR001");

    // 3. Pilih Durasi (Paket 1 - 24 Jam)
    cy.get("#durasi-sepeda-reguler").select("PK001");

    // Tunggu sebentar agar sistem menghitung harga
    cy.wait(500);

    // 4. Klik Tombol "Pesan Sekarang"
    cy.get('button[data-kategori="sepeda-reguler"]').click();

    // 5. Verifikasi masuk ke halaman pembayaran
    cy.url().should("include", "/pembayaran");

    // === STOP DULU DI SINI ===
    // Robot akan pause agar kamu bisa Inspect Element formulirnya
    cy.pause();
  });
});
