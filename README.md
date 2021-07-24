# Text from Image

This package helps you extract text from images. This works using the tesseract ocr engine.

## Installation

```
npm install --save text-from-image
```

## Usage

```
const ReadText = require('text-from-image')

const text  = ReadText('image.jpg',2,3)

console.log(text)
```

## Please take care

- Image can be Buffer, PNG, JPG, etc.
- The clear the image the better.
- You can use Sharp or other image processing library to modify image before sending it to the function

## Development /Issues

If you're interested in developing it please follow <a href="https://github.com/goyalabhi1305/tess-based-text-from-image">GitHub repo.</a>
