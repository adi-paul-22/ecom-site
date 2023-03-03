// Get all the plus and minus buttons
const minusButtons = document.querySelectorAll('.minus-btn');
const plusButtons = document.querySelectorAll('.plus-btn');

// Add click event listener to each minus button
minusButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the associated input field
    const inputField = this.parentElement.querySelector('input[type="text"]');
    // Get the current value of the input field
    let inputValue = inputField.value;
    // Convert value to integer
    inputValue = parseInt(inputValue);
    // If the value is greater than 1, decrease it by 1
    if (inputValue > 1) {
      inputValue--;
    }
    // Update the input field value
    inputField.value = inputValue;
  });
});

// Add click event listener to each plus button
plusButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the associated input field
    const inputField = this.parentElement.querySelector('input[type="text"]');
    // Get the current value of the input field
    let inputValue = inputField.value;
    // Convert value to integer
    inputValue = parseInt(inputValue);
    // Increase the value by 1
    inputValue++;
    // Update the input field value
    inputField.value = inputValue;
  });
});
