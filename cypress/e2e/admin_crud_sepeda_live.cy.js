describe("Case 4: Admin CRUD Sepeda (Live)", () => {
  // Login dulu sebelum setiap tes dijalankan
  beforeEach(() => {
    cy.visit(
      "https://capstone-dtei.um.ac.id/goweslurrmalang/public/admin/login",
      { failOnStatusCode: false }
    );

    // === JURUS ANTI CLOUDFLARE ===
    // (Kamu harus Resume manual setiap kali tes baru mulai)
    cy.pause();

    cy.get('input[name="name"]').type("Admin");
    cy.get('input[name="password"]').type("gowes123");
    cy.get(".btn-login").click();
  });

  it("A. Tambah Sepeda Baru", () => {
    cy.visit(
      "https://capstone-dtei.um.ac.id/goweslurrmalang/public/admin/sepeda"
    );

    // Klik Tombol Tambah (Sesuaikan text tombolnya, biasanya "Tambah Data" atau icon +)
    cy.contains("Tambah").click();

    // Isi Form Tambah (Sesuaikan ID form di website live)
    cy.get('input[name="nama_sepeda"]').type("Sepeda Test Cypress");
    cy.get('select[name="kategori"]').select("Sepeda Reguler"); // Contoh
    cy.get('select[name="status"]').select("Tersedia");

    // Upload Gambar (Wajib ada file gambar di fixtures)
    cy.get('input[type="file"]').selectFile(
      "cypress/fixtures/bukti_transfer.jpg"
    );

    // Submit
    cy.get('button[type="submit"]').click();
  });

  it("B. Edit Sepeda (Strattos S2)", () => {
    cy.visit(
      "https://capstone-dtei.um.ac.id/goweslurrmalang/public/admin/sepeda"
    );

    // Cari Sepeda Strattos S2 lalu klik Edit
    // (Atau langsung visit URL editnya kalau tau ID-nya, misal /admin/sepeda/SP001/edit)
    cy.contains("tr", "Strattos S2").find("a, button").first().click();

    // Ubah Status jadi Dipinjam
    cy.get("#Status_Sepeda").select("Dipinjam");

    // Simpan
    cy.get(".btn-warning").click(); // Tombol Update
  });

  it("C. Hapus Sepeda", () => {
    // HATI-HATI: Script ini akan menghapus data beneran!
    cy.visit(
      "https://capstone-dtei.um.ac.id/goweslurrmalang/public/admin/sepeda"
    );

    // Contoh: Menghapus sepeda yang namanya "Sepeda Test Cypress"
    cy.contains("tr", "Sepeda Test Cypress").find(".btn-danger").click(); // Asumsi tombol hapus warna merah (danger)

    // Konfirmasi Alert (Biasanya browser tanya "Are you sure?")
    cy.on("window:confirm", () => true);
  });
});
