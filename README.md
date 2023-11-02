# Puppeteer Element Text Extractor

## Description

The `getElementText` function is a JavaScript utility that uses Puppeteer to extract the text content of a specific element from a web page. It is particularly useful for web scraping and data extraction tasks.

## Installation

Before using this code, ensure that you have Puppeteer installed as a dependency in your project. If Puppeteer is not installed, you can add it using npm:

```bash
npm install puppeteer
Usage
Import the getElementText function in your JavaScript file:
javascript
Copy code
import getElementText from './path/to/getElementText.js';
Use the getElementText function to retrieve text from an element on a web page. Pass the URL of the page and the CSS selector of the target element as parameters:
javascript
Copy code
const siteURL = "https://example.com"; // Replace with the URL of the web page you want to scrape.
const elementSelector = "#targetElement"; // Replace with the CSS selector of the element to extract text from.

getElementText(siteURL, elementSelector);
Function Description
The getElementText function takes two parameters:

siteURL: The URL of the web page you want to scrape.
elementSelector: The CSS selector for the target element from which you want to extract text.
The function performs the following steps:

Launches a headless Puppeteer browser instance.
Creates a new page in the browser.
Navigates to the specified web page (siteURL).
Waits for the specified element (elementSelector) to become available in the page.
Extracts the text content of the target element.
If the element is found, it returns the text content. If the element is not found, it returns the string "Não encontrado."
Logs the extracted text to the console.
Example
Here is an example of how to use the getElementText function:

javascript
Copy code
import getElementText from './path/to/getElementText.js';

const siteURL = "https://example.com";
const elementSelector = "#targetElement";

getElementText(siteURL, elementSelector);
This example will extract the text content of the element with the CSS selector #targetElement from the web page at https://example.com.

License
This code is available under the MIT License.

Feel free to modify and use it in your projects as needed.

bash
Copy code

Certifique-se de substituir `'./path/to/getElementText.js'`, `https://example.com
