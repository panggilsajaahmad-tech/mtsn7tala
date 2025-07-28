document.getElementById('formKontak').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan berhasil dikirim! Terima kasih telah menghubungi kami.');
});

// Animasi scroll fade-in
const fadeElements = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Notifikasi kirim form
document.getElementById('formKontak').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan berhasil dikirim! Terima kasih telah menghubungi kami.');
});
