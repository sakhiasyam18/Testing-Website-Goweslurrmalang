describe("Case 1: User Booking (Live Website)", () => {
  it("User memesan sepeda dan upload bukti bayar", () => {
    // 1. Buka Website LIVE
    cy.visit("https://capstone-dtei.um.ac.id/goweslurrmalang/public/", {
      failOnStatusCode: false,
    });

    // === JURUS ANTI CLOUDFLARE ===
    // KLIK MANUAL "Verify you are human", lalu klik tombol RESUME di Cypress
    cy.pause();

    // 2. Pilih Sepeda (Pastikan ID sepedanya ada di live web, misal SR001 atau sesuaikan)
    cy.get("#sepeda-sepeda-reguler").select("SR001");

    // 3. Pilih Durasi
    cy.get("#durasi-sepeda-reguler").select("PK001");
    cy.wait(1000); // Tunggu loading harga

    // 4. Klik Pesan
    cy.get('button[data-kategori="sepeda-reguler"]').click();

    // 5. Isi Form Pembayaran
    cy.get("#nama").type("Cypress Bot");
    cy.get("#no_telepon").type("08123456789");
    cy.get("#alamat").type("Jl. Uji Coba Automation No. 1");

    // 6. Upload Bukti (Pastikan file bukti_transfer.jpg ada di folder fixtures)
    cy.get("#bukti_pembayaran").selectFile(
      "cypress/fixtures/bukti_transfer.jpg",
      { force: true }
    );

    // 7. Kirim
    cy.get('button[type="submit"]').click();
  });
});
