const lengthInput = document.getElementById("length");
const widthInput = document.getElementById("width");
const perimeterSpan = document.getElementById("perimeter");
const areaSpan = document.getElementById("area");
const diagonalSpan = document.getElementById("diagonal");
const lengthError = document.getElementById("errorLength");
const widthError = document.getElementById("errorWidth");

lengthInput.addEventListener("input", calculateRectangle);
widthInput.addEventListener("input", calculateRectangle);

function calculateRectangle() {
     const length = parseFloat(lengthInput.value);
     const width = parseFloat(widthInput.value);
     
     if (length > 0 && width > 0) {
          const perimeter = 2 * (length + width);
          const area = length * width;
          const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
     
          perimeterSpan.textContent = perimeter.toFixed(2);
          areaSpan.textContent = area.toFixed(2);
          diagonalSpan.textContent = diagonal.toFixed(2);
     } else {
          perimeterSpan.textContent = null;
          areaSpan.textContent = null;
          diagonalSpan.textContent = null;
     }
}