# Beaut
![Beaut Banner](https://i.ibb.co/Hq1FL0x/beaut.png)
![GitHub License](https://img.shields.io/github/license/GithubyAdarsh/beaut?color=blueviolet&logo=github&style=for-the-badge)
![npm](https://img.shields.io/npm/dt/beaut?style=for-the-badge)
### [Github](https://github.com/itsmeadarsh2008/beaut)
> A Small Library For NodeJS To Beautify Terminals!
## How To  Use
```sh
$ npm install beaut
```

### BASIC USAGE
```javascript
const beaut = require('beaut');
const styler = beaut.beaut

// Style Color: magenta 
console.log(styler("Hello World!",beaut.colornames.magenta))
```
If you're using visual studio code for this project, then you might get suggestions from the IntelliSense
![Suggestions](https://i.ibb.co/QDvLFrp/image.png)

Inside `bgColors`, You can find background colors
Inside `decoration`, You can set them as `bold`, `underline`, `reversed`

You can also create them as below

```javascript
const beaut = require('beaut');
const styler = beaut.beaut

// Styles It With Background Cyan And Decoratates It With Bold
console.log(styler(styler("Hello World", beaut.bgColors.BgCyan), beaut.decoration.bold));
```
![Output Above](https://i.ibb.co/RQCcNFs/image.png)

## Features Since 1.0.3
- Added `hsl`,`rgb`,`keyword` and `hex` support
- Added `italic`, `strikethrough`, `hidden`, `dim` to `names.decoration`
  
```javascript
const beaut = require('beaut');
const styler = beaut.beaut

console.log(styler('It\'s Beaut!',beaut.decoration.bold));
console.log(styler('It\'s Beaut!',beaut.decoration.italic));
console.log(styler('It\'s Beaut!',beaut.decoration.underline));
console.log(styler('It\'s Beaut!',beaut.decoration.reversed));
console.log(styler('It\'s Beaut!',beaut.decoration.strikethrough));
console.log(styler('It\'s Beaut!',beaut.decoration.hidden));
console.log(styler('It\'s Beaut!',beaut.decoration.dim));
```
![Output_Image](https://i.ibb.co/PryHm07/image.png)

### Using `hsl`, `rgb`, `keyword` And `hex` To Style Text!

```javascript
const beaut = require('beaut');
const styler = beaut.beaut

console.log(styler('Bruh!',beaut.hex("32a8a4"))) // Do Not Use #
console.log(styler('Bruh!',beaut.hsl(321, 54, 55))) // Only Numbers
console.log(styler('Bruh!',beaut.rgb(202, 88, 78,bg=true))) // bg=true sets it as background
console.log(styler('Bruh!',beaut.keyword("purple",bg=true)))
```
![Output_Image](https://i.ibb.co/TtGbdr1/image.png)

## What's New In 1.0.5
- Added `states` which can be used to set the state of the text
- Added `icons` just like `states`
```javascript
const beaut = require('beaut');
const styler = beaut.beaut
let state = beaut.state
console.log(styler('I\'m a info',state.info));
console.log(styler('Command Success!',state.sucess));
console.log(styler('Unexpected Error!',state.error));
console.log(styler('WARNING: YOU CAN\'T REDO CHANGES',state.warning));
console.log(styler('Text is being debugged',state.debug));
```
![Output_Image](https://i.ibb.co/JQMZbp8/image.png)

### Using Icons
```javascript
const beaut = require('beaut');

// Icons Can't Be Visible In Terminals Like Classic CMD Or Powershell
console.log(beaut.icons.info[0]);
console.log(beaut.icons.info[1]);
console.log(beaut.icons.warning)
console.log(beaut.icons.error)
console.log(beaut.icons.debug[0])
console.log(beaut.icons.debug[1])
console.log(beaut.icons.success)
```
![Output_Image](https://i.ibb.co/wBRZwSS/image.png)
