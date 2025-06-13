"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// src/Logger/Logger.ts
var Logger = class _Logger {
  constructor() {
    this.logs = [];
  }
  static GetInstance() {
    if (!this.instance) {
      this.instance = new _Logger();
    }
    return this.instance;
  }
  Add(log) {
    this.logs.push(log);
    console.log(this.Format(log));
  }
  static Log(message) {
    _Logger.GetInstance().Log(message);
  }
  static Warn(message) {
    _Logger.GetInstance().Warn(message);
  }
  static Error(message) {
    _Logger.GetInstance().Error(message);
  }
  Log(message) {
    this.Add({
      message,
      date: /* @__PURE__ */ new Date(),
      type: "\u2705" /* Log */
    });
  }
  Warn(message) {
    this.Add({
      message,
      date: /* @__PURE__ */ new Date(),
      type: "\u{1F7E8}" /* Warning */
    });
  }
  Error(message) {
    this.Add({
      message,
      date: /* @__PURE__ */ new Date(),
      type: "\u274C" /* Error */
    });
  }
  Format(log) {
    let icon = log.type;
    return `[${log.date.getFullYear().toString().padStart(2, "0")}-${log.date.getMonth().toString().padStart(2, "0")}-${log.date.getDay().toString().padStart(2, "0")} ${log.date.getHours().toString().padStart(2, "0")}:${log.date.getMinutes().toString().padStart(2, "0")}:${log.date.getSeconds().toString().padStart(2, "0")}] ${icon} ${log.message}`;
  }
};
var Logger_default = Logger;

// src/index.ts
var index_default = Logger_default;
//# sourceMappingURL=index.js.map