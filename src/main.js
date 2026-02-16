import { initButtonListener } from "./buttonHandler.js";
import { inputListener, settingsListener } from "./inputListener.js";
import { checkInstallation } from "./installWebApp.js";

const init = function () {
  initButtonListener();
  inputListener();
  settingsListener();
  checkInstallation();
};
init();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const base = import.meta.env.BASE_URL;
    navigator.serviceWorker
      .register(`${base}sw.js`, { scope: base })
      .then((registration) => {
        console.log('SW registered:', registration);
      })
      .catch((error) => {
        console.error('SW registration failed:', error);
      });
  });
}
