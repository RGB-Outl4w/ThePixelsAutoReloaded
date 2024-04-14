# ThePixelsAuto: Reloaded
![ThePixelsLogo](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FmeaTxrGmWq8Yt_3FTIsoH.png&w=3840&q=75)

# ⚠️ ATTENTION ⚠️
Devs havestated that using an autoclicker OR a similar script is not safe! This probably means that using those is now bannable or at least punishable. Use at your own risk.

## ❗ Dev Note
It is recommended to use this script with [**Telegram Desktop**](https://desktop.telegram.org/), as the **Telegram Web** can sometimes reject executing scripts and return an error. I do not provide support for any errors, encountered while trying to execute the script in **Telegram Web**. All the issues threads connected to **Telegram Web** will be closed.

### 💖 Friendly Reminder
You can support me on [boosty](https://boosty.to/rgboutlaw) if you wish (or find my work inspiring) <3

└ Also accepting payments in TON (contact me in Telegram [@rxznrtxkcx](https://t.me/rxznrtxkcx))

## Installation (Execution):
Access the **Telegram** webview inspection console ([guide on how to do it](https://telegra.ph/How-to-open-webview-inspecting-window-console-03-23))

Paste the following command into the command prompt:

```javascript
var unixTime=Date.now(); var url='https://raw.githubusercontent.com/RGB-Outl4w/ThePixelsAutoReloaded/main/TPAR_main.js'+'?'+unixTime; fetch(url).then(response=>response.text()).then(script=>eval(script));
```

* Cache is now cleared **automatically** on the command execution, as it uses current timestamp which is always exclusive _(basically changes every second)_

## What this script does:
* Bypasses PC block by devs
* Clicks the button "Push Pixels"
* Blocks annoying ad pop-ups mid-game
* ~~When your balance eventually reaches 1000 coins, it buys a double pixel upgrade~~ (removed in main script, still can be found in `/releases/`)
* ~~When your balance eventually reaches 3000 coins (double pixel is profitable), it buys a triple pixel upgrade~~ (removed in main script, still can be found in `/releases/`)

# FAQ

### Q: Why does it buy upgrades? I may need those coins!
### A: If your goal is to earn cryptocurrency (TON), you must place as many pixels as you can, the so-called "Pixel Coins" currency only serves as an upgrade currency, not playing any role in the main idea of the game.

### Q: Why does it only buy 2x and 3x boosts?
### A: Because the other ones are not profitable. The 2x boost can give you around 120-130% of its price back, while 3x is just nice. And it doesn't cost much. So why not?

# Known Issues
* ~~[v3.0] Bad timings, the script sometimes glithes out and stops working~~ (Fixed in v3.1)
* ~~[v3.1] Sometimes the script can buy multiple of the same boosts instead of just one on execution~~ (Fixed in v3.2)
* ~~[v4.0] Script can randomly give an error and stop working until you click OK in the pop-up window~~ (Fixed in v4.1)
