// Fungsi untuk membuat elemen input checkbox secara dinamis
function buatCheckboxMakanan(namaMakanan, harga) {
    const form = document.getElementById('formPesanan');
    const label = document.createElement('label');
    const input = document.createElement('input');
    label.textContent = `${namaMakanan} (Rp ${harga})`;
    input.type = 'checkbox';
    input.name = namaMakanan;
    label.appendChild(input);
    form.appendChild(label);
}

// Fungsi untuk menampilkan pesanan di console
function tampilkanPesanan() {
    const form = document.getElementById('formPesanan');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    let pesanan = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            pesanan.push(checkbox.name);
        }
    });

    console.log('Pesanan Anda:', pesanan);
}

// Memanggil fungsi untuk membuat checkbox makanan secara dinamis
buatCheckboxMakanan('Ayam Geprek', 15000);
buatCheckboxMakanan('Rendang', 20000);
buatCheckboxMakanan('Mie Ayam', 12000);
buatCheckboxMakanan('Jus Avocado', 5000);

   
