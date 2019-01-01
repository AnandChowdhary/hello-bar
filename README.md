# Hello Bar

This is an open-source alternate to the [Hello Bar](https://www.hellobar.com/) service. It's a great way to capture leads, announce a sale or discount, etc.


![Travis (.org)](https://travis-ci.org/AnandChowdhary/hello-bar.svg?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/hello-bar.svg)](https://github.com/AnandChowdhary/add-to-calendar/blob/master/LICENSE)
[![Made in Enschede](https://img.shields.io/badge/made%20in-Enschede-brightgreen.svg)](https://cityofenschede.com/)

[![NPM](https://nodei.co/npm/hello-bar.png)](https://nodei.co/npm/hello-bar/)

![Hello Bar demo](https://raw.githubusercontent.com/AnandChowdhary/hello-bar/master/ezgif-2-d4d4c80c2710.gif)

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

Add class `cta` to your `a` or `button` for a large call-to-action button. Add the class `wiggle` for attention-catching animated wiggling.

```js
new HelloBar({
  text: 'Buy my new book now! <a class="cta wiggle" href="#">Get $10 off!</a>'
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
  duration: 500, // Animation duration in miliseconds
  delay: 1, // Delay in miliseconds
  align: "center", // Text alignment in CSS ("left", "right", or "center")
  background: "#eee", // Background color
  textColor: null, // Black or white text is automagically determined; you can specify a color if you like
  size: "normal", // Set to "large" for a big banner like Hello Bar,
  disableBodyMove: false, // Set to true to not move the body slightly down,
  hide: false, // Set to true to not show the bar
  i18n: {
    hideText: "Hide announcement" // ARIA-label for close button
  },
  targeting: {
    once: false, // Set to true to not show after it's been closed in this session
    onceUser: false, // Set to true to not show after it's been closed by this user EVER
  }
});
```

### `move`

In extreme cases, you may have an element with an absolute position on the page (say, 30px from top). To display the bar, we would then have to push the element below the hello bar's height (say, 30px + 20px = 50px from top). In this case, you can specify such element(s) in the `move` parameter.

The `<body>` is a default `move` case since, in general, it is going to be pushed down when the hello bar is visible. You can disable this setting using `"disableBodyMove": true` in the options.

Acceptance `move` values:

- String containing selector: `"h1#moveMe"`
- DOM element: `document.querySelector("h1#moveMe")`
- Node list of DOM elements: `document.querySelectorAll("h1")`
- Array containing selectors: `["h1", "div.move"]`
- Hybrid array: `["h1", document.querySelectorAll("h2"), document.querySelector("#divId")]`
- etc.

## Todo
- [ ] Targetting features (single: true)
- [ ] Better design customization
- [ ] Random from `text` array for A/B testing
- [ ] ARIA for close button (?)
