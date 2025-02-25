function generateRandomHexColor() {
  // Function to generate a random value
  function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to convert to hex and pad to two digits
  function convertToHex(value) {
    return value.toString(16).padStart(2, '0');
  }

  // Generate random RGB values
  let R = generateRandomValue(0, 255);
  let G = generateRandomValue(0, 255);
  let B = generateRandomValue(0, 255);

  // Convert RGB values to hex
  let hexR = convertToHex(R);
  let hexG = convertToHex(G);
  let hexB = convertToHex(B);

  // Combine and return the full hex color code
  return `#${hexR}${hexG}${hexB}`;
}

console.log(generateRandomHexColor());

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

let changeColor;

startButton.addEventListener('click', function (e) {
  changeColor = setInterval(function () {
    document.body.style.backgroundColor = generateRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', function (e) {
  clearInterval(changeColor);
});
