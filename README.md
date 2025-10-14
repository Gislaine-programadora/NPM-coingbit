# CoinGBit 🚀  Pacote npm 📦 "npx coingbit my-crypto-dashboard"

![npm version](https://img.shields.io/npm/v/coingbit)
![license](https://img.shields.io/github/license/coingbit/coingbit-package)
![downloads](https://img.shields.io/npm/dt/coingbit)
![build](https://img.shields.io/github/actions/workflow/status/coingbit/coingbit-package/main.yml)

Professional cryptocurrency dashboard package with real-time charts, live quotes, and MetaMask integration.

![version](https://img.shields.io/npm/v/coingbit)
![license](https://img.shields.io/github/license/coingbit/coingbit-package)
![downloads](https://img.shields.io/npm/dt/coingbit)

## Installation

```bash
npm install coingbit
```

## Quick Start

Create a new CoinGBit project:

```bash
npx coingbit my-crypto-dashboard
cd my-crypto-dashboard
npm install
npm start

<p align="center">
  <a href="https://www.npmjs.com/package/coingbit">
    <img src="https://raw.githubusercontent.com/Gislaine-programadora/coingbit/main/public/npm-coingbit.png" alt="CoinGBit npm badge" width="200"/>
  </a>
</p>

```

## Features

- 📈 **Real-time Charts** - Interactive cryptocurrency price charts using Chart.js
- 💰 **Live Quotes** - Real-time price updates every 3 seconds  
- 🦊 **MetaMask Integration** - Connect wallet by clicking the dog image
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful dark theme with cards and animations
- ⚡ **Fast Setup** - Ready to use in seconds
- 🔧 **Zero Configuration** - No build tools required

## Project Structure

```
my-crypto-dashboard/
├── index.html              # Main HTML file with all dependencies
├── app.js                  # Main React application logic
├── components/             # React components
│   ├── Header.js          # Header with CoinGBit branding
│   ├── CryptoGrid.js      # Grid of cryptocurrency cards
│   ├── ChartPanel.js      # Main chart display panel
│   └── MetaMaskConnect.js # MetaMask wallet connection
├── services/              # Core services
│   ├── PriceService.js    # Real-time price generation
│   └── MetaMaskService.js # MetaMask Web3 integration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Usage Examples

### Basic Implementation
```javascript
// The package creates a complete dashboard automatically
// Simply run: npx coingbit my-project-name
```

### MetaMask Integration
```javascript
// Users click the dog image to trigger MetaMask connection
// Automatic wallet detection and balance display
// Support for Ethereum mainnet and other networks
```

### Real-time Price Updates
```javascript
// Cryptocurrency prices update every 3 seconds
// Simulated market data with realistic volatility
// No external API keys required for development
```

## Supported Cryptocurrencies

- Bitcoin (BTC) - $43,250
- Ethereum (ETH) - $2,650
- Binance Coin (BNB) - $315
- Cardano (ADA) - $0.48
- Solana (SOL) - $98
- Polkadot (DOT) - $6.25
- Chainlink (LINK) - $14.80
- Polygon (MATIC) - $0.85
- Avalanche (AVAX) - $36.50
- Uniswap (UNI) - $7.20
- Algorand (ALGO) - $0.18
- Ripple (XRP) - $0.62

## Technology Stack

- **Frontend**: React 18 (CDN)
- **Styling**: TailwindCSS
- **Charts**: Chart.js 4.4.9
- **Icons**: Lucide Static
- **Blockchain**: Web3.js for MetaMask
- **Build**: No build process required

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Development

To contribute to CoinGBit:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Test with: `npm run dev`
5. Build with: `npm run build`

📦 [Veja no npm](https://www.npmjs.com/package/coingbit)

## CLI Usage

```bash
# Create new project
npx coingbit my-dashboard

# Start development server
npm start

# Build for production (if needed)
npm run build
```

## License

MIT © CoinGBit Team 2025

---

**Made with ❤️ for the crypto community**
