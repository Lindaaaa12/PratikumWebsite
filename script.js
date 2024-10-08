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

// Contoh pemanggilan fungsi untuk membuat checkbox makanan secara dinamis
buatCheckboxMakanan('Nasi Goreng', 15000);
// Tambahkan pemanggilan fungsi untuk menu makanan lainnya
