// ==UserScript==
// @name         Calibre-web-epubreader-dark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  add dark theme on calibre-web-epubreader
// @author       linkzz
// @match        https://calibre.linkzz.hm/*/*
// @grant        none
// ==/UserScript==

/**
 * 字体和图标颜色
 */
const fontColor = "#fff";
/**
 * 背景色
 */
const backgroundColor = "#4f485a";
/**
 * 字体大小
 */
const fontSize = "1.2rem";

(function () {
  "use strict";
  console.log("[calibre-web-dark] Loading tampermonkey filters");
  $(document).ready(function () {
    console.log("[calibre-web-dark] Launching...");
    document
      .querySelector("#main")
      .setAttribute("style", `background-color: ${backgroundColor}`);
    document
      .querySelector("#book-title")
      .setAttribute("style", `color: ${fontColor}`);
    document
      .querySelector("#chapter-title")
      .setAttribute("style", `color: ${fontColor}`);
    document.querySelectorAll("#titlebar a").forEach((e) => {
      e.setAttribute("style", `color: ${fontColor}`);
    });
    reader.book.rendition.themes.override("color", fontColor);
    reader.book.rendition.themes.fontSize(fontSize);
    console.log("[calibre-web-dark] Launched");
  });
})();
