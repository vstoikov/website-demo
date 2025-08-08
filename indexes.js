  (function() {
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn  = overlay.querySelector('.lightbox-prev');
    const nextBtn  = overlay.querySelector('.lightbox-next');
    const galleryImgs = Array.from(document.querySelectorAll('.gallery-images img'));
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

    // attach click handlers
    galleryImgs.forEach((img, i) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openLightbox(i));
    });
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener ('click', showPrev);
    nextBtn.addEventListener ('click', showNext);

    // also close on overlay‑background click (but not if you click the img or arrows)
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeLightbox();
    });

    // keyboard navigation
    document.addEventListener('keydown', e => {
      if (overlay.style.display !== 'flex') return;
      if (e.key === 'ArrowLeft')  showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape')     closeLightbox();
    });
  })();
const items = document.querySelectorAll('nav ul li');
items.forEach(li => {
  let timeout;
  li.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    li.querySelector('ul').style.display = 'block';
  });
  li.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      li.querySelector('ul').style.display = 'none';
    }, 100); // 1 second
  });
});
/*scroll reveal */
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // optional: only animate once
      }
    });
  }, {
    threshold: 0.6 // adjust if needed
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
});
