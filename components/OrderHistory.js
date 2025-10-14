function OrderHistory({ orders }) {
  return (
    <div data-name="order-history" data-file="components/OrderHistory.js">
      <h3 className="text-white font-semibold mb-4">Recent Orders</h3>
      
      <div className="bg-[var(--secondary-bg)] rounded-lg p-4">
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {orders.length === 0 ? (
            <div className="text-center text-[var(--text-secondary)] text-sm py-4">
              No orders yet
            </div>
          ) : (
            orders.slice(0, 10).map((order) => (
              <div key={order.id} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    order.side === 'buy' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-[var(--text-secondary)]">
                    {order.symbol.replace('USDT', '')}
                  </span>
                </div>
                
                <div className="text-right">
                  <div className={`${
                    order.side === 'buy' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {order.side.toUpperCase()} {order.quantity}
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    ${order.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}