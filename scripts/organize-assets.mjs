import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const brainDir = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\c97782b5-fbec-4b19-bc18-945ccab9b445';
const publicDir = path.resolve('public/images');

const imageMap = {
  hero: {
    src: 'shree_baldev_musical_dj_truck_1794077107347.jpg',
    dest: 'hero/hero-baraat.jpg'
  },
  boxMusic: {
    src: 'shree_baldev_musical_dj_truck_1794077107347.jpg',
    dest: 'services/box-music.jpg'
  },
  bandBaja: {
    src: 'indian_brass_band_wedding_1794074149645.jpg',
    dest: 'services/band-baja.jpg'
  },
  weddingBaraat: {
    src: 'indian_wedding_baraat_procession_1794074158235.jpg',
    dest: 'services/wedding-baraat.jpg'
  },
  reception: {
    src: 'indian_wedding_reception_music_1794074205497.jpg',
    dest: 'services/reception.jpg'
  },
  birthday: {
    src: 'indian_family_birthday_party_music_1794074201605.jpg',
    dest: 'services/birthday.jpg'
  },
  festival: {
    src: 'indian_village_festival_celebration_1794074230689.jpg',
    dest: 'services/festival.jpg'
  },
  religious: {
    src: 'indian_cultural_devotional_festival_music_1794074250895.jpg',
    dest: 'services/religious-event.jpg'
  },
  soundEquipment: {
    src: 'sound_equipment_showcase_1794074259107.jpg',
    dest: 'services/sound-equipment.jpg'
  },
  bandTeam: {
    src: 'indian_brass_band_troupe_1794074263977.jpg',
    dest: 'services/band-team.jpg'
  }
};

async function processAssets() {
  console.log('Organizing photographic assets...');
  for (const [, item] of Object.entries(imageMap)) {
    const srcPath = path.join(brainDir, item.src);
    const destPath = path.join(publicDir, item.dest);
    const galleryDestPath = path.join(publicDir, 'gallery', path.basename(item.dest));
    
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath).jpeg({ quality: 90 }).toFile(destPath);
      console.log(`Saved: ${destPath}`);
      await sharp(srcPath).jpeg({ quality: 90 }).toFile(galleryDestPath);
      console.log(`Saved to gallery: ${galleryDestPath}`);
    } else {
      console.error(`Source missing: ${srcPath}`);
    }
  }

  // Also copy hero directly to root public/images/hero-baraat.jpg and services for flexibility
  const heroSrc = path.join(brainDir, imageMap.hero.src);
  if (fs.existsSync(heroSrc)) {
    await sharp(heroSrc).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'hero-baraat.jpg'));
    console.log(`Saved top-level: ${path.join(publicDir, 'hero-baraat.jpg')}`);
  }

  // Process Brand Logo assets
  console.log('Processing Brand Logo assets...');
  const logoMarkSrc = path.join(brainDir, 'luxury_brand_logo_mark_1794074285777.jpg');
  const logoEmblemSrc = path.join(brainDir, 'shree_baldev_musical_logo_1794074059289.jpg');

  if (fs.existsSync(logoMarkSrc)) {
    // 1. logo-icon.png (high resolution emblem)
    await sharp(logoMarkSrc)
      .resize(800, 800, { fit: 'contain', background: { r: 7, g: 6, b: 5, alpha: 1 } })
      .png()
      .toFile(path.join(publicDir, 'brand/logo-icon.png'));
    console.log('Saved brand/logo-icon.png');

    // 2. favicon.png (crisp 128x128 and 64x64)
    await sharp(logoMarkSrc)
      .resize(128, 128, { fit: 'contain', background: { r: 7, g: 6, b: 5, alpha: 1 } })
      .png()
      .toFile(path.join(publicDir, 'brand/favicon.png'));
    await sharp(logoMarkSrc)
      .resize(64, 64, { fit: 'contain', background: { r: 7, g: 6, b: 5, alpha: 1 } })
      .png()
      .toFile(path.resolve('src/app/favicon.ico'));
    await sharp(logoMarkSrc)
      .resize(64, 64, { fit: 'contain', background: { r: 7, g: 6, b: 5, alpha: 1 } })
      .png()
      .toFile(path.resolve('public/favicon.ico'));
    console.log('Saved favicons');

    // 3. Transparent background logo (extract gold, make pure black transparent)
    const { data, info } = await sharp(logoMarkSrc)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixelCount = info.width * info.height;
    const rgba = Buffer.from(data);
    for (let i = 0; i < pixelCount; i++) {
      const offset = i * 4;
      const r = rgba[offset];
      const g = rgba[offset + 1];
      const b = rgba[offset + 2];
      // Black thresholding / alpha blending
      const brightness = Math.max(r, Math.max(g, b));
      if (brightness < 25) {
        rgba[offset + 3] = 0;
      } else if (brightness < 60) {
        rgba[offset + 3] = Math.round(((brightness - 25) / 35) * 255);
      } else {
        rgba[offset + 3] = 255;
      }
    }

    await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
      .png()
      .toFile(path.join(publicDir, 'brand/logo-transparent.png'));
    console.log('Saved brand/logo-transparent.png');

    // 4. logo-light.png (monochrome white/silver/gold version on transparent)
    const lightRgba = Buffer.from(rgba);
    for (let i = 0; i < pixelCount; i++) {
      const offset = i * 4;
      const a = lightRgba[offset + 3];
      if (a > 0) {
        // Boost towards light gold / platinum
        lightRgba[offset] = 245;     // R
        lightRgba[offset + 1] = 225; // G
        lightRgba[offset + 2] = 180; // B
      }
    }
    await sharp(lightRgba, { raw: { width: info.width, height: info.height, channels: 4 } })
      .png()
      .toFile(path.join(publicDir, 'brand/logo-light.png'));
    console.log('Saved brand/logo-light.png');

    // 5. logo-primary.png (High quality primary brand logo emblem with luxury background)
    await sharp(logoMarkSrc)
      .resize(1000, 1000)
      .png()
      .toFile(path.join(publicDir, 'brand/logo-primary.png'));
    console.log('Saved brand/logo-primary.png');

    // 6. Also save circular emblem as logo-emblem.png
    if (fs.existsSync(logoEmblemSrc)) {
      await sharp(logoEmblemSrc)
        .resize(1000, 1000)
        .png()
        .toFile(path.join(publicDir, 'brand/logo-emblem.png'));
      console.log('Saved brand/logo-emblem.png');
    }
  }

  console.log('All image assets successfully organized and processed!');
}

processAssets().catch(err => {
  console.error('Error processing assets:', err);
  process.exit(1);
});
