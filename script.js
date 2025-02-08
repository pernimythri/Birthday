function createCrackers() {
    const crackerContainer = document.querySelector('.cracker-container');
    
    for (let i = 0; i < 100; i++) { // Generate 100 cracker elements
        let cracker = document.createElement('div');
        cracker.classList.add('cracker');
        // Random horizontal and vertical position for crackers
        cracker.style.left = `${Math.random() * 100}%`; 
        cracker.style.top = `${Math.random() * 100}%`; 
        // Random animation duration for each cracker
        cracker.style.animationDuration = `${Math.random() * 2 + 2}s`;
        
        // Append the cracker to the container
        crackerContainer.appendChild(cracker);
    }
}

// Trigger cracker effect on page load
window.onload = createCrackers;
