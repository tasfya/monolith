import ApplicationController from "controllers/application_controller"
import { install, uninstall } from "@github/hotkey"

export default class extends ApplicationController {
  static targets = ["shortcut"]

  shortcutTargetConnected(target) {
    const shortcuts = target.getAttribute("aria-keyshortcuts").split(",")
    shortcuts.forEach(shortcut => {
      install(target, shortcut.trim())
    })
  }

  shortcutTargetDisconnected(target) {
    uninstall(target)
  }
}
