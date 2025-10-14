const BinanceService = {
  createMarketOrder: async (symbol, side, quantity) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockPrice = 350 + (Math.random() - 0.5) * 20;
    
    return {
      symbol,
      side,
      quantity,
      entryPrice: mockPrice,
      timestamp: Date.now(),
      status: 'FILLED'
    };
  },

  getCurrentPrice: async (symbol) => {
    const basePrice = 350;
    const variation = (Math.random() - 0.5) * 10;
    return basePrice + variation;
  }
};
