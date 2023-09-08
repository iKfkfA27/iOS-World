document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("dropdown");

    // Event listener for dropdown change event
    dropdown.addEventListener("change", function () {
        const selectedValue = dropdown.value;

        // Define URL mappings for options
        const urlMap = {
            "ESign": "https://vvv.eco/install/esign",
            "Scarlet": "https://vvv.eco/install/scarlet",
            "GBox": "https://vvv.eco/install/gbox"
        };

        // Check if the selected option has a corresponding URL
        if (urlMap[selectedValue]) {
            // Ask for confirmation before redirecting
            const confirmation = confirm(`Do you want to install the application "${selectedValue}"?`);
            
            if (confirmation) {
                // Redirect to the selected URL
                window.location.href = urlMap[selectedValue];
            }
        }
    });

    // Event listener for clicking the Discord icon
    const discordIcon = document.getElementById("icon");
    discordIcon.addEventListener("click", function () {
        // Show an alert when clicking the Discord icon
        const joinConfirmation = confirm("Do you want to join iOS World?");
        
        if (joinConfirmation) {
            // Redirect to the Discord server URL
            window.location.href = "https://discord.com/invite/iosworld?locale=tr";
        }
    });
});