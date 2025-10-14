function TopBar({ selectedCrypto, timeframe, onTimeframeChange, balance }) {
  const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D', '1W'];

  return (
    <div className="border-b border-[var(--border-color)] p-4" 
         data-name="topbar" data-file="components/TopBar.js">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-xl font-bold">{selectedCrypto}</h1>
          <span className="text-[var(--text-secondary)] text-sm">Professional Trading</span>
          <div className="flex items-center space-x-3 ml-6">
            <div className="text-center">
              <div className="text-green-400 text-sm font-bold">+15.7%</div>
              <div className="text-xs text-[var(--text-secondary)]">24h Change</div>
            </div>
            <div className="text-center">
              <div className="text-white text-sm font-bold">${balance?.toLocaleString() || '0'}</div>
              <div className="text-xs text-[var(--text-secondary)]">Balance</div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex bg-[var(--secondary-bg)] rounded-lg p-1">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => onTimeframeChange(tf)}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  timeframe === tf
                    ? 'bg-[var(--accent-blue)] text-white'
                    : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="icon-search text-[var(--text-secondary)] cursor-pointer hover:text-white"></div>
            <div className="icon-bell text-[var(--text-secondary)] cursor-pointer hover:text-white"></div>
            <div className="icon-settings text-[var(--text-secondary)] cursor-pointer hover:text-white"></div>
            <div className="icon-user text-[var(--text-secondary)] cursor-pointer hover:text-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}