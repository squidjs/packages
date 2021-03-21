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
var DraculaPlugin = {
    hookConfig: function (options) {
        return __assign(__assign({}, options), { param: __assign(__assign({}, options.param), { theme: __assign(__assign({}, options.param.theme), { background: '#282a36', border: '#44475a', text: '#44475a', textHover: '#6272a4', foreground: '#f8f8f2', cursor: '#6272a4', cursorAccent: '#f8f8f2', selection: '#44475a', black: '#21222C', red: '#FF5555', green: '#50FA7B', yellow: '#F1FA8C', blue: '#BD93F9', magenta: '#FF79C6', cyan: '#FF79C6', white: '#F8F8F2', brightBlack: '#6272A4', brightRed: '#FF6E6E', brightGreen: '#69FF94', brightYellow: '#FFFFA5', brightBlue: '#D6ACFF', brightMagenta: '#FF92DF', brightCyan: '#A4FFFF', brightWhite: '#FFFFFF' }) }) });
    },
};
exports.default = DraculaPlugin;
