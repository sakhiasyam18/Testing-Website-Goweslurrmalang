describe("Skenario Update Sepeda Premium (Admin)", () => {
  it("Admin login dan update data sepeda Strattos S2", () => {
    // ------------------------------------------------
    // 1. LOGIN ADMIN
    // ------------------------------------------------
    cy.visit("http://127.0.0.1:8000/admin/login");

    // Isi username & password
    cy.get('input[name="name"]').type("Admin");
    cy.get('input[name="password"]').type("gowes123");

    // Klik tombol Masuk
    cy.get(".btn-login").click();

    // ------------------------------------------------
    // 2. MASUK DASHBOARD & DATA SEPEDA
    // ------------------------------------------------
    // Pastikan masuk dashboard dulu sesuai urutanmu
    // cy.visit("http://127.0.0.1:8000/admin/dashboard");
    cy.url().should("include", "/dashboard");

    // Pindah ke halaman Data Sepeda
    cy.visit("http://127.0.0.1:8000/admin/sepeda");
    cy.url().should("include", "/admin/sepeda");

    // ------------------------------------------------
    // 3. EDIT SEPEDA (LANGSUNG KE URL)
    // ------------------------------------------------
    // Robot langsung meluncur ke halaman edit SP001
    cy.visit("http://127.0.0.1:8000/admin/sepeda/SP001/edit");

    // ------------------------------------------------
    // 4. UBAH DATA (Nama & Status)
    // ------------------------------------------------

    // A. Ubah Nama: Kosongkan dulu (.clear), baru ketik "Strattos S2"
    cy.get("#Nama_Sepeda").clear().type("Strattos S2");

    // B. Ubah Status: Pilih "Dipinjam"
    cy.get("#Status_Sepeda").select("Dipinjam");

    // ------------------------------------------------
    // 5. SUBMIT (PERBARUI DATA)
    // ------------------------------------------------
    cy.get(".btn-warning").click();

    // ------------------------------------------------
    // 6. VERIFIKASI BERHASIL
    // ------------------------------------------------
    // Pastikan dikembalikan ke halaman tabel sepeda
    cy.url().should("include", "/admin/sepeda");

    // Pastikan statusnya sudah berubah jadi "Dipinjam" di tabel
    cy.contains("Dipinjam").should("exist");
  });
});
