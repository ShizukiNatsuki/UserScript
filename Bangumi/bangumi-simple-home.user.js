// ==UserScript==
// @name        Bangumi Simple Home
// @namespace   moe.shizuki
// @match       https://bgm.tv/
// @match       https://chii.in/
// @match       https://bangumi.tv/
// @grant       none
// @version     1.1
// @author      ShizukiNatsuki
// ==/UserScript==

function remove(element) {
    if (element !== null) {
        element.remove()
    }
}

remove(document.querySelector("#columnHomeB"))
remove(document.querySelector("#home_calendar"))
remove(document.querySelector("#home_grp_tpc"))

remove(document.querySelector("#navMenuNeue > li.doujin"))
