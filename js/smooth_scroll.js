const collapsibleButtons = document.querySelectorAll('.collapsible');

         // Add click event listener to each collapsible button
         collapsibleButtons.forEach(button => {
             button.addEventListener('click', function() {
                 // Toggle active class on the button
                 this.classList.toggle('active');
                 
                 // Get the content associated with this button
                 const content = this.nextElementSibling;
                 
                 // Toggle active class on the content
                 content.classList.toggle('active');
                 
                 // If content is being expanded, wait for transition to end, then scroll down
                 if (content.classList.contains('active')) {
                     content.style.maxHeight = content.scrollHeight + "px"; // Expand content
                     content.addEventListener('transitionend', function() {
                         window.scrollBy({
                             top: content.getBoundingClientRect().top, // Scroll to top of expanded content
                             behavior: 'smooth'
                         });
                     }, { once: true });
                 }
             });
         });