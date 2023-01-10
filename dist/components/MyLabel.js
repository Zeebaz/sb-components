"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
/**
 * Label UI component
 **/
var MyLabel = function (_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, theme = _a.theme, _c = _a.label, label = _c === void 0 ? "No label" : _c, _d = _a.size, size = _d === void 0 ? "normal" : _d, color = _a.color;
    var phrase = label;
    if (allCaps) {
        phrase = phrase.replace(/\w\S*/g, function (w) {
            return w.replace(/^\w/, function (c) { return c.toUpperCase(); });
        });
    }
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label ".concat(size, " ").concat(theme && "text-" + theme), style: { color: color } }, { children: phrase })));
};
exports.MyLabel = MyLabel;
