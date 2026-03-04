import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const teamDir = 'd:/WORKFLOW/Development/Bark Boost Projects/Projects/mybathandbiscuits.com/public/images/team/';
const outputDir = teamDir; // Same directory for simplicity

async function convertToWebp() {
    try {
        const files = fs.readdirSync(teamDir);
        const images = files.filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg'));

        console.log(`Found ${images.length} images to convert.`);

        for (const image of images) {
            const inputPath = path.join(teamDir, image);
            const outputPath = path.join(outputDir, `${path.parse(image).name}.webp`);

            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            console.log(`Converted: ${image} -> ${path.parse(image).name}.webp`);
        }

        console.log('Conversion complete.');
    } catch (error) {
        console.error('Error converting images:', error);
    }
}

convertToWebp();
