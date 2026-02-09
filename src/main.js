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

const testGenerateQR = function () {
  // every time a change occures in the textarea input or other inputs -> then run this function so that it generates the QR on the fly 

  const container = document.getElementById("qrContainer");
  const input = document.getElementById("qrInput").value.trim();
  const size = document.getElementById("qrSize").value || 256;
  const padding = document.getElementById("qrPadding").value || 0;
  const color = document.getElementById("qrColor").value || "black"; // check
  const bgColor = document.getElementById("qrBgColor").value; // put transparent
  // const format = document.querySelector('[name="format"]').checked;
  const downloadBtn = document.querySelector('[name="download-button"]');
  // how to get an ellement by its data atribute?
  // how to add and remove "disabled" from a button.

  if (input) {
    // put the QR in the container
  } else {
    container.innerHTML = `
      <svg class="h-12 w-12 opacity-25" fill="currentColor" stroke="currentColor">
        <use href="/logo.svg"></use>
      </svg>
    `
  }

  // console.log(format, downloadBtn);

  const qrCanvas = document.createElement("canvas");
  container.appendChild(qrCanvas);

  new QRious({
    element: qrCanvas,
    value: input,
    size: size,
    backgroundAlpha: 0,
    level: "H",
  });
};

const pngToSvg = function() {
  // this turn the generated png into svg if the QRious don't have this option!
}

const installWebApp = function () {
  // install the PWA
  // then the button disapears
};
const downloadQR = function() {
  // download the generated QR code in the selected format
};
const detectInstalledApp = function() {
  // if PWA is already installed -> then don't show the install button
  // if not then show the button
};

const initClickListener = function () {
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    // make it only work with HTML Buttons
    const btn = e.target.closest("button");
    const action = btn.dataset.action;

    switch (action) {
      case "install":
        installWebApp();
        break;
      case "download":
        downloadQR();
        break;
      default:
        console.log("No handler for this action!");
    }
  });
};

initClickListener();


