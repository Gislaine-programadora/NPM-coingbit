const chalk = require('chalk');

try {
  console.log(chalk.green('🚀 CoinGBit is ready!'));
  console.log(chalk.cyan('Run: npx coingbit <project-name> to get started'));
} catch (e) {
  console.log('🚀 CoinGBit is ready!');
  console.log('Run: npx coingbit <project-name> to get started');
}