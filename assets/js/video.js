var playButton = document.getElementById('play-video-button');
var videoModal = document.createElement('div');
videoModal.className = 'video-modal';
var videoContainer = document.createElement('div');
videoContainer.className = 'video-container';
var closeVideoButton = document.createElement('button');
closeVideoButton.className = 'close-video-button';
              
// closeVideoButton.textContent = 'Tutup';
            
var videoIframe = document.createElement('iframe');
// videoIframe.width = '220';
// videoIframe.height = '480';
videoIframe.src = 'https://www.youtube.com/embed/2xYJ9W9Wf2E';
videoIframe.frameBorder = '0';
videoIframe.allowFullscreen = true;
            
videoContainer.appendChild(videoIframe);
videoContainer.appendChild(closeVideoButton);
videoModal.appendChild(videoContainer);
            
// Variabel untuk menyimpan status pemutaran video
var isVideoPlaying = false;

// Fungsi untuk memunculkan modal video saat tombol "Putar Video" ditekan
function playVideo() {
  document.body.classList.add('modal-open'); // Tambahkan kelas 'modal-open' ke <body>
  document.body.appendChild(videoModal);
  videoModal.style.display = 'block';

    // Mulai memutar video hanya jika belum dimulai
    if (!isVideoPlaying) {
      videoIframe.src += '?autoplay=1';
      isVideoPlaying = true;
    }
}

// Fungsi untuk menutup modal video
function closeVideo() {
  videoModal.style.display = 'none';
  document.body.classList.remove('modal-open'); // Hapus kelas 'modal-open' dari <body>

  // Hentikan video saat modal ditutup
  videoIframe.src = videoIframe.src.replace('?autoplay=1', '');
  isVideoPlaying = false;
}
             
// Tambahkan event listener untuk tombol "Putar Video"
playButton.addEventListener('click', playVideo);
            
// Tambahkan event listener untuk menutup modal video saat tombol "Tutup" ditekan
closeVideoButton.addEventListener('click', closeVideo);

// Tambahkan event listener untuk menutup modal saat mengklik di luar modal
videoModal.addEventListener('click', function(event) {
  if (event.target === videoModal) {
    closeVideo(); // Tutup modal jika mengklik di luar area video
  }
});
