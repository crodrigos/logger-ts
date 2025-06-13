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
export {
  index_default as default
};
//# sourceMappingURL=index.mjs.map