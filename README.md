# ![Hello-Bar](https://raw.githubusercontent.com/AnandChowdhary/hello-bar/master/logo.png)

This is an open-source alternate to the [Hello Bar](https://www.hellobar.com/) service. It's a great way to capture leads, announce a sale or discount, etc. It supports targeting based on location, referrer, A/B testing, etc.


[![Travis CI](https://img.shields.io/travis/AnandChowdhary/hello-bar.svg)](https://travis-ci.org/AnandChowdhary/hello-bar)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/hello-bar.svg)](https://www.npmjs.com/package/hello-bar)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/hello-bar.svg)](https://github.com/AnandChowdhary/add-to-calendar/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/hello-bar.svg)
[![Made in Enschede](https://img.shields.io/badge/made%20in-Enschede-brightgreen.svg)](https://cityofenschede.com/)

[![NPM](https://nodei.co/npm/hello-bar.png)](https://nodei.co/npm/hello-bar/)

![Hello Bar demo](https://raw.githubusercontent.com/AnandChowdhary/hello-bar/master/demo.gif)

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
  text: `Buy my new book now! <a class="cta wiggle" href="#">Get $10 off!</a>`
});
```

### Customization

These are all the options you can use in the constructor:

```js
new HelloBar({
  id: "", // A unique ID for this hello bar content (required for targeting)
  text: "", // Text you want the banner to display
  hideClose: false, // Set to `true` to hide close button
  position: "top", // Set to "bottom" to have the bar in the bottom instead of top
  fixed: false, // Set to `true` to set the position as fixed (on scroll)
  move: null, // Element(s) to force add margin-top to, in case you have any absolutely positioned elements
  duration: 500, // Animation duration in ms
  delay: 1, // Delay in ms
  align: "center", // Text alignment in CSS ("left", "right", or "center")
  background: "#eee", // Background color
  textColor: null, // Black or white text is automagically determined; you can specify a color if you like
  size: "normal", // Set to "large" for a big banner like Hello Bar,
  multiline: false, // Set to true to have multiple lines of text
  disableBodyMove: false, // Set to true to not move the body slightly down,
  hide: false, // Set to true to not show the bar
  ipEndpoint: "https://ipinfo.io/json", // Endpoint to get IP info in case of location-based targeting
  i18n: {
    hideText: "Hide announcement" // ARIA-label for close button
  },
  targeting: {
    once: false, // Set to true to not show after it's been closed in this session
    onceUser: false, // Set to true to not show after it's been closed by this user EVER,
    params: { // Support for URL param targeting
      // Add key-value pairs here
    },
    // Some examples below
    location: { // Add targeting by location
      eu: false, // Set to true to only show in EU countries
      country: ["us", "ca", "in"], // Array of countries to show in,
      city: ["New Delhi"], // Array of cities to show in,
      ip: ["192.168.1.1"], // Array of IP addresses to show in,
      postal: [110048], // Array of postal codes to show in,
      region: ["California"], // Array of regions to show in
    },
    pathName: "/about", // Only show on this path,
    href: "https://example.com/about" // Only show on this URL
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

## Use cases

### EU cookie law message

You can show a cookie law message only in the European Union (EU) using something like this:

```js
new HelloBar({
  text: '🍪 We use cookies and storage on our website. <a class="cta" href="/privacy-policy">Privacy policy</a>',
  fixed: true,
  position: "bottom",
  targeting: {
    onceUser: true,
    location: {
      eu: true
    }
  }
});
```

In the code above, setting `targeting.onceUser` will make sure that a user doesn't see the message again after they've closed it. Using `targeting.location.eu` will restrict message visibility within the EU member countries.

### Product Hunt message

You can show a welcome message to users coming from your Product Hunt page:

```js
new HelloBar({
  text: 'Hello Product Hunter! Use code PH20 for 20% off when you sign up!',
  background: "#dc542f",
  targeting: {
    params: {
      ref: "producthunt"
    }
  }
});
```

### A/B testing

You can do client-side A/B testing by using an array for `text` instead of a string. You can then track specific events using `HelloBar.on()`:

```js
const bar = new HelloBar({
  text: [
    'You are seeing A! <a href="/link-1" class="cta">Click here</a>',
    'You are seeing B! <a href="/link-2" class="cta">Click here</a>'
  ]
});
// Track CTA clicks on Google Analytics
window.ga("create", "UA-XXXXX-Y", "auto");
bar.on("cta-mouse-click", e => window.ga("send", "event", "ab-test", e.getAttribute("href")));
```

## Methods

You can use the following methods to manipulate the bar:

| Method | Description |
|-------|-------------|
| `showBar()` | Show the bar |
| `hideBar()` | Hide the bar |
| `unMove()` | Revert moved elements to their initial state |

## Events

For analytics, you can listen to events like this:

```js
const bar = new HelloBar({
  text: 'Hello world!'
});
bar.on("mouse-click", () => {
  // Do something here
});
```

You can listen to the following events. They all return the relevant DOM element (either the bar itself or the call-to-action button):

| Event | Description |
|-------|-------------|
| `before-created` | Called before the bar is first created |
| `created` | Called when the bar is first created |
| `after-created` | Called after the bar is first created |
| `not-created` | Called when the bar is not created |
| `mouse-enter` | Called when mouse enters the bar |
| `mouse-leave` | Called when mouse leaves the bar |
| `mouse-down` | Called when mouse presses down on the bar |
| `mouse-up` | Called when mouse releases on the bar |
| `mouse-click` | Called when mouse clicks the bar |
| `cta-mouse-enter` | Called when mouse enters CTA button |
| `cta-mouse-leave` | Called when mouse leaves CTA button |
| `cta-mouse-down` | Called when mouse presses down on CTA button |
| `cta-mouse-up` | Called when mouse releases on CTA button |
| `cta-mouse-click` | Called when mouse clicks CTA button |
| `show-bar` | Called when the bar is shown |
| `hide-bar` | Called when the bar is hidden |
| `close-bar` | Called when the close button is clicked |
| `color-bar` | Called when the bar is colored (returns colors) |
| `calculate-height` | Called when the bar's height is calculated (returns height) |
| `move-element` | Called when an element is moved (returns element) |
| `start-ip-info` | Called when the IP fetch request is started |
| `fetch-ip-info` | Called when the IP fetch request is returned |
| `error-ip-info` | Called when the IP fetch request has an error |
| `window-resize` | Called with window is resized and objects and repositioned |

## Todo
- [x] Targeting features (single: true)
- [x] Emit events for hello bar showed, closed, cta hover, etc.
- [x] Random from `text` array for A/B testing
- [ ] Better design customization (gradients?)
- [ ] Support for other IP info endpoints (?)
- [ ] Revisit ARIA for close button (?)

## License

MIT &copy; [Anand Chowdhary](https://anandchowdhary.com/?utm_source=github&utm_medium=repository&utm_campaign=hello-bar&utm_term=license-link)
