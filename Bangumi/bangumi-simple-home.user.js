// ==UserScript==
// @name        Bangumi Simple Home
// @namespace   moe.shizuki
// @match       https://bgm.tv/
// @match       https://chii.in/
// @match       https://bangumi.tv/
// @grant       none
// @version     1.0
// @author      ShizukiNatsuki
// ==/UserScript==

document.querySelector("#columnHomeB").remove()
document.querySelector("#home_calendar").remove()
document.querySelector("#home_grp_tpc").remove()

document.querySelector("#navMenuNeue > li.doujin").remove()
