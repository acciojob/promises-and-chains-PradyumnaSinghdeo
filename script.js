//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting in the default way
  
  // Get the values from the inputs
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Simple validation to check if the inputs are empty
  if (name === '' || age === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Creating a promise to handle the form submission
  const ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry, ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 seconds delay
  });

  // Handling the promise resolution or rejection
  ageCheckPromise
    .then((message) => {
      alert(message); // Show success message if age >= 18
    })
    .catch((error) => {
      alert(error); // Show error message if age < 18
    });
});
