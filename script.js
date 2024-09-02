// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Placeholder for sending the data to the server or processing the form
    alert(`Thank you, ${name}! Your message has been sent.`);
  
    // Clear the form after submission
    document.getElementById('contact-form').reset();
  });
  