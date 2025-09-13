document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    // Eco-Impact Dashboard Functionality
    const devicesSavedElement = document.getElementById('devicesSaved');
    const eWasteDivertedElement = document.getElementById('eWasteDiverted');
    const energyConservedElement = document.getElementById('energyConserved');
    const co2ReducedElement = document.getElementById('co2Reduced');

    // Initial values (these can be fetched from a backend or local storage in a real application)
    let devicesSaved = 128;
    let eWasteDiverted = 256;
    let energyConserved = 1200;
    let co2Reduced = 340;

    // Function to update the dashboard values
    function updateDashboard() {
      devicesSavedElement.textContent = `${devicesSaved} devices`;
      eWasteDivertedElement.textContent = `${eWasteDiverted} kg`;
      energyConservedElement.textContent = `${energyConserved} kWh`;
      co2ReducedElement.textContent = `${co2Reduced} kg`;
    }

    // Call updateDashboard initially to display the values
    updateDashboard();

    // Example: Simulate an update after a few seconds
    // In a real application, these values would be updated based on user actions
    // or data fetched from a server.
    setTimeout(() => {
      devicesSaved += 5; // Example: 5 more devices saved
      eWasteDiverted += 10; // Example: 10 more kg of e-waste diverted
      energyConserved += 50; // Example: 50 more kWh conserved
      co2Reduced += 15; // Example: 15 more kg of CO2 reduced
      updateDashboard();
      console.log("Eco-Impact Dashboard updated with new simulated data!");
    }, 5000); // Update after 5 seconds
  });