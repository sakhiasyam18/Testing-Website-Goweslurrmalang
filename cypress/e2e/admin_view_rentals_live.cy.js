describe("Case 2: Admin Melihat Data Persewaan (Live)", () => {
  it("Admin login dan melihat tabel pesanan", () => {
    // 1. Login Admin
    cy.visit(
      "https://capstone-dtei.um.ac.id/goweslurrmalang/public/admin/login",
      { failOnStatusCode: false }
    );

    // === JURUS ANTI CLOUDFLARE (Klik Verify Manual, lalu Resume) ===
    cy.pause();

    cy.get('input[name="name"]').type("Admin");
    cy.get('input[name="password"]').type("gowes123");
    cy.get(".btn-login").click();

    // 2. Pastikan Masuk Dashboard
    cy.url().should("include", "/admin/dashboard");

    // 3. Cek Tabel Persewaan (Biasanya ada di Dashboard atau menu Data Pesanan)
    // Kita asumsikan ada tabel di dashboard sesuai gambar yang kamu kirim
    cy.contains("Data Pesanan Terbaru").should("be.visible");

    // Validasi tabel tidak kosong (opsional)
    cy.get("table").should("exist");
  });
});
