console.log("Website UKM Robotika Siap!");

const tombolGabung = document.querySelector('.tombol-merah');

if (tombolGabung) {
    tombolGabung.addEventListener('click', function() {
        alert("Terima kasih atas minat Anda! Silahkan hubungi kontak di bawah.");
    });
}