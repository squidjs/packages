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
var MaterialPlugin = {
    hookConfig: function (options) {
        return __assign(__assign({}, options), { param: __assign(__assign({}, options.param), { theme: __assign(__assign({}, options.param.theme), { background: '#263238', border: '#2A373E', text: '#607D8B', textHover: '#B0BEC5', foreground: '#B0BEC5', cursor: '#009688', cursorAccent: '#FFFFFF', selection: '#546E7A', black: '#1E272C', red: '#f07178', green: '#c3e88d', yellow: '#ffcb6b', blue: '#82aaff', magenta: '#c792ea', cyan: '#89ddff', white: '#eeffff', brightBlack: '#1E272C', brightRed: '#f07178', brightGreen: '#c3e88d', brightYellow: '#ffcb6b', brightBlue: '#82aaff', brightMagenta: '#c792ea', brightCyan: '#89ddff', brightWhite: '#eeffff' }) }) });
    },
};
exports.default = MaterialPlugin;
