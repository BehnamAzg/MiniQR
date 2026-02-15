import { initButtonListener } from "./buttonHandler.js";
import { inputListener, settingsListener } from "./inputListener.js";
import { checkInstallation } from "./installWebApp.js";

const init = function() {
  initButtonListener();
  inputListener();
  settingsListener();
  checkInstallation();
}
init();









