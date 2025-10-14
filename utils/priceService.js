const PriceService = {
  cryptoData: {
    BTC: { name: 'Bitcoin', basePrice: 43250, icon: 'bitcoin' },
    ETH: { name: 'Ethereum', basePrice: 2650, icon: 'coins' },
    BNB: { name: 'Binance Coin', basePrice: 315, icon: 'coins' },
    ADA: { name: 'Cardano', basePrice: 0.48, icon: 'coins' },
    SOL: { name: 'Solana', basePrice: 98, icon: 'coins' },
    DOT: { name: 'Polkadot', basePrice: 6.25, icon: 'coins' },
    LINK: { name: 'Chainlink', basePrice: 14.80, icon: 'link' },
    MATIC: { name: 'Polygon', basePrice: 0.85, icon: 'coins' },
    AVAX: { name: 'Avalanche', basePrice: 36.50, icon: 'mountain' },
    UNI: { name: 'Uniswap', basePrice: 7.20, icon: 'repeat' },
    ALGO: { name: 'Algorand', basePrice: 0.18, icon: 'coins' },
    XRP: { name: 'Ripple', basePrice: 0.62, icon: 'coins' }
  },

  generateMockPrices() {
    const prices = {};
    
    Object.entries(this.cryptoData).forEach(([symbol, data]) => {
      const volatility = Math.random() * 0.1 - 0.05; // -5% to +5%
      const price = data.basePrice * (1 + volatility);
      const change = volatility * 100;
      
      // Generate sparkline data
      const sparkline = Array.from({length: 24}, () => 
        data.basePrice * (1 + (Math.random() * 0.1 - 0.05))
      );
      
      prices[symbol] = {
        name: data.name,
        price: price,
        change: change,
        volume: Math.floor(Math.random() * 10000000),
        marketCap: Math.floor(price * Math.random() * 1000000000),
        high24h: price * 1.05,
        low24h: price * 0.95,
        sparkline: sparkline,
        icon: data.icon,
        lastUpdate: new Date().toISOString()
      };
    });
    
    return prices;
  },

  formatPrice(price, decimals = 2) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(price);
  },

  formatChange(change) {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  }
};