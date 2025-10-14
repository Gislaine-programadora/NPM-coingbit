// Trading service for crypto operations
const TradingService = {
  // Mock prices for different cryptocurrencies
  mockPrices: {
    'BTCUSDT': 43250.00,
    'ETHUSDT': 2890.50,
    'BNBUSDT': 345.20,
    'ADAUSDT': 0.45,
    'SOLUSDT': 98.50,
    'DOTUSDT': 6.25,
    'LINKUSDT': 14.80,
    'MATICUSDT': 0.85
  },

  getCurrentPrice: (symbol) => {
    try {
      const basePrice = TradingService.mockPrices[symbol] || 100;
      const volatility = 0.02; // 2% volatility
      const change = (Math.random() - 0.5) * 2 * volatility;
      return basePrice * (1 + change);
    } catch (error) {
      console.error('Error getting current price:', error);
      return 100;
    }
  },

  formatPrice: (price) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(price);
    } catch (error) {
      console.error('Error formatting price:', error);
      return `$${price.toFixed(2)}`;
    }
  },

  calculateTotal: (quantity, price) => {
    try {
      return quantity * price;
    } catch (error) {
      console.error('Error calculating total:', error);
      return 0;
    }
  },

  validateOrder: (order, balance, portfolio) => {
    try {
      const { side, quantity, price, symbol } = order;
      
      if (side === 'buy') {
        const total = TradingService.calculateTotal(quantity, price);
        if (total > balance) {
          return { valid: false, message: 'Insufficient balance' };
        }
      } else if (side === 'sell') {
        const holdings = portfolio[symbol] || 0;
        if (quantity > holdings) {
          return { valid: false, message: 'Insufficient holdings' };
        }
      }
      
      return { valid: true };
    } catch (error) {
      console.error('Error validating order:', error);
      return { valid: false, message: 'Validation error' };
    }
  },

  // Simulate real-time price updates
  createPriceStream: (callback, interval = 2000) => {
    try {
      return setInterval(() => {
        const updatedPrices = {};
        
        Object.keys(TradingService.mockPrices).forEach(symbol => {
          updatedPrices[symbol] = TradingService.getCurrentPrice(symbol);
        });
        
        if (callback) {
          callback(updatedPrices);
        }
      }, interval);
    } catch (error) {
      console.error('Error creating price stream:', error);
      return null;
    }
  }
};