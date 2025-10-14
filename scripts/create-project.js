const fs = require('fs');
const path = require('path');

function createProject(projectName) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, '../templates');
  
  if (fs.existsSync(projectPath)) {
    console.error(`Project ${projectName} already exists!`);
    process.exit(1);
  }
  
  console.log(`Creating CoinGBit project: ${projectName}...`);
  
  // Create project directory
  fs.mkdirSync(projectPath, { recursive: true });
  
  // Copy template files recursively
  copyDirectory(templatePath, projectPath);
  
  console.log('✅ Project created successfully!');
  console.log(`\nNext steps:`);
  console.log(`  cd ${projectName}`);
  console.log(`  npm install`);
  console.log(`  npm start`);
}

function copyDirectory(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

module.exports = { createProject };