function PortfolioSummary({ portfolio, balance }) {
  try {
    const totalValue = Object.entries(portfolio).reduce((total, [symbol, quantity]) => {
      const price = 43250; // Mock price
      return total + (quantity * price);
    }, balance);

    return (
      <div data-name="portfolio-summary" data-file="components/PortfolioSummary.js">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold text-sm">Wallet</h3>
          <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
            Ver Wallet
          </button>
        </div>
        
        <div className="bg-[var(--secondary-bg)] rounded-lg p-3">
          <div className="text-center mb-3">
            <div className="text-white text-lg font-bold">${totalValue.toLocaleString()}</div>
            <div className="text-[var(--text-secondary)] text-xs">Total</div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[var(--text-secondary)]">Cash</span>
              <span className="text-white">${balance.toLocaleString()}</span>
            </div>
            
            {Object.entries(portfolio).slice(0, 3).map(([symbol, quantity]) => {
              if (quantity > 0) {
                return (
                  <div key={symbol} className="flex justify-between items-center text-xs">
                    <span className="text-[var(--text-secondary)]">{symbol.replace('USDT', '')}</span>
                    <span className="text-white">{quantity.toFixed(4)}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-3 pt-2 border-t border-[var(--border-color)]">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[var(--text-secondary)]">P&L 24h</span>
              <span className="text-green-400">+2.85%</span>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PortfolioSummary component error:', error);
    return null;
  }
}