export const settings = function () {
  const size = document.getElementById("qrSize").value || 256;
  const padding = document.getElementById("qrPadding").value || 0;
  const color = document.getElementById("qrColor").value || "black";
  const bgColor = document.getElementById("qrBgColor").value;
  const format = document.querySelector('input[name="format"]:checked')?.value ?? 'svg';
  return {size, padding, color, bgColor, format}
}