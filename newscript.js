// Define the quotes for each image
const quotes = {
    1: "Yentii na face meedha click chesthav...Friend ani vadhilesthunna",
    2: "Vachadayya !! Yem ledhu I am Innocent ani chepdhamani 😎",
    3: "You’re still the coolest person I know, even if you’re getting older! 😎🎂",
    4:  "Motivation kavala nayana!! Time is proportion to money ,Invest time on valuable things ...Aah valuable things example cheppana neney its MEE 😁 ",
    5: "Don't do drama to get things from others ..Be yourself",
    6: "Be funnier, even when I am angry and foolish 😜",
    7: "Last one ... A small Story .. I came through this message from my family group..Everyone likes butterfly but not caterpillar, at one stage u will also become butterfly wait Karoh for that moment..Dont panic and dont stress in your life  <3 .. E quote ayitey mandhey -> Dont judge people by their looks and actions like caterpillar they will also become butterflies in their lives :)",
    8: "Okati cheppali ..I lied in my 3-1 My grade is not 7.98 ..I got 8.61 .. Happy birthday Dear Birthday Partner"
    };

// Get all the images and the quote container
const images = document.querySelectorAll(".quote-image");
const quoteContainer = document.getElementById("quoteContainer");
const quoteText = document.getElementById("quoteText");

// Add click event listeners to each image
images.forEach(image => {
    image.addEventListener("click", function() {
        // Get the quote number from the data-quote attribute
        const quoteNumber = this.getAttribute("data-quote");

        // Set the quote text based on the clicked image
        quoteText.textContent = quotes[quoteNumber];

        // Show the quote container with fade-in effect
        quoteContainer.style.display = "block";
        quoteContainer.style.opacity = 1;

        // Hide the quote container after 5 seconds
        setTimeout(() => {
            quoteContainer.style.opacity = 0;
            setTimeout(() => {
                quoteContainer.style.display = "none";
            }, 1000); // Allow time for fading out
        }, 20000); // Quote stays visible for 5 seconds
    });
});


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
