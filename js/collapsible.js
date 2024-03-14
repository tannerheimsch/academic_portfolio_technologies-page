const collapsibleButtons = document.querySelectorAll('.collapsible');

collapsibleButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.addEventListener('transitionend', function() {
                window.scrollBy({
                    top: content.getBoundingClientRect().top,
                    behavior: 'smooth'
                });
            }, { once: true });
        } else {
            content.style.maxHeight = null;
        }
    });
});
