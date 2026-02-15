const installBtn = document.getElementById("installBtn");
let deferredPrompt = null;

export const checkInstallation = function () {
  window.addEventListener("beforeinstallprompt", (e) => {
    deferredPrompt = e;
    installBtn.classList.remove("hidden");
    // installBtn.classList.add("flex");
  });

  window.addEventListener("load", () => {
    if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true || document.referrer.includes("android-app://")) {
      // installBtn.classList.remove("flex");
      installBtn.classList.add("hidden");
    }
  });
};

export const installWebApp = async function () {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === "accepted") {
    console.log("PWA installation accepted");
    installBtn.classList.add("hidden");
    // installBtn.classList.remove("flex");
  } else {
    console.log("PWA installation dismissed");
  }
  deferredPrompt = null;
};