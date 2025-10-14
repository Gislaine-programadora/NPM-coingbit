function MarketOverview({ prices }) {
  const marketStats = React.useMemo(() => {
    const cryptos = Object.values(prices);
    const totalMarketCap = cryptos.reduce((sum, crypto) => sum + (crypto.marketCap || 0), 0);
    const avgChange = cryptos.reduce((sum, crypto) => sum + (crypto.change || 0), 0) / cryptos.length;
    const gainers = cryptos.filter(crypto => crypto.change > 0).length;
    const losers = cryptos.filter(crypto => crypto.change < 0).length;

    return { totalMarketCap, avgChange, gainers, losers };
  }, [prices]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" 
         data-name="market-overview" data-file="components/MarketOverview.js">
      
      <div className="crypto-card">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[var(--text-secondary)]">Total Market Cap</h3>
          <div className="icon-trending-up text-[var(--accent-green)] text-lg"></div>
        </div>
        <div className="text-2xl font-bold text-white">
          ${(marketStats.totalMarketCap / 1e12).toFixed(2)}T
        </div>
        <div className="text-[var(--accent-green)] text-sm mt-1">+2.4% (24h)</div>
      </div>

      <div className="crypto-card">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[var(--text-secondary)]">Market Average</h3>
          <div className={`icon-bar-chart text-lg ${
            marketStats.avgChange >= 0 ? 'text-[var(--accent-green)]' : 'text-[var(--accent-red)]'
          }`}></div>
        </div>
        <div className={`text-2xl font-bold ${
          marketStats.avgChange >= 0 ? 'text-[var(--accent-green)]' : 'text-[var(--accent-red)]'
        }`}>
          {marketStats.avgChange >= 0 ? '+' : ''}{marketStats.avgChange.toFixed(2)}%
        </div>
        <div className="text-[var(--text-secondary)] text-sm mt-1">24h Change</div>
      </div>

      <div className="crypto-card">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[var(--text-secondary)]">Gainers vs Losers</h3>
          <div className="icon-pie-chart text-[var(--accent-blue)] text-lg"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--accent-green)]">{marketStats.gainers}</div>
            <div className="text-xs text-[var(--text-secondary)]">Gainers</div>
          </div>
          <div className="w-px h-8 bg-[var(--border-color)]"></div>
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--accent-red)]">{marketStats.losers}</div>
            <div className="text-xs text-[var(--text-secondary)]">Losers</div>
          </div>
        </div>
      </div>

      <div className="crypto-card">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[var(--text-secondary)]">Fear & Greed</h3>
          <div className="icon-activity text-[var(--accent-yellow)] text-lg"></div>
        </div>
        <div className="text-2xl font-bold text-[var(--accent-yellow)]">72</div>
        <div className="text-[var(--text-secondary)] text-sm mt-1">Greed</div>
        <div className="w-full bg-[var(--border-color)] rounded-full h-2 mt-2">
          <div className="bg-[var(--accent-yellow)] h-2 rounded-full" style={{width: '72%'}}></div>
        </div>
      </div>
    </div>
  );
}