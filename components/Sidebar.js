function Sidebar({ selectedCrypto, onSelectCrypto }) {
  const [cryptoData, setCryptoData] = React.useState([
    { symbol: 'BTCUSDT', name: 'Bitcoin', price: '$43,250', change: 3.2, color: 'bg-orange-500' },
    { symbol: 'ETHUSDT', name: 'Ethereum', price: '$2,890', change: -1.5, color: 'bg-blue-500' },
    { symbol: 'BNBUSDT', name: 'Binance', price: '$345', change: 2.8, color: 'bg-yellow-500' },
    { symbol: 'ADAUSDT', name: 'Cardano', price: '$0.45', change: 5.1, color: 'bg-purple-500' },
    { symbol: 'SOLUSDT', name: 'Solana', price: '$98.50', change: -0.3, color: 'bg-green-500' },
    { symbol: 'DOTUSDT', name: 'Polkadot', price: '$6.25', change: 4.7, color: 'bg-pink-500' },
    { symbol: 'LINKUSDT', name: 'Chainlink', price: '$14.80', change: 1.9, color: 'bg-indigo-500' },
    { symbol: 'MATICUSDT', name: 'Polygon', price: '$0.85', change: -2.1, color: 'bg-purple-600' }
  ]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prevData => 
        prevData.map(crypto => ({
          ...crypto,
          change: crypto.change + (Math.random() - 0.5) * 2,
          price: crypto.price.replace(/[\d,]+/, (match) => {
            const num = parseFloat(match.replace(',', ''));
            const newNum = num * (1 + (Math.random() - 0.5) * 0.02);
            return newNum.toLocaleString('en-US');
          })
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-64 bg-[var(--secondary-bg)] p-4 border-r border-[var(--border-color)]" 
         data-name="sidebar" data-file="components/Sidebar.js">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3 flex items-center justify-center">
          <div className="icon-trending-up text-white text-sm"></div>
        </div>
        <div>
          <span className="text-white font-bold text-lg block">CryptoTrader</span>
          <span className="text-[var(--text-secondary)] text-xs">Professional</span>
        </div>
      </div>

      <nav className="space-y-2 mb-8">
        <div className="sidebar-item bg-[var(--accent-blue)] text-white">
          <div className="icon-bar-chart text-lg mr-3"></div>
          <span>Trading</span>
        </div>
        <div className="sidebar-item">
          <div className="icon-pie-chart text-lg mr-3"></div>
          <span>Portfolio</span>
        </div>
        <div className="sidebar-item">
          <div className="icon-clock text-lg mr-3"></div>
          <span>History</span>
        </div>
        <div className="sidebar-item">
          <div className="icon-bell text-lg mr-3"></div>
          <span>Alerts</span>
        </div>
        <div className="sidebar-item">
          <div className="icon-settings text-lg mr-3"></div>
          <span>Settings</span>
        </div>
      </nav>

      <div className="space-y-3">
        {cryptoData.map((crypto) => (
          <div 
            key={crypto.symbol}
            onClick={() => onSelectCrypto(crypto.symbol)}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedCrypto === crypto.symbol 
                ? 'bg-[var(--accent-blue)] bg-opacity-20 border border-blue-500' 
                : 'hover:bg-[var(--primary-bg)]'
            }`}
          >
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${crypto.color}`}></div>
                <div>
                  <span className="text-white font-medium block">{crypto.symbol}</span>
                  <span className="text-xs text-[var(--text-secondary)]">{crypto.name}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[var(--text-secondary)] text-xs block">{crypto.price}</span>
                <span className={`text-xs ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}