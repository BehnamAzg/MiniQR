import QRCode from "qrcode";

import { settings } from "./settings.js";

const container = document.getElementById("qrContainer");
const downloadBtn = document.getElementById("downloadBtn");

export let currentFormat = "png";
export let currentSvgString = null;

export const generateQR = async function () {
  const input = document.getElementById("qrInput").value.trim();

  if (!input) {
    container.innerHTML = `
      <svg class="h-12 w-12 opacity-25" fill="currentColor" stroke="currentColor">
        <use href="/MiniQR/logo.svg"></use>
      </svg>
    `;
    downloadBtn.disabled = true;
    currentSvgString = null;
    return;
  }

  const options = settings();

  const size = Number(options.size) || 256;
  const margin = Math.max(0, Number(options.padding) || 0);
  const format = options.format || "png";

  currentFormat = format;

  const qrOptions = {
    errorCorrectionLevel: "H",
    margin: margin,
    width: size,
    color: {
      dark: options.color || "#000000ff",
      light: options.bgColor || "#ffffffff",
    },
  };

  try {
    if (format === "svg") {
      const svgString = await QRCode.toString(input, {
        ...qrOptions,
        type: "svg",
      });

      container.innerHTML = `<div id="qr-wrapper">${svgString}</div>`;
      currentSvgString = svgString;

    } else {
      container.innerHTML = "";

      const canvas = document.createElement("canvas");

      await QRCode.toCanvas(canvas, input, qrOptions);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.imageRendering = "pixelated";

      container.appendChild(canvas);
      currentSvgString = null;
    }

    downloadBtn.disabled = false;

  } catch (err) {
    console.error("QR generation failed:", err);
    container.innerHTML = '<p class="text-sm font-semibold text-center bg-red-300 p-2 rounded-md">Error!</p>';
    downloadBtn.disabled = true;
  }
};