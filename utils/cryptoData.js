// Utility functions for crypto data management
function formatPrice(value, currency = 'EUR') {
  try {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  } catch (error) {
    console.error('Error formatting price:', error);
    return `${currency} ${value.toFixed(2)}`;
  }
}

function formatPercentage(value) {
  try {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
  } catch (error) {
    console.error('Error formatting percentage:', error);
    return `${value}%`;
  }
}

function generateRandomPrice(basePrice, volatility = 0.05) {
  try {
    const change = (Math.random() - 0.5) * 2 * volatility;
    return basePrice * (1 + change);
  } catch (error) {
    console.error('Error generating random price:', error);
    return basePrice;
  }
}

function getTimeframeData(timeframe) {
  try {
    const dataPoints = {
      '1m': 60,
      '5m': 288,
      '15m': 96,
      '1H': 24,
      '4H': 6,
      '1D': 30,
      '1W': 52
    };
    
    return dataPoints[timeframe] || 30;
  } catch (error) {
    console.error('Error getting timeframe data:', error);
    return 30;
  }
}

// Mock real-time price updates
function createPriceStream(callback, interval = 1000) {
  try {
    return setInterval(() => {
      const mockPrices = {
        BTC: generateRandomPrice(287450, 0.02),
        ETH: generateRandomPrice(12890, 0.03),
        BNB: generateRandomPrice(1245, 0.04),
        LINK: generateRandomPrice(67.80, 0.05),
        SOL: generateRandomPrice(456.90, 0.03),
        ADA: generateRandomPrice(2.45, 0.06)
      };
      
      if (callback) {
        callback(mockPrices);
      }
    }, interval);
  } catch (error) {
    console.error('Error creating price stream:', error);
    return null;
  }
}

// Crypto market data with Brazilian Real prices
const cryptoMarketData = {
  BTC: { name: 'Bitcoin', price: 287450.32, change: 3.2, volume: '45.2B', marketCap: '5.6T' },
  ETH: { name: 'Ethereum', price: 12890.75, change: -1.5, volume: '18.7B', marketCap: '1.5T' },
  BNB: { name: 'Binance Coin', price: 1245.80, change: 2.8, volume: '2.1B', marketCap: '180B' },
  LINK: { name: 'Chainlink', price: 67.80, change: 5.1, volume: '890M', marketCap: '40B' },
  SOL: { name: 'Solana', price: 456.90, change: -0.3, volume: '3.2B', marketCap: '210B' },
  ADA: { name: 'Cardano', price: 2.45, change: 4.7, volume: '1.5B', marketCap: '85B' }
};

// Generate candlestick data
function generateCandlestickData(points = 50, basePrice = 45000) {
  try {
    const data = [];
    let currentPrice = basePrice;
    
    for (let i = 0; i < points; i++) {
      const open = currentPrice + (Math.random() - 0.5) * 1000;
      const close = open + (Math.random() - 0.5) * 800;
      const high = Math.max(open, close) + Math.random() * 400;
      const low = Math.min(open, close) - Math.random() * 400;
      
      data.push({ open, high, low, close, timestamp: Date.now() + i * 60000 });
      currentPrice = close;
    }
    
    return data;
  } catch (error) {
    console.error('Error generating candlestick data:', error);
    return [];
  }
}
