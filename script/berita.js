document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('newsSlider');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Jarak scroll per klik (320px lebar kartu + 30px gap)
    const scrollAmount = 350; 

    if(nextBtn && prevBtn && slider) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});