  (function() {
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn  = overlay.querySelector('.lightbox-prev');
    const nextBtn  = overlay.querySelector('.lightbox-next');

    // Grab all gallery images
    const galleryImgs = Array.from(
      document.querySelectorAll('.project-gallery img')
    );
    let currentIndex = 0;

    function openLightbox(idx) {
      currentIndex = idx;
      lightboxImg.src = galleryImgs[idx].src;
      overlay.style.display = 'flex';
    }

    function closeLightbox() {
      overlay.style.display = 'none';
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
      lightboxImg.src = galleryImgs[currentIndex].src;
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % galleryImgs.length;
      lightboxImg.src = galleryImgs[currentIndex].src;
    }

    // Attach handlers
    galleryImgs.forEach((img, i) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openLightbox(i));
    });
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Close when clicking outside the image
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeLightbox();
    });

    // Keyboard: ← → Esc
    document.addEventListener('keydown', e => {
      if (overlay.style.display !== 'flex') return;
      if (e.key === 'ArrowLeft')  showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape')     closeLightbox();
    });
  })();