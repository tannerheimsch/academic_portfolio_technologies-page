const collapsibleButtons = document.querySelectorAll('.collapsible');

collapsibleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonTopOffset = button.getBoundingClientRect().top + window.scrollY;
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.addEventListener('transitionend', function transitionHandler() {
                window.scrollTo({
                    top: buttonTopOffset,
                    behavior: 'smooth'
                });
                content.removeEventListener('transitionend', transitionHandler);
            });
        } else {
            content.style.maxHeight = null;
        }
    });
});
