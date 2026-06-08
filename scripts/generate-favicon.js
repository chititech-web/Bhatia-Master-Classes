const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgContent = fs.readFileSync(path.join(__dirname, '..', 'image', 'BMC_LOGO.svg'), 'utf-8');
const match = svgContent.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
if (!match) { console.error('Could not extract base64 PNG'); process.exit(1); }

const logoBase64 = match[1];
const logoBuffer = Buffer.from(logoBase64, 'base64');

async function run() {
  // Generate 48x48 PNG for Google Search favicon
  await sharp(logoBuffer).resize(48, 48).png().toFile(path.join(__dirname, '..', 'image', 'favicon-48.png'));
  console.log('Created favicon-48.png (48x48 for Google)');

  // Generate 96x96 high-res PNG
  await sharp(logoBuffer).resize(96, 96).png().toFile(path.join(__dirname, '..', 'image', 'favicon-96.png'));
  console.log('Created favicon-96.png (96x96 for high-res)');

  // Generate a standalone SVG that wraps the PNG directly
  const standaloneSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <image href="data:image/png;base64,${logoBase64}" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(__dirname, '..', 'image', 'favicon-standalone.svg'), standaloneSvg);
  console.log('Created favicon-standalone.svg (simple wrapper, no pattern/use)');

  // Keep the 32x32 PNG for legacy browser compatibility
  console.log('Done');
}

run().catch(console.error);
