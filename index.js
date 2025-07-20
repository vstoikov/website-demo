<script>
document.querySelectorAll('.project-gallery img').forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = function() {
        const modal = document.getElementById('imgModal');
        const modalImg = document.getElementById('modalImg');
        modal.style.display = 'block';
        modalImg.src = this.src;
    }
});

document.querySelector('.close').onclick = function() {
    document.getElementById('imgModal').style.display = 'none';
};

document.getElementById('imgModal').onclick = function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
};
</script>
