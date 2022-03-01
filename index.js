const convert = require('color-convert');
//? Author : Adarsh Gourab Mahalik
/*
MIT License

Copyright (c) 2022 Adarsh Gourab Mahalik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ 

const names = {
    reset: "\u001b[0m",
    colornames: {
        black: "\u001b[30m",
        red: "\u001b[31m",
        green: "\u001b[32m",
        yellow: "\u001b[33m",
        blue: "\u001b[34m",
        magenta: "\u001b[35m",
        cyan: "\u001b[36m",
        white: "\u001b[37m",
    },
    brightcolornames: {
        Bright_Black: "\u001b[30;1m",
        Bright_Red: "\u001b[31;1m",
        Bright_Green: "\u001b[32;1m",
        Bright_Yellow: "\u001b[33;1m",
        Bright_Blue: "\u001b[34;1m",
        Bright_Magenta: "\u001b[35;1m",
        Bright_Cyan: "\u001b[36;1m",
        Bright_White: "\u001b[37;1m"

    },
    backgroundColors: {
        BgBlack: "\u001b[40m",
        BgRed: "\u001b[41m",
        BgGreen: "\u001b[42m",
        BgYellow: "\u001b[43m",
        BgBlue: "\u001b[44m",
        BgMagenta: "\u001b[45m",
        BgCyan: "\u001b[46m",
        BgWhite: "\u001b[47m"
    },
    brightBackgroundColors: {
        BgBright_Black: "\u001b[40;1m",
        BgBright_Red: "\u001b[41;1m",
        BgBright_Green: "\u001b[42;1m",
        BgBright_Yellow: "\u001b[43;1m",
        BgBright_Blue: "\u001b[44;1m",
        BgBright_Magenta: "\u001b[45;1m",
        BgBright_Cyan: "\u001b[46;1m",
        BgBright_White: "\u001b[47;1m"
    },
    decoration: {
        bold: "\u001b[1m",
        underline: "\u001b[4m",
        reversed: "\u001b[7m",
        italic: "\u001b[3m",
        strikethrough: "\u001b[9m",
        hidden: "\u001b[8m",
        dim: "\u001b[2m"
    }
}
const beaut = (text, prop) => {
    pretext = `${prop}${text}${names.reset}`;
    return pretext;
}
function use_hex(hex,bg) {
    color = convert.hex.ansi256(hex);
    form = `\u001b[38;5;${color}m`
    if (bg == true) {
        form = `\u001b[48;5;${color}m`
        return form
    }
    return form    
}
function use_rgb(r, g, b,bg) {
    let color = convert.rgb.ansi256(r, g, b);
    let form = `\u001b[38;5;${color}m`
    if (bg == true) {
        let form = `\u001b[48;5;${color}m`
        return form
    }
    return form
}
function use_hsl(h, s, l,bg) {
    let color = convert.hsl.ansi256(h, s, l);
    let form = `\u001b[38;5;${color}m`
    if (bg == true) {
        let form = `\u001b[48;5;${color}m`
        return form
    }
    return form
}
function use_keyword(keyword,bg) {
    let color = convert.keyword.ansi256(keyword);
    let form = `\u001b[38;5;${color}m`
    if (bg == true) {
        let form = `\u001b[48;5;${color}m`
        return form
    }
    return form
}

module.exports = {
    colornames: names.colornames,
    brightcolornames: names.brightcolornames,
    bgColors: names.backgroundColors,
    brightBgColors: names.brightBackgroundColors,
    decoration: names.decoration,
    beaut: beaut,
    hex: use_hex,
    rgb: use_rgb,
    keyword: use_keyword,
    hsl: use_hsl,
}