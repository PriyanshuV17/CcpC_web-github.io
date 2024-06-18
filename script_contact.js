// Function to open WhatsApp
function openWhatsApp(phoneNumber) {
    window.open(`https://wa.me/${phoneNumber}`);
  }
  
  // Function to open email composition
  function composeEmail(emailAddress) {
    window.open(`mailto:${emailAddress}`);
  }
  
  // Add event listeners to phone number and email elements
  document.querySelectorAll('.phone-number').forEach(element => {
    element.addEventListener('click', function() {
      const phoneNumber = this.textContent.trim(); // Get the phone number text
  
      // Check if the phone number is valid
      if (/^\d+$/.test(phoneNumber)) {
        // Open WhatsApp with the phone number
        openWhatsApp(phoneNumber);
      } else {
        alert('Invalid phone number!');
      }
    });
  });
  
  document.querySelectorAll('.email-address').forEach(element => {
    element.addEventListener('click', function() {
      const emailAddress = this.textContent.trim(); // Get the email address text
  
      // Open email composition with the email address
      composeEmail(emailAddress);
    });
  });
  