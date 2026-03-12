<script>
  // 1. INISIALISASI ANIMASI (AOS)
  // Membuat elemen muncul perlahan saat di-scroll
  AOS.init({
    duration: 1000, // Kecepatan animasi (1 detik)
    once: true,     // Animasi hanya jalan sekali saat scroll pertama
    offset: 100     // Animasi mulai muncul 100px sebelum elemen terlihat
  });

  // 2. FITUR DARK MODE
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');

  // Cek apakah user sebelumnya sudah pilih dark mode (tersimpan di browser)
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    // Tambah/hapus class dark-theme di body
    document.body.classList.toggle('dark-theme');
    
    // Ganti ikon bulan/matahari
    if (document.body.classList.contains('dark-theme')) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark'); // Simpan pilihan
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // 3. FITUR KONTAK WHATSAPP (MODAL)
  const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  
  // Fungsi untuk buka modal saat tombol "Hubungi Saya" diklik
  function openContact() {
    contactModal.show();
  }

  // Logika kirim pesan
  document.getElementById('waForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh
    
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message').value;
    const phone = "6281374323620"; // Nomor WA kamu
    
    // Buat link WhatsApp otomatis
    const waUrl = `https://wa.me/${phone}?text=Halo Syabil, saya *${name}*. %0A%0A${encodeURIComponent(msg)}`;
    
    // Buka tab baru ke WhatsApp
    window.open(waUrl, '_blank');
    
    // Tutup modal setelah kirim
    contactModal.hide();
    this.reset(); // Kosongkan form lagi
  });

  // BONUS: Fitur Smooth Header (Glow saat scroll)
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.hero');
    if (window.scrollY > 100) {
      header.style.transition = "0.5s";
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
      header.style.boxShadow = "none";
    }
  });
</script>