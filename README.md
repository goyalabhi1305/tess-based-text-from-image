# Text from Image

[![npm version](https://img.shields.io/npm/v/text-from-image.svg?style=flat-square)](https://www.npmjs.org/package/text-from-image)
[![CDNJS](https://img.shields.io/cdnjs/v/text-from-image.svg?style=flat-square)](https://cdnjs.com/libraries/text-from-image)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/goyalabhi1305/tess-based-text-from-image) 
[![install size](https://packagephobia.now.sh/badge?p=text-from-image)](https://packagephobia.now.sh/result?p=text-from-image)
[![npm downloads](https://img.shields.io/npm/dm/text-from-image.svg?style=flat-square)](http://npm-stat.com/charts.html?package=text-from-image)
[![npm](https://img.shields.io/npm/dm/text-from-image.svg?style=flat-square)](http://npm-stat.com/charts.html?package=text-from-image)
[![npm](https://img.shields.io/npm/dt/text-from-image)](https://www.npmjs.com/package/text-from-image)
<!-- [![gitter chat](https://img.shields.io/gitter/room/mzabriskie/text-from-image.svg?style=flat-square)](https://gitter.im/mzabriskie/text-from-image) -->
<!-- [![code helpers](https://www.codetriage.com/goyalabhi1305/tess-based-text-from-image/badges/users.svg)](https://www.codetriage.com/axios/axios) -->
[![Known Vulnerabilities](https://snyk.io/test/npm/text-from-image/badge.svg)](https://snyk.io/test/npm/text-from-image)

This package helps you extract text from images. This works using the tesseract ocr engine.

## Installation

```
npm install --save text-from-image
```

## Usage
This gives a promise  which can be used further for various uses

```
const ReadText = require('text-from-image')

ReadText('./image.png').then(text => {
    console.log(text);
}).catch(err => {
    console.log(err);
})
```

## Please take care

- Image can be Buffer, PNG, JPG, etc.
- The clear the image the better.
- You can use Sharp or other image processing library to modify image before sending it to the function

## Development /Issues

For any issues found please create a pull request

If you're interested in developing it please follow <a href="https://github.com/goyalabhi1305/tess-based-text-from-image">GitHub repo.</a>
