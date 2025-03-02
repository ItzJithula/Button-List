        // Get references to the DOM elements we need to manipulate
        const loadingContainer = document.querySelector(".loading-container");
        const container = document.querySelector(".container");
        const percent = document.querySelector("#percent");
        const mainContent = document.querySelector(".main-content");

        // Display
        console.log("By Jithula Bhasitha")
        
        // Initialize the percentage counter
        let perVal = 0;
        
        // Set up the loading counter animation
        // This increases the percentage counter by 1 every 100ms
        let increment = setInterval(() => {
            // Increment the counter value
            perVal++;
            
            // Update the percentage text
            percent.textContent = `${perVal}%`;
            
            // When we reach 100%, clear the interval and trigger the transition
            if (perVal == 100) {
                // Stop the counter
                clearInterval(increment);
                
                // Short delay before transitioning to the main content
                setTimeout(() => {
                    // Hide the loading animation
                    loadingContainer.classList.add("hidden");
                    
                    // Show the main content with a fade-in effect
                    mainContent.classList.add("visible");
                    
                    // After the loading animation is completely gone, remove it from the DOM flow
                    setTimeout(() => {
                        loadingContainer.style.display = "none";
                    }, 500);
                }, 500);
            }
        }, 30); // Adjusted to 30ms for a faster loading experience (about 3 seconds total)
