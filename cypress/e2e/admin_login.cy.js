describe("Skenario Login Admin Goweslur", () => {
  it("Berhasil login dengan akun Admin yang benar", () => {
    // 1. Buka halaman login admin
    cy.visit(
      "https://capstone-dtei.um.ac.id/goweslurrmalang/public/admin/login"
    );

    // 2. Pastikan halaman sudah terbuka (cek ada tulisan Admin Portal)
    cy.contains("Admin Portal").should("be.visible");

    // 3. Isi Username (sesuai selector yang kamu kasih: name="name")
    cy.get('input[name="name"]').type("Admin");

    // 4. Isi Password (sesuai selector yang kamu kasih: name="password")
    cy.get('input[name="password"]').type("gowes123");

    // 5. Klik tombol Masuk (sesuai class yang kamu kasih: .btn-login)
    cy.get(".btn-login").click();

    // 6. Verifikasi (Validasi) apakah login berhasil
    // Kita cek apakah URL berubah (biasanya masuk ke dashboard)
    cy.url().should("not.include", "/login");
    cy.contains("Dashboard").should("exist"); // Cek apakah ada tulisan Dashboard setelah login
  });
});
