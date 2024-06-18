//Funtions for Members page Start from here-------->>>>
// // Function to switch to Members content
// document.getElementById('membersButton').addEventListener('click', function() {
//   document.getElementById('alumniContent').classList.remove('active');
//   document.getElementById('membersContent').classList.add('active');

//   // Change text properties of buttons
//   document.getElementById('alumniButton').style.textShadow = ''; // Reset text-shadow
//   document.getElementById('alumniButton').style.color = ''; // Reset color
//   document.getElementById('membersButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
//   document.getElementById('membersButton').style.color = 'rgb(255, 253, 253)'; // Change color
// });

// // Function to switch to Alumni content
// document.getElementById('alumniButton').addEventListener('click', function() {
//   document.getElementById('membersContent').classList.remove('active');
//   document.getElementById('alumniContent').classList.add('active');

//   // Change text properties of buttons
//   document.getElementById('membersButton').style.textShadow = ''; // Reset text-shadow
//   document.getElementById('membersButton').style.color = ''; // Reset color
//   document.getElementById('alumniButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
//   document.getElementById('alumniButton').style.color = 'rgb(255, 253, 253)'; // Change color
// });

// // Set the Members content to be visible by default
// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('membersContent').classList.add('active');

//   // Apply text properties to the Members button by default
//   document.getElementById('membersButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)';
//   document.getElementById('membersButton').style.color = 'rgb(255, 253, 253)';
// });
// Function to switch to Members content
// Function to switch to Members content
// document.getElementById('membersButton').addEventListener('click', function() {
//     document.getElementById('alumniContent').classList.remove('active');
//     document.getElementById('membersContent').classList.add('active');
    
//     // Remove content from middle-top div
//     document.querySelector('.middle-top').innerHTML = '';
  
//     // Change text properties of buttons
//     document.getElementById('alumniButton').style.textShadow = ''; // Reset text-shadow
//     document.getElementById('alumniButton').style.color = ''; // Reset color
//     document.getElementById('membersButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
//     document.getElementById('membersButton').style.color = 'rgb(255, 253, 253)'; // Change color
//   });
  
//   // Function to switch to Alumni content
//   document.getElementById('alumniButton').addEventListener('click', function() {
//     document.getElementById('membersContent').classList.remove('active');
//     document.getElementById('alumniContent').classList.add('active');
    
//     // Remove content from middle-top div
//     document.querySelector('.middle-top').innerHTML = '';
  
//     // Change text properties of buttons
//     document.getElementById('membersButton').style.textShadow = ''; // Reset text-shadow
//     document.getElementById('membersButton').style.color = ''; // Reset color
//     document.getElementById('alumniButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
//     document.getElementById('alumniButton').style.color = 'rgb(255, 253, 253)'; // Change color
//   });
  
  
//   // Initially hide both contents
//   document.getElementById('membersContent').classList.remove('active');
//   document.getElementById('alumniContent').classList.remove('active');
  
//   // Apply text properties to the Members button by default
//   document.getElementById('membersButton').style.textShadow = '';
//   document.getElementById('membersButton').style.color = '';
  
//   // Apply text properties to the Alumni button by default
//   document.getElementById('alumniButton').style.textShadow = '';
//   document.getElementById('alumniButton').style.color = '';
  
//   // Function to handle click event for members button
// document.getElementById('membersButton').addEventListener('click', function() {
//   // Remove default content
//   document.querySelector('.default.content').style.display = 'none';
//   // Show members content
//   document.getElementById('alumniContent').classList.remove('active');
//   document.getElementById('membersContent').classList.add('active');

//   // Change text properties of buttons
//   document.getElementById('alumniButton').style.textShadow = ''; // Reset text-shadow
//   document.getElementById('alumniButton').style.color = ''; // Reset color
//   document.getElementById('membersButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
//   document.getElementById('membersButton').style.color = 'rgb(255, 253, 253)'; // Change color
// });

// // Function to handle click event for alumni button
// document.getElementById('alumniButton').addEventListener('click', function() {
//   // Remove default content
//   document.querySelector('.default.content').style.display = 'none';
//   // Show alumni content
//   document.getElementById('membersContent').classList.remove('active');
//   document.getElementById('alumniContent').classList.add('active');

//   // Change text properties of buttons
//   document.getElementById('membersButton').style.textShadow = ''; // Reset text-shadow
//   document.getElementById('membersButton').style.color = ''; // Reset color
//   document.getElementById('alumniButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
//   document.getElementById('alumniButton').style.color = 'rgb(255, 253, 253)'; // Change color
// });

// // Initially hide both contents
// document.getElementById('membersContent').classList.remove('active');
// document.getElementById('alumniContent').classList.remove('active');

// // Apply text properties to the Members button by default
// document.getElementById('membersButton').style.textShadow = '';
// document.getElementById('membersButton').style.color = '';

// // Apply text properties to the Alumni button by default
// document.getElementById('alumniButton').style.textShadow = '';
// document.getElementById('alumniButton').style.color = '';
// Function to switch to Members content
// Function to handle button clicks
function handleButtonClick(clickedButtonId, contentToShowId, contentToHideId) {
  // Remove 'active' class from the content to hide
  document.getElementById(contentToHideId).classList.remove('active');
  // Add 'active' class to the content to show
  document.getElementById(contentToShowId).classList.add('active');

  // Apply styles to differentiate buttons only if there's content to show
  if (contentToShowId === 'membersContent' || contentToShowId === 'alumniContent') {
    document.getElementById('membersButton').classList.toggle('active-button', clickedButtonId === 'membersButton');
    document.getElementById('alumniButton').classList.toggle('active-button', clickedButtonId === 'alumniButton');
  }

  // Remove default content when a button is clicked
  document.querySelector('.default-content').style.display = 'none';
}

// Add event listener to the Members button
document.getElementById('membersButton').addEventListener('click', function() {
  handleButtonClick('membersButton', 'membersContent', 'alumniContent');
});

// Add event listener to the Alumni button
document.getElementById('alumniButton').addEventListener('click', function() {
  handleButtonClick('alumniButton', 'alumniContent', 'membersContent');
});

// Initially hide both contents
document.getElementById('membersContent').classList.remove('active');
document.getElementById('alumniContent').classList.remove('active');
