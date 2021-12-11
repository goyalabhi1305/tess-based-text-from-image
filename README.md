# Text from Image

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
