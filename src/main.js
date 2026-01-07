function generateQR() {
  const input = document.getElementById("qrInput").value.trim();
  const container = document.getElementById("qrContainer");

  if (!input) {
    container.innerHTML = "<p style='color:red;margin-top:20px;'>Please enter text or a URL.</p>";
    return;
  }

  container.innerHTML = "";

  const qrCanvas = document.createElement("canvas");
  container.appendChild(qrCanvas);

  new QRious({
    element: qrCanvas,
    value: input,
    size: 256,
    backgroundAlpha: 0,
    level: "H",
  });

  const downloadBtn = document.createElement("a");
  downloadBtn.innerText = "Download QR Code";
  downloadBtn.style = `
            display:inline-block;
            margin-top:20px;
            padding:10px 16px;
            background:#111;
            color:#fff;
            border-radius:5px;
            text-decoration:none;
            font-size:16px;
        `;
  downloadBtn.download = "qr-code.png";
  downloadBtn.href = qrCanvas.toDataURL("image/png");

  container.appendChild(downloadBtn);
}
