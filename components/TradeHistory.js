function TradeHistory({ trades }) {
  try {
    return (
      <div className="bot-panel" data-name="trade-history" data-file="components/TradeHistory.js">
        <h3 className="text-xl font-bold text-white mb-4">Histórico de Trades</h3>
        
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {trades.length === 0 ? (
            <div className="text-center py-8">
              <div className="icon-clock text-[var(--text-secondary)] text-4xl mb-4"></div>
              <p className="text-[var(--text-secondary)]">Nenhum trade realizado</p>
            </div>
          ) : (
            trades.map((trade, index) => (
              <div key={index} className="p-4 bg-[var(--primary-bg)] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">BNB/USDT</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    trade.type === 'profit' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {trade.type === 'profit' ? 'Lucro' : 'Prejuízo'}
                  </span>
                </div>
                
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Quantidade:</span>
                    <span className="text-white">{trade.quantity} BNB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Entrada:</span>
                    <span className="text-white">${trade.entryPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Saída:</span>
                    <span className="text-white">${trade.exitPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">P&L:</span>
                    <span className={trade.profit >= 0 ? 'text-[var(--accent-green)]' : 'text-[var(--accent-red)]'}>
                      ${trade.profit >= 0 ? '+' : ''}{trade.profit.toFixed(2)} ({trade.profitPercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-[var(--text-secondary)] mt-2">
                  {trade.closedAt.toLocaleString('pt-BR')}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('TradeHistory component error:', error);
    return null;
  }
}