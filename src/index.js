document.addEventListener("DOMContentLoaded", () => {
  // your code here// Select the form element
const form = document.querySelector('form');

// Add an event listener for the 'submit' event
form.addEventListener('submit', (event) => {
  // Prevent the default behavior of form submission
  event.preventDefault();

  // Example: Extract input data and display a message
  const formData = new FormData(event.target); // Retrieve form data
  const name = formData.get('name'); // Example: Get an input field with name="name"
  
  console.log(`Form submitted by: ${name}`);
  alert(`Form submitted successfully, ${name}!`);
});

});
