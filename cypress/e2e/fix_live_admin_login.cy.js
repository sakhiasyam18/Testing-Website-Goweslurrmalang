describe("Skenario Login Admin Goweslur", () => {
  it("Berhasil login dengan akun Admin yang benar", () => {
    // 1. Buka halaman login admin
    cy.visit(
      "https://capstone-dtei.um.ac.id/goweslurrmalang/public/admin/login",
      { failOnStatusCode: false }
    );

    // ============================================================
    // JURUS PAMUNGKAS: PAUSE (Robot Berhenti Dulu)
    // Robot akan diam di sini.
    // TUGAS KAMU:
    // 1. Klik kotak "Verify you are human" secara manual.
    // 2. Tunggu sampai loading selesai dan KOTAK USERNAME MUNCUL.
    // 3. Kalau sudah muncul, lihat tombol "Resume" (Tombol Play >)
    //    di bagian atas aplikasi Cypress, lalu KLIK TOMBOL ITU.
    // ============================================================
    cy.pause();

    // 2. Isi Username
    // (Script ini baru jalan setelah kamu klik Resume)
    cy.get('input[name="name"]').type("Admin");

    // 3. Isi Password
    cy.get('input[name="password"]').type("gowes123");

    // 4. Klik Masuk
    cy.get(".btn-login").click();

    // 5. Verifikasi berhasil masuk Dashboard
    cy.url().should("not.include", "/login");
    cy.contains("Dashboard").should("exist");
  });
});
