const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Read SVG and extract embedded base64 PNG
const svgContent = fs.readFileSync(path.join(__dirname, '..', 'image', 'BMC_LOGO.svg'), 'utf-8');
const match = svgContent.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
if (!match) {
  console.error('Could not extract base64 PNG data from SVG');
  process.exit(1);
}

const logoBase64 = match[1];
const logoBuffer = Buffer.from(logoBase64, 'base64');

async function generate() {
  // Resize logo to 200x200
  const resizedLogo = await sharp(logoBuffer).resize(200, 200).toBuffer();

  // Background gradient
  const bgSvg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f0c29"/>
          <stop offset="50%" style="stop-color:#302b63"/>
          <stop offset="100%" style="stop-color:#24243e"/>
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#64ffda"/>
          <stop offset="100%" style="stop-color:#00bcd4"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <rect x="0" y="0" width="1200" height="630" fill="rgba(0,0,0,0.2)"/>
      <!-- Decorative circles -->
      <circle cx="100" cy="100" r="250" fill="rgba(100,255,218,0.03)"/>
      <circle cx="1100" cy="500" r="300" fill="rgba(0,188,212,0.03)"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke="url(#accent)" stroke-width="4" opacity="0.6"/>
    </svg>`;

  // Text overlay
  const textSvg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <style>
        .tagline { fill: #64ffda; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 16px; letter-spacing: 4px; text-transform: uppercase; }
        .title { fill: #ffffff; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 800; font-size: 56px; }
        .subtitle { fill: #a8b2d1; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; font-size: 22px; }
        .url { fill: #64ffda; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; font-size: 16px; }
      </style>
      <text x="600" y="440" text-anchor="middle" class="tagline">Ujjain's #1 JEE · NEET Coaching</text>
      <text x="600" y="510" text-anchor="middle" class="title">Bhatia Master Classes</text>
      <text x="600" y="555" text-anchor="middle" class="subtitle">Expert Faculty · Daily Practice · Proven Results</text>
      <text x="600" y="595" text-anchor="middle" class="url">www.bhatiamasterclasses.com</text>
    </svg>`;

  // Compose all layers
  const result = await sharp(Buffer.from(bgSvg))
    .resize(1200, 630)
    .composite([
      { input: resizedLogo, top: 40, left: 500 },
      { input: Buffer.from(textSvg), top: 0, left: 0 },
    ])
    .png()
    .toFile(path.join(__dirname, '..', 'image', 'og-image.png'));

  console.log('OG image generated successfully:', result);
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
