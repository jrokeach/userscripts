# [jrokeach / userscripts](https://github.com/jrokeach/userscripts)

## Introduction

This is a collection of scripts that I've created to handle minor frustrations with web developers' choices on websites I use. If you have any requests for similar scripts, please let me know through [Issues](https://github.com/jrokeach/userscripts/issues).

## Basic Usage

1. Add [TamperMonkey](https://www.tampermonkey.net/) to your Chromium-based browser of choice. This scripts have been tested using Brave. You can [install TamperMonkey at via the Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Navigate to the script you wish to use in the [/scripts](/scripts) directory. Most scripts are also linked below. I recommend you review the code to ensure you trust it, as we are talking about modifying the behavior of websites you visit (and often, financial websites, as they tend to have some of the worst security and most irritating design choices).
3. Click "Raw" to open the code in the TamperMonkey extension and click "Install".

## Scripts

| Website            | Script                  | Function                                                     | Links                                                        |
| ------------------ | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Chase.com          | Chase-ConfirmAccountFix | Enable pasting of confirmed account number into Chase's website for making automatic payments. | [[Source]](https://github.com/jrokeach/userscripts/blob/main/scripts/chase.com/Chase-ConfirmAccountFix.user.js) [[Install]](https://github.com/jrokeach/userscripts/raw/main/scripts/chase.com/Chase-ConfirmAccountFix.user.js) |
| SoFi.com           | SoFi-StayLoggedIn       | Stay logged in to the SoFi.com website. This script may keep you logged in indefinitely as long as the site is open. | [[Source]](https://github.com/jrokeach/userscripts/blob/main/scripts/sofi.com/SoFi-StayLoggedIn.user.js) [[Install]](https://github.com/jrokeach/userscripts/raw/main/scripts/sofi.com/SoFi-StayLoggedIn.user.js) |
| SoFi.com           | SoFi-StayLoggedIn-1h    | Stay logged in to the SoFi.com website. This script will stay active for 1 hour from the last page load as long as the site is open. Session timeout will proceed as normal *after* 1 hour. | [[Source]](https://github.com/jrokeach/userscripts/blob/main/scripts/sofi.com/SoFi-StayLoggedIn-1h.user.js) [[Install]](https://github.com/jrokeach/userscripts/raw/main/scripts/sofi.com/SoFi-StayLoggedIn-1h.user.js) |
| TreasuryDirect.gov | TreasuryDirect-SecFix   | Fix the insecure mechanism for password entry using a "virtual keyboard" mandated by TreasuryDirect. Enable password managers and normal password entry. | [[Source]](https://github.com/jrokeach/userscripts/blob/main/scripts/treasurydirect.gov/TreasuryDirect-SecFix.user.js) [[Install]](https://github.com/jrokeach/userscripts/raw/main/scripts/treasurydirect.gov/TreasuryDirect-SecFix.user.js) |