import sharp from 'sharp';
import fs from 'fs/promises';

const src = '/Volumes/Crucial 2TB SSD/Website 2/public/images/paare/abenteuer-freude.jpg';
const tmp = src + '.tmp';
const before = (await fs.stat(src)).size;
const meta = await sharp(src).metadata();

// Re-encode only, keep exact 600×600 framing as is.
await sharp(src)
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(tmp);
await fs.rename(tmp, src);

const after = (await fs.stat(src)).size;
const fmtKB = (b) => (b / 1024).toFixed(0);
console.log(`abenteuer-freude.jpg  ${meta.width}×${meta.height} (Ausrichtung unverändert)`);
console.log(`${fmtKB(before)} KB → ${fmtKB(after)} KB  (-${((1 - after / before) * 100).toFixed(1)}%)`);
