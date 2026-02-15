import { generateQR } from "./generateQR.js";

const input = document.getElementById("qrInput");

export const inputListener = function() {
  input.addEventListener("input", generateQR);
  input.addEventListener("change", generateQR);
}

export const settingsListener = function() {
  const handler = () => generateQR();
  // Size
  const sizeInput = document.getElementById("qrSize");
  if (sizeInput) {
    sizeInput.addEventListener("input", handler);
    sizeInput.addEventListener("change", handler);
  }
  // Padding
  const paddingInput = document.getElementById("qrPadding");
  if (paddingInput) {
    paddingInput.addEventListener("input", handler);
    paddingInput.addEventListener("change", handler);
  }
  // Foreground color
  const colorInput = document.getElementById("qrColor");
  if (colorInput) {
    colorInput.addEventListener("input", handler);
    colorInput.addEventListener("change", handler);
  }
  // Background color
  const bgColorSelect = document.getElementById("qrBgColor");
  if (bgColorSelect) {
    bgColorSelect.addEventListener("change", handler);
  }
  // Format (PNG / SVG)
  const formatRadios = document.querySelectorAll('input[name="format"]');
  formatRadios.forEach(radio => {
    radio.addEventListener("change", handler);
  });
}