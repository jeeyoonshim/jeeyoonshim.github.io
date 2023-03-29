const elements = document.querySelectorAll('div.change'); // Get all div class 'change' elements
const sections = document.querySelectorAll('section');
const fonts = ['Barlow', 'Spectral']; // Array of fonts
const colors = ['#FFFFFF', '#36454F', '#0096FF', '#00008B', '#0000FF', '#A9A9A9']; // Array of colors

// Function to set random font and color for each element
function setRandomStyle() {
  elements.forEach(element => {
    //const randomFont = fonts[Math.floor(Math.random() * fonts.length)]; // Get random font
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Get random color
    //element.style.fontFamily = randomFont; // Set random font
    element.style['color'] = randomColor; // Set random color
  });
  //if() //if either element in this div id is == white, then skip to next color
  //const elements = document.querySelectorAll('div');
  //<html> <section></section></html>
}

setInterval(setRandomStyle, 2500); 