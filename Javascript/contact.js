function validateForm(event) {
  event.preventDefault(); // Prevent form submission for validation

  // Get form values and trim whitespace
  var firstName = document.getElementById("name1").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("tel").value.trim();
  var message = document.getElementById("textmessage").value.trim();

  // Check if all fields are filled
  if (!firstName || !email || !phone || !message) {
    alert("All details must be filled.");
    return false;
  }

  // Validate email format
  if (email && !email.includes("@")) {
    wrongEmail.innerText = "Email is invalid!!";
    return false;
  }

  // Validate phone number (10 digits, numeric only)
  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be exactly 10 digits and numeric.");
    return false;
  }

  // Ensure message meets length requirement
  if (message.length < 10) {
    alert("Message should be at least 10 characters long.");
    return false;
  }

  // Success message and submit form
  alert(
    "Your message has been delivered. We'll get back to you as soon as possible"
  );
  event.target.submit(); // Submit the form after successful validation
}
