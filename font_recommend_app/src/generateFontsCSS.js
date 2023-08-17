// generateFontsCSS.js
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, 'fonts');
const cssPath = path.join(__dirname, 'fonts.css');

const fontFiles = fs.readdirSync(fontsDir);

const cssContent = fontFiles
  .map((fontFile) => {
    const fontName = path.basename(fontFile, path.extname(fontFile));
    return `
      @font-face {
        font-family: '${fontName}';
        src: url('fonts/${fontFile}') format('truetype');
      }
    `;
  })
  .join('\n');

fs.writeFileSync(cssPath, cssContent);
