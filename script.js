// Fungsi untuk menandai menu aktif berdasarkan halaman saat ini
document.addEventListener('DOMContentLoaded', function() {
    // Ambil nama file dari URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Hapus kelas active dari semua link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        
        // Tambahkan kelas active jika link sesuai dengan halaman saat ini
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Simulasi pencarian
    const searchInput = document.getElementById('searchSiswa');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            console.log('Mencari:', this.value);
            // Di sini bisa ditambahkan logika pencarian yang sesungguhnya
        });
    }
    
    // Form submission untuk prestasi
    const achievementForm = document.querySelector('.achievement-form');
    if (achievementForm) {
        achievementForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Prestasi berhasil disimpan!');
            this.reset();
        });
    }
    
    // Filter data nilai
    const filterBtn = document.querySelector('.filter-section .btn-primary');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            const kelas = document.getElementById('kelas').value;
            const mapel = document.getElementById('mapel').value;
            alert(`Menerapkan filter:\nKelas: ${kelas}\nMata Pelajaran: ${mapel}`);
        });
    }
    
    // Konfirmasi penghapusan data
    const deleteButtons = document.querySelectorAll('.btn-danger');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                // Di sini bisa ditambahkan logika penghapusan data
                const row = this.closest('tr');
                row.style.backgroundColor = '#ffeaea';
                setTimeout(() => {
                    row.remove();
                }, 500);
            }
        });
    });
    
    // Tambah animasi hover pada stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});