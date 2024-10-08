// Fungsi untuk menampilkan hasil pesanan di dalam console
function tampilkanPesanan() {
  // Mengambil semua checkbox yang dipilih
  const checkboxes = document.querySelectorAll('input[name="menu"]:checked');
  
  let pesanan = [];
  let totalHarga = 0;

  // Looping setiap checkbox yang dipilih
  checkboxes.forEach((checkbox) => {
    const menu = checkbox.value;
    const harga = parseInt(checkbox.getAttribute('data-price'));

    // Menambahkan item pesanan ke array pesanan dan menghitung total harga
    pesanan.push(menu);
    totalHarga += harga;
  });

  // Menampilkan hasil pesanan di console
  if (pesanan.length > 0) {
    console.log("Anda memesan:", pesanan.join(", "));
    console.log("Total harga: Rp", totalHarga);
  } else {
    console.log("Silakan pilih setidaknya satu menu.");
  }
}



   
