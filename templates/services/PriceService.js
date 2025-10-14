const PriceService = {
  cryptoList: {
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

  generateLivePrices() {
    const prices = {};
    
    Object.entries(this.cryptoList).forEach(([symbol, config]) => {
      const volatility = (Math.random() - 0.5) * 0.1;
      const price = config.basePrice * (1 + volatility);
      const change = volatility * 100;
      
      prices[symbol] = {
        name: config.name,
        price: price,
        change: change,
        volume: Math.floor(Math.random() * 50000000),
        marketCap: Math.floor(price * Math.random() * 1000000000),
        high24h: price * (1 + Math.random() * 0.05),
        low24h: price * (1 - Math.random() * 0.05),
        icon: config.icon,
        timestamp: Date.now()
      };
    });
    
    return prices;
  },

  startRealTimeUpdates(callback) {
    const updatePrices = () => {
      const newPrices = this.generateLivePrices();
      callback(newPrices);
    };

    updatePrices();
    return setInterval(updatePrices, 3000);
  }
};
