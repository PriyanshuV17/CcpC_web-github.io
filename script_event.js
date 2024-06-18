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
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

// Hide all slides except the first one
for (var i = 1; i < slides.length; i++) {
    slides[i].style.display = 'none';
}

var slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds

function nextSlide() {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Check if the image loads successfully
    var img = new Image();
    img.onload = function() {
        // Show the slide if the image loads successfully
        slides[currentSlide].style.display = 'block';
    };
    img.onerror = function() {
        // If the image fails to load, move to the next slide
        nextSlide();
    };
    img.src = slides[currentSlide].src;
}
