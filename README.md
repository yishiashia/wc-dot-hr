# wc-dot-hr

[![published][wc-image]][wc-url]
[![coverage][coverage-image]][coverage-url]
[![npm](https://img.shields.io/npm/v/wc-dot-hr.svg?style=flat-square)](https://www.npmjs.com/package/wc-dot-hr)
[![npm](https://img.shields.io/npm/dm/wc-dot-hr.svg?style=flat-square)](https://www.npmjs.com/package/wc-dot-hr)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/wc-dot-hr/badge)](https://data.jsdelivr.com/v1/package/npm/wc-dot-hr/badge)
[![GitHub issues](https://img.shields.io/github/issues/yishiashia/wc-dot-hr.svg?style=flat-square)](https://github.com/yishiashia/wc-dot-hr/issues)
![license](https://img.shields.io/npm/l/wc-dot-hr.svg?style=flat-square)

[![NPM](https://nodei.co/npm/wc-dot-hr.png?mini=true)](https://www.npmjs.com/package/wc-dot-hr)

Dotted style horizontal rule web component.


## Installation
You can install `wc-dot-hr` with npm, or just get started quickly with CDN.

### Install from npm
To install from npm, open terminal in your project folder and run:

```shell
npm install wc-dot-hr
```

After the package is installed, then you can import the bubble web component into you code:

```js
import 'wc-dot-hr';

window.onload = function() {
  let dotHr = document.createElement('dot-hr');
  // specify dot number with css variable
  dotHr.style.setProperty('--hr-dots-number', 5)
  document.body.appendChild(starInput);
}
```

### Install from CDN
There is `jsDelivr` CDN available for quickly integrated with your web page.

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/npm/wc-dot-hr"></script>

<!-- Specific version -->
<script src="https://cdn.jsdelivr.net/npm/wc-dot-hr@1.0.0"></script>
```

#### Basic Usages:

```html
<html>
  <head>

    <!-- Load wc-dot-hr WebComponent library -->
    <script src="https://cdn.jsdelivr.net/npm/wc-dot-hr@1.0.0"></script>
    <!-- End Load -->

  </head>

  <body>

    <!-- Using "dot-hr" html tag to generate horizontal rule -->
    <p>blablabla...</p>
    <dot-hr></dot-hr>
    <p>blablabla...</p>
</form>

  </body>
</html>
```

## Demo page
Demo: [https://yishiashia.github.io/wc-dot-hr/](https://yishiashia.github.io/wc-dot-hr/)

## Usage

If you want to customize this web component, you can import the library and
implement your new class by extend `DotHr`.

```js
import DotHr from "wc-dot-hr";

class customizedDotHr extends DotHr {
    // override here
}

```

## Customized star style
To customize the dotted hr style, you can use the css variables.

| CSS variable           | Description |
| -----------------------| ------------|
| **--hr-dots-number**   | The number of dots, default value is `3` |
| **--hr-light-color**   | The color of dot when the `prefers-color-scheme` is `light`. The default value is `#666` |
| **--hr-dark-color**    | The color of dot when the `prefers-color-scheme` is `dark`. The default value is `#ccc` |
| **--hr-dot-size**      | The size of dot. The default value is `8px` |
| **--hr-space-between** | The space between dots. The default value is `24px` |


[wc-image]: https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square
[wc-url]: https://www.webcomponents.org/element/wc-dot-hr

[coverage-image]: https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyishiashia%2Fdee60aefdce58a7559baeb7c5deb3a8b%2Fraw%2F6b50567c1953a124637e3d09b4055d50f163f7b0%2Fwc-dot-hr__heads_master.json
[coverage-url]: https://gist.githubusercontent.com/yishiashia/dee60aefdce58a7559baeb7c5deb3a8b/raw/6b50567c1953a124637e3d09b4055d50f163f7b0/wc-dot-hr__heads_master.json

[js-image]: https://img.shields.io/badge/ES-6%2B-ff69b4.svg?style=flat-square
[js-url]: https://www.ecma-international.org/ecma-262/6.0/

[ts-image]: https://img.shields.io/badge/TypeScript-^4.7.4-blue?style=flat-square
[ts-url]: https://www.typescriptlang.org/
