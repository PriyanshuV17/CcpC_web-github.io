function printSentenceWithBlinking(sentences) {
  const output = document.getElementById("word");
  let sentenceIndex = 0;
  let index = 0;
  let printInterval;

  function printWithBlinkingUnderscore() {
    const currentSentence = sentences[sentenceIndex];
    printInterval = setInterval(() => {
      if (index <= currentSentence.length) {
        if (index < currentSentence.length) {
          output.innerHTML = currentSentence.substring(0, index) + '<span class="blink">_</span>';
        } else {
          output.innerHTML = currentSentence.substring(0, index); // Ensure the full sentence is displayed before backspacing
        }
        index++;
      } else {
        clearInterval(printInterval);
        setTimeout(() => {
          removeBackward(currentSentence);
        }, 500); // Delay before backspacing starts
      }
    }, 200); // Adjust interval for faster printing
  }

  function removeBackward(sentence) {
    printInterval = setInterval(() => {
      if (index >= 0) {
        output.innerHTML = sentence.substring(0, index) + '<span class="blink">_</span>';
        index--;
      } else {
        clearInterval(printInterval);
        // Move to the next sentence
        sentenceIndex++;
        if (sentenceIndex >= sentences.length) {
          sentenceIndex = 0; // Reset to the first sentence
        }
        setTimeout(() => {
          index = 0;
          printWithBlinkingUnderscore(); // Print the next sentence
        }, 1000); // Delay before printing the next sentence
      }
    }, 100); // Adjust interval for faster backspacing
  }

  printWithBlinkingUnderscore(); // Start the initial printing
}

const sentences = [
  "CU_Jharkhand",
  "Let's go out of the CodeSpace"
  
  // Add more sentences as needed
];

printSentenceWithBlinking(sentences); // Call the function with the array of sentences

// for middle column

//error (page reload not fixed)[
// var slides = document.querySelectorAll('.slide');
// var currentSlide = 0;

// // Hide all slides except the first one
// for (var i = 1; i < slides.length; i++) {
//     slides[i].style.display = 'none';
// }

// var slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds

// function nextSlide() {
//     // Hide the current slide
//     slides[currentSlide].style.display = 'none';

//     // Move to the next slide
//     currentSlide = (currentSlide + 1) % slides.length;

//     // Check if the image loads successfully
//     var img = new Image();
//     img.onload = function() {
//         // Show the slide if the image loads successfully
//         slides[currentSlide].style.display = 'block';
//     };
//     img.onerror = function() {
//         // If the image fails to load, move to the next slide
//         nextSlide();
//     };
//     img.src = slides[currentSlide].src;
// }
//]
//


// for middle column

//error (page reload not fixed)[

// var slides = document.querySelectorAll('.slide');
// var currentSlide = 0;

// // Hide all slides except the first one
// for (var i = 1; i < slides.length; i++) {
//     slides[i].style.display = 'none';
// }

// var slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds

// function nextSlide() {
//     // Hide the current slide
//     slides[currentSlide].style.display = 'none';

//     // Move to the next slide
//     currentSlide = (currentSlide + 1) % slides.length;

//     // Create a new Image object
//     var img = new Image();

//     // Set up onload event handler to display the slide after image load
//     img.onload = function() {
//         // Show the slide after the image has loaded successfully
//         slides[currentSlide].style.display = 'block';
//     };

//     // Set up onerror event handler to handle image loading errors
//     img.onerror = function(e) {
//         // If the image fails to load, prevent the default action (e.g., page reload)
//         e.preventDefault();
//         // Log the error for debugging purposes
//         console.error('Failed to load image:', slides[currentSlide].src);
//         // Move to the next slide
//         nextSlide();
//     };

//     // Set the src attribute of the image
//     img.src = slides[currentSlide].src;
// }



// //]




//
// for middle column

//error (page reload fixed)[

// Select all slide elements
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval;

// Hide all slides except the first one
for (var i = 1; i < slides.length; i++) {
    slides[i].style.display = 'none';
}

// Function to handle changing slides
function nextSlide() {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides[currentSlide].style.display = 'block';
}

// Initial call to nextSlide to start the slideshow
nextSlide();

// Set the slideInterval to change slides automatically every 2 seconds
slideInterval = setInterval(nextSlide, 2000);

// Event listener to handle window resize
window.addEventListener('resize', function() {
    // Reset the current slide to the first slide
    currentSlide = 0;

    // Hide all slides except the first one
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = (i === 0) ? 'block' : 'none';
    }

    // Reset the slideInterval
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 2000);
});

// Event listener to handle errors (e.g., image loading errors)
window.addEventListener('error', function(e) {
    // Prevent the default action to avoid browser-specific error handling (e.g., page reload)
    e.preventDefault();
    // Log the error to the console for debugging purposes
    console.error('Error occurred:', e.error);
});



//]


// Events.html


// Fetch the content of the div from the source page
            // fetch('events.html')
            //     .then(response => response.text())
            //     .then(html => {
            //         // Create a temporary div to hold the content
            //         const tempDiv = document.createElement('div');
            //         tempDiv.innerHTML = html;
    
            //         // Get the content div from the temporary div
            //         const contentDiv = tempDiv.querySelector('#data-table');
    
            //         // Append the content div to the destination page
            //         document.getElementById('embeddedContent').appendChild(contentDiv);
            //     });
                // Fetch the content of the div from the source page
                fetch("events.html")
                .then(response => response.text())
                .then(html => {
                    // Create a temporary div to hold the content
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
    
                    // Get the content div from the temporary div
                    const contentDiv = tempDiv.querySelector('#data-table');
    
                    // Append the content div to the destination page
                    document.getElementById('embeddedContent').appendChild(contentDiv);
                });
