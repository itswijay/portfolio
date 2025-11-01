/**
 * Image Optimization Script
 *
 * This script compresses images in the public directory
 * Install sharp first: npm install --save-dev sharp
 * Run: node scripts/optimize-images.js
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// Directories to optimize
const directories = ['public/projects', 'public/images/home', 'public/profile']

// Image optimization settings
const QUALITY = 85 // Quality percentage (85 is a good balance)
const MAX_WIDTH = 1920 // Maximum width in pixels
const FORMATS_TO_OPTIMIZE = ['.jpg', '.jpeg', '.png']

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()

  if (!FORMATS_TO_OPTIMIZE.includes(ext)) {
    console.log(`⏭️  Skipping ${filePath} (not an image)`)
    return
  }

  try {
    const stats = fs.statSync(filePath)
    const originalSize = stats.size

    // Read the image
    const image = sharp(filePath)
    const metadata = await image.metadata()

    // Create backup filename
    const backupPath = filePath.replace(/(\.\w+)$/, '_backup$1')

    // Backup original if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath)
      console.log(`📦 Backed up: ${path.basename(filePath)}`)
    }

    // Optimize the image
    let pipeline = sharp(filePath)

    // Resize if too large
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
    }

    // Optimize based on format
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 })
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true })
    }

    // Save optimized image
    await pipeline.toFile(filePath + '.tmp')

    // Replace original with optimized
    fs.renameSync(filePath + '.tmp', filePath)

    const newStats = fs.statSync(filePath)
    const newSize = newStats.size
    const savedBytes = originalSize - newSize
    const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1)

    console.log(
      `✅ ${path.basename(filePath)}: ${formatBytes(
        originalSize
      )} → ${formatBytes(newSize)} (saved ${savedPercent}%)`
    )

    return { originalSize, newSize, savedBytes }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message)
    return null
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

async function optimizeDirectory(dir) {
  const fullPath = path.join(process.cwd(), dir)

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Directory not found: ${dir}`)
    return { count: 0, totalSaved: 0 }
  }

  console.log(`\n📁 Optimizing: ${dir}`)
  console.log('─'.repeat(60))

  const files = fs.readdirSync(fullPath)
  let count = 0
  let totalOriginal = 0
  let totalNew = 0

  for (const file of files) {
    const filePath = path.join(fullPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isFile() && !file.includes('_backup')) {
      const result = await optimizeImage(filePath)
      if (result) {
        count++
        totalOriginal += result.originalSize
        totalNew += result.newSize
      }
    }
  }

  const totalSaved = totalOriginal - totalNew
  const totalPercent =
    totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : 0

  console.log('─'.repeat(60))
  console.log(
    `📊 Total: ${formatBytes(totalOriginal)} → ${formatBytes(
      totalNew
    )} (saved ${totalPercent}%)`
  )

  return { count, totalSaved }
}

async function main() {
  console.log('🖼️  Image Optimization Script')
  console.log('═'.repeat(60))
  console.log(`Quality: ${QUALITY}%`)
  console.log(`Max Width: ${MAX_WIDTH}px`)
  console.log('═'.repeat(60))

  let totalCount = 0
  let totalSaved = 0

  for (const dir of directories) {
    const result = await optimizeDirectory(dir)
    totalCount += result.count
    totalSaved += result.totalSaved
  }

  console.log('\n')
  console.log('═'.repeat(60))
  console.log(`🎉 Optimization Complete!`)
  console.log(`   Images processed: ${totalCount}`)
  console.log(`   Total space saved: ${formatBytes(totalSaved)}`)
  console.log('═'.repeat(60))
  console.log('\n💡 Tip: Backups are saved with "_backup" suffix')
  console.log('   You can delete them once you verify the optimized images.\n')
}

main().catch(console.error)
