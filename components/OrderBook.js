function OrderBook({ crypto }) {
  const [orderData] = React.useState({
    bids: [
      { price: 43240, amount: 1200 },
      { price: 43235, amount: 800 },
      { price: 43230, amount: 1500 },
      { price: 43225, amount: 2000 },
      { price: 43220, amount: 900 }
    ],
    asks: [
      { price: 43260, amount: 1100 },
      { price: 43265, amount: 750 },
      { price: 43270, amount: 1300 }
    ]
  });

  return (
    <div data-name="order-book" data-file="components/OrderBook.js">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Order Book</h3>
        <span className="text-[var(--text-secondary)] text-xs">Live</span>
      </div>
      
      <div className="bg-[var(--secondary-bg)] rounded-lg p-3">
        <div className="space-y-1">
          <div className="text-[var(--text-secondary)] text-xs font-medium mb-1">
            ASKS
          </div>
          
          {orderData.asks.slice(0, 3).map((order, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-red-400">${order.price.toLocaleString()}</span>
              <span className="text-white">{order.amount}</span>
            </div>
          ))}

          <div className="border-t border-[var(--border-color)] my-2"></div>
          
          <div className="text-[var(--text-secondary)] text-xs font-medium mb-1">
            BIDS
          </div>
          
          {orderData.bids.slice(0, 3).map((order, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-green-400">${order.price.toLocaleString()}</span>
              <span className="text-white">{order.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}