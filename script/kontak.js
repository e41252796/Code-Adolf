
        document.addEventListener('DOMContentLoaded', function() {
            // Mengambil elemen form
            const form = document.getElementById('formKontak');
            
            // Saat form disubmit
            form.addEventListener('submit', function(event) {
                // Mencegah halaman reload (karena ini hanya demo frontend)
                event.preventDefault();

                // Memunculkan Modal Bootstrap
                const myModal = new bootstrap.Modal(document.getElementById('terimakasihModal'));
                myModal.show();

                // (Opsional) Mengosongkan isi form setelah dikirim
                form.reset();
            });
        });