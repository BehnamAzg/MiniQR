import { downloadQR } from "./downloadQR.js";
import { installWebApp } from "./installWebApp.js";
import { shareApp } from "./shareApp.js";


export const initButtonListener = function () {
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.action;

    switch (action) {
      case "install":
        installWebApp();
        break;
      case "download":
        downloadQR();
        break;
      case "share":
        shareApp();
        break;
      default:
        console.log("No handler for this action!");
    }
  });
};
