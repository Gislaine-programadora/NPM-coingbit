function TradePanel({ crypto }) {
  try {
    const [orderType, setOrderType] = React.useState('buy');
    const [amount, setAmount] = React.useState('');
    const [price, setPrice] = React.useState('');

    return (
      <div data-name="trade-panel" data-file="components/TradePanel.js">
        <h3 className="text-white font-semibold mb-4">Asset Allocation</h3>
        
        <div className="bg-[var(--secondary-bg)] rounded-lg p-4">
          <div className="flex bg-[var(--primary-bg)] rounded-lg p-1 mb-4">
            <button
              onClick={() => setOrderType('buy')}
              className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-colors ${
                orderType === 'buy'
                  ? 'bg-emerald-600 text-white'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              Invest
            </button>
            <button
              onClick={() => setOrderType('sell')}
              className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-colors ${
                orderType === 'sell'
                  ? 'bg-orange-600 text-white'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              Rebalance
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[var(--text-secondary)] text-sm mb-1">Investment Amount (R$)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-white text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[var(--text-secondary)] text-sm mb-1">Target Allocation (%)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                max="100"
                className="w-full bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-white text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="bg-[var(--primary-bg)] rounded-lg p-3 mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[var(--text-secondary)]">Risk Score</span>
                <span className="text-yellow-400">Medium</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-secondary)]">Expected ROI</span>
                <span className="text-green-400">+12.5% APY</span>
              </div>
            </div>

            <button
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                orderType === 'buy'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-orange-600 hover:bg-orange-700 text-white'
              }`}
            >
              {orderType === 'buy' ? 'Execute Investment' : 'Rebalance Portfolio'}
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TradePanel component error:', error);
    return null;
  }
}