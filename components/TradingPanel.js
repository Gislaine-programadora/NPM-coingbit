function TradingPanel({ symbol, balance, onTrade }) {
  const [side, setSide] = React.useState('buy');
  const [orderType, setOrderType] = React.useState('market');
  const [quantity, setQuantity] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [currentPrice] = React.useState(43250);

  const handleTrade = () => {
    if (!quantity || (orderType === 'limit' && !price)) {
      alert('Please fill all required fields');
      return;
    }

    const tradePrice = orderType === 'market' ? currentPrice : parseFloat(price);
    const tradeQuantity = parseFloat(quantity);
    const totalCost = tradePrice * tradeQuantity;

    if (side === 'buy' && totalCost > balance) {
      alert('Insufficient balance');
      return;
    }

    onTrade({
      symbol,
      side,
      type: orderType,
      quantity: tradeQuantity,
      price: tradePrice
    });

    setQuantity('');
    setPrice('');
    alert(`${side.toUpperCase()} order executed successfully!`);
  };

  const calculateTotal = () => {
    if (!quantity) return 0;
    const tradePrice = orderType === 'market' ? currentPrice : (price || 0);
    return (parseFloat(quantity) * tradePrice).toFixed(2);
  };

  return (
    <div data-name="trading-panel" data-file="components/TradingPanel.js">
      <h3 className="text-white font-semibold mb-4">Trading Panel</h3>
      
      <div className="bg-[var(--secondary-bg)] rounded-lg p-4">
        <div className="flex bg-[var(--primary-bg)] rounded-lg p-1 mb-4">
          <button
            onClick={() => setSide('buy')}
            className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-colors ${
              side === 'buy'
                ? 'bg-green-600 text-white'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            BUY
          </button>
          <button
            onClick={() => setSide('sell')}
            className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-colors ${
              side === 'sell'
                ? 'bg-red-600 text-white'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            SELL
          </button>
        </div>

        <div className="flex bg-[var(--primary-bg)] rounded-lg p-1 mb-4">
          <button
            onClick={() => setOrderType('market')}
            className={`flex-1 py-1 px-3 rounded text-xs transition-colors ${
              orderType === 'market'
                ? 'bg-blue-600 text-white'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Market
          </button>
          <button
            onClick={() => setOrderType('limit')}
            className={`flex-1 py-1 px-3 rounded text-xs transition-colors ${
              orderType === 'limit'
                ? 'bg-blue-600 text-white'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Limit
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-[var(--text-secondary)] text-sm mb-1">Quantity</label>
            <input
              type="number"
              step="0.00001"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="0.00000"
              className="w-full bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-white text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {orderType === 'limit' && (
            <div>
              <label className="block text-[var(--text-secondary)] text-sm mb-1">Price ($)</label>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="w-full bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-white text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          )}

          <div className="bg-[var(--primary-bg)] rounded-lg p-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[var(--text-secondary)]">Balance:</span>
              <span className="text-white">${balance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[var(--text-secondary)]">Total:</span>
              <span className="text-white">${calculateTotal()}</span>
            </div>
          </div>

          <button
            onClick={handleTrade}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              side === 'buy'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            {side.toUpperCase()} {symbol}
          </button>
        </div>
      </div>
    </div>
  );
}