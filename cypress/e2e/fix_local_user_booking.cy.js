describe("Skenario Pemesanan Sepeda Lengkap (Localhost)", () => {
  it("User memilih sepeda, isi form, dan upload bukti bayar", () => {
    // 1. Buka Halaman Utama Localhost
    cy.visit("http://127.0.0.1:8000/");

    // 2. Pilih Sepeda (Exotic - SR001)
    cy.get("#sepeda-sepeda-reguler").select("SR002");

    // 3. Pilih Durasi (Paket 1 - 24 Jam)
    cy.get("#durasi-sepeda-reguler").select("PK001");

    // Tunggu sebentar (biar harga update)
    cy.wait(500);

    // 4. Klik Tombol "Pesan Sekarang"
    cy.get('button[data-kategori="sepeda-reguler"]').click();

    // 5. Pastikan sudah masuk halaman formulir
    cy.url().should("include", "/pembayaran");

    // === MULAI ISI FORMULIR ===

    // A. Isi Nama Lengkap
    cy.get("#nama").type("cypress");

    // B. Isi Nomor Telepon
    cy.get("#no_telepon").type("089504986360");

    // C. Isi Alamat
    cy.get("#alamat").type("malang");

    // D. Upload Bukti Pembayaran
    // Trik: Karena input filenya ada class 'd-none' (tersembunyi), kita pakai {force: true}
    // Pastikan file 'bukti_transfer.jpg' sudah ada di folder cypress/fixtures
    cy.get("#bukti_pembayaran").selectFile(
      "cypress/fixtures/bukti_transfer.jpg",
      { force: true }
    );

    // 6. Klik Kirim Pembayaran
    cy.get('button[type="submit"]').click();

    // 7. Verifikasi Sukses (Opsional)
    // Biasanya akan muncul SweetAlert "Success" atau pindah halaman
    // Kita cek apakah url tidak lagi di halaman pembayaran
    cy.wait(2000); // Tunggu proses upload selesai
  });
});
