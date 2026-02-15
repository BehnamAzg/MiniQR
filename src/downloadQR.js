import { currentFormat, currentSvgString } from "./generateQR.js";

const container = document.getElementById("qrContainer");

function triggerDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export const downloadQR = function() {
  if (currentFormat === 'svg' && currentSvgString) {
    const blob = new Blob([currentSvgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, 'qrcode.svg');
    URL.revokeObjectURL(url);
  } else {
    const canvas = container.querySelector('canvas');
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      triggerDownload(dataUrl, 'qrcode.png');
    }
  }
};













/*
downloadBtn.addEventListener('click', () => {
  const format = document.querySelector('input[name="format"]:checked')?.value ?? 'png';

  if (format === 'png') {
    const dataUrl = qrCanvas.toDataURL('image/png');
    download(dataUrl, 'qrcode.png', 'image/png');
  } else { // svg
    const svgContent = // from QRCode.toString or stored ;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    download(url, 'qrcode.svg', 'image/svg+xml');
    URL.revokeObjectURL(url);
  }
});

function download(url, filename, mime) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.type = mime;
  a.click();
}
*/