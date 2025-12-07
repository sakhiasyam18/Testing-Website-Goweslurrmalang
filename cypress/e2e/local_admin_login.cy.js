describe("Skenario Login Admin (Localhost)", () => {
  it("Berhasil login di Localhost tanpa gangguan", () => {
    // 1. Buka halaman login Localhost
    // Tidak perlu 'failOnStatusCode' lagi karena localhost pasti aman
    cy.visit("http://127.0.0.1:8000/admin/login");

    // 2. Isi Username
    // Kita tunggu sebentar memastikan halaman sudah loading sempurna
    cy.get('input[name="name"]', { timeout: 10000 })
      .should("be.visible")
      .type("Admin");

    // 3. Isi Password
    cy.get('input[name="password"]').type("gowes123");

    // 4. Klik Masuk
    cy.get(".btn-login").click();

    // 5. Verifikasi berhasil masuk Dashboard
    cy.url().should("not.include", "/login");
    // Pastikan URL mengandung kata 'dashboard' atau 'admin'
    cy.url().should("include", "/admin");
    cy.contains("Dashboard").should("exist");
  });
});
