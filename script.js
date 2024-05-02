document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const btnContainer = document.querySelector('.btn-container');

    dropdown.addEventListener('click', function() {
        if (btnContainer.style.display === 'none') {
            gsap.to(btnContainer, {duration: 0.5, display: 'block', opacity: 1, ease: "power2.out"});
            dropdown.style.display = 'none'; // Hide the dropdown when button container is displayed
        } else {
            gsap.to(btnContainer, {duration: 0.5, display: 'none', opacity: 0, ease: "power2.out"});
            dropdown.style.display = 'block'; // Show the dropdown when button container is hidden
        }
    });
});