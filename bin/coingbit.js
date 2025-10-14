#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2];

if (!projectName) {
  console.log('Usage: npx coingbit <project-name>');
  process.exit(1);
}

console.log(`Creating CoinGBit project: ${projectName}...`);

// Create project directory
const projectPath = path.join(process.cwd(), projectName);
if (!fs.existsSync(projectPath)) {
  fs.mkdirSync(projectPath);
}

// Copy template files
const templatePath = path.join(__dirname, '../templates');
copyDir(templatePath, projectPath);

console.log('✅ Project created successfully!');
console.log(`\nTo get started:`);
console.log(`  cd ${projectName}`);
console.log(`  npm install`);
console.log(`  npm start`);

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  
  const files = fs.readdirSync(src);
  
  files.forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    
    if (fs.lstatSync(srcFile).isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}