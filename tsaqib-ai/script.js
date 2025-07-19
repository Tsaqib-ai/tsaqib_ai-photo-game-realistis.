// File: script.js

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.hidden.md\\:flex');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('flex-col');
        mobileMenu.classList.toggle('absolute');
        mobileMenu.classList.toggle('top-16');
        mobileMenu.classList.toggle('right-0');
        mobileMenu.classList.toggle('bg-primary');
        mobileMenu.classList.toggle('p-4');
        mobileMenu.classList.toggle('shadow-lg');
        mobileMenu.classList.toggle('space-x-0');
        mobileMenu.classList.toggle('space-y-4');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const editorPreview = document.querySelector('.editor-preview');
    if (editorPreview) {
        editorPreview.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
        });

        editorPreview.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }
});
