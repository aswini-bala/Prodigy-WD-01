// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Show alert on successful booking
        alert('Your table is booked successfully!');

        // Optionally, here you can add code to send the form data to your server or process it as needed.

        // Reset form fields after submission
        document.getElementById('bookingForm').reset();
    });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent page reload on form submission
    alert('Thank you! Your message has been sent.');
});

