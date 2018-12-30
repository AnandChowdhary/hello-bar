# Hello Bar

This is an open-source alternate to the [Hello Bar](https://www.hellobar.com/) service. It's a great way to capture leads, announce a sale or discount, etc.


![Travis (.org)](https://travis-ci.org/AnandChowdhary/hello-bar.svg?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/hello-bar.svg)](https://github.com/AnandChowdhary/add-to-calendar/blob/master/LICENSE)
[![Made in Enschede](https://img.shields.io/badge/made%20in-Enschede-brightgreen.svg)](https://cityofenschede.com/)

[![NPM](https://nodei.co/npm/hello-bar.png)](https://nodei.co/npm/hello-bar/)

## Usage

### Basic usage

Install Hello Bar from NPM:

```bash
yarn add hello-bar
```

Initialize with text to display:

```js
import HelloBar from "hello-bar";

new HelloBar({
  text: "Hello, world!"
});
```

### Call-to-action button

```js
new HelloBar({
  text: 'Buy my new book now! <a class="cta" href="#">Get $10 off!</a>'
});
```

### Customization

These are the default values, and you can customize them to the values in comments:

```js
new HelloBar({
  text: "", // Text you want the banner to display
  hideClose: false, // Set to `true` to hide close button
  fixed: false, // Set to `true` to set the position as fixed (on scroll)
  move: null, // Element(s) to force add margin-top to, in case you have any absolutely positioned elements
  duration: "0.5s", // Animation duration in CSS (e.g. "1s", "200ms", "none", etc.)
  delay: 1, // Delay in miliseconds
  align: "center", // Text alignment in CSS ("left", "right", or "center")
  background: "#eee", // Background color
  textColor: null, // Black or white text is automagically determined; you can specify a color if you like
  size: "normal", // Set to "large" for a big banner like Hello Bar
  i18n: {
    hideText: "Hide announcement" // ARIA-label for close button
  }
});
```

## Todo
- [ ] Targetting features
- [ ] Better design customization
