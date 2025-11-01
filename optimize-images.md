# Image Optimization Guide

## What We've Done (Code Changes):

✅ Added lazy loading to all images (except first visible one)
✅ Optimized image sizes attributes for responsive delivery
✅ Reduced quality to 85% (imperceptible to human eye, 30-40% size reduction)
✅ Only prioritize the first image on each page
✅ Let Next.js automatically convert to WebP/AVIF format

## Manual Image Compression (Recommended):

Your current images in `public/projects/` are very large:

- info-bash.png: 2.3MB
- info-bash(1).png: 2.3MB
- info-bash(2).png: 2.3MB
- intima.png: 1.5MB
- portfolio.png: 1.3MB
- medi-track.png: 777KB
- meditrack.png: 949KB
- gpa_cal.png: 268KB ✅ (already optimized)

### Option 1: Use Online Tools

1. Go to https://tinypng.com or https://squoosh.app
2. Upload your large PNG images
3. Download the compressed versions
4. Replace the originals

### Option 2: Use Command Line (ImageMagick)

```bash
# Install ImageMagick (if not already installed)
# On Ubuntu/Debian: sudo apt-get install imagemagick
# On macOS: brew install imagemagick

# Compress all PNG files to 85% quality
cd public/projects
for file in *.png; do
  convert "$file" -quality 85 -strip "optimized_$file"
done
```

### Option 3: Use Sharp (Node.js) - Automated

```bash
# Install sharp
npm install --save-dev sharp

# Run the optimization script (see below)
node scripts/optimize-images.js
```

## Expected Results After Manual Compression:

- 2.3MB → ~300-500KB (80-85% reduction)
- 1.5MB → ~250-400KB (75-80% reduction)
- Total savings: ~10MB → ~2MB

## How Next.js Image Component Helps:

- Serves WebP/AVIF to modern browsers (60-80% smaller than PNG)
- Only loads images when they enter viewport (lazy loading)
- Generates multiple sizes for different screen sizes
- Caches optimized images for faster subsequent loads
