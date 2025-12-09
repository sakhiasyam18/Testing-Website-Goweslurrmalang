describe("Skenario Hitung Denda (Localhost)", () => {
  it("Admin login, hitung denda, cek pesan sukses, lalu buka tabel denda", () => {
    // ------------------------------------------------
    // 1. LOGIN ADMIN
    // ------------------------------------------------
    cy.visit("http://127.0.0.1:8000/admin/login");

    cy.get('input[name="name"]').type("Admin");
    cy.get('input[name="password"]').type("gowes123");
    cy.get(".btn-login").click();

    // Pastikan masuk dashboard
    cy.url().should("include", "/dashboard");

    // ------------------------------------------------
    // 2. KLIK TOMBOL "HITUNG" (PAKSA) & HANDLE POP-UP
    // ------------------------------------------------

    // Handle Pop-up Konfirmasi "OK" otomatis
    cy.on("window:confirm", () => true);

    // Cari tombol "Hitung" dan KLIK PAKSA (force: true)
    // Menggunakan {force: true} karena tadi sempat error elemen terpotong/hidden
    cy.contains("button", "Hitung").first().click({ force: true });

    // ------------------------------------------------
    // 3. VERIFIKASI PESAN SUKSES (PENTING!)
    // ------------------------------------------------

    // Kita pastikan muncul tulisan "Denda berhasil dihitung" (sesuai screenshotmu)
    cy.contains("Denda berhasil dihitung").should("be.visible");

    // Tunggu sebentar biar mata kita sempat lihat pesan hijaunya
    cy.wait(2000);

    // ------------------------------------------------
    // 4. BUKA DASHBOARD DENDA
    // ------------------------------------------------

    // Karena sistem tidak redirect otomatis, kita suruh robot pindah manual
    cy.visit("http://127.0.0.1:8000/admin/denda");

    // Verifikasi sudah sampai di halaman denda
    cy.url().should("include", "/admin/denda");

    // Pastikan tabel/judul Data Denda muncul
    cy.contains("Data Denda").should("exist");
  });
});
