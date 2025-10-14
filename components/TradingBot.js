function TradingBot({ onStartBot, botStatus, currentTrade }) {
  const [tradeAmount, setTradeAmount] = React.useState(5);

  const handleStartBot = () => {
    if (tradeAmount > 0) {
      onStartBot(tradeAmount);
    }
  };

  const getStatusColor = () => {
    switch (botStatus) {
      case 'running': return 'bg-[var(--accent-green)]';
      case 'stopped': return 'bg-gray-500';
      case 'error': return 'bg-[var(--accent-red)]';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (botStatus) {
      case 'running': return 'Bot Ativo';
      case 'stopped': return 'Bot Parado';
      case 'error': return 'Erro';
      default: return 'Desconhecido';
    }
  };

  return (
    <div className="bot-panel" data-name="trading-bot" data-file="components/TradingBot.js">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Bot de Trading</h2>
        <div className="flex items-center space-x-2">
          <div className={`status-indicator ${getStatusColor()}`}></div>
          <span className="text-[var(--text-secondary)] text-sm">{getStatusText()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-white font-semibold mb-4">Configurações</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[var(--text-secondary)] text-sm mb-2">
                Valor do Trade (BNB)
              </label>
              <input
                type="number"
                value={tradeAmount}
                onChange={(e) => setTradeAmount(parseFloat(e.target.value))}
                className="w-full bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white"
                placeholder="5"
                min="0.1"
                step="0.1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-[var(--primary-bg)] rounded-lg">
                <div className="text-[var(--accent-green)] font-semibold">Take Profit</div>
                <div className="text-white">+30%</div>
              </div>
              <div className="p-3 bg-[var(--primary-bg)] rounded-lg">
                <div className="text-[var(--accent-red)] font-semibold">Stop Loss</div>
                <div className="text-white">-10%</div>
              </div>
            </div>

            <button
              onClick={handleStartBot}
              disabled={botStatus === 'running'}
              className={`w-full trade-btn ${
                botStatus === 'running'
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-[var(--accent-gold)] hover:bg-yellow-600 text-black'
              }`}
            >
              {botStatus === 'running' ? 'Bot em Execução' : 'Iniciar Bot'}
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Trade Atual</h3>
          {currentTrade ? (
            <div className="p-4 bg-[var(--primary-bg)] rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[var(--text-secondary)]">Par:</span>
                <span className="text-white font-semibold">BNB/USDT</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[var(--text-secondary)]">Quantidade:</span>
                <span className="text-white">{currentTrade.quantity} BNB</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[var(--text-secondary)]">Preço Entrada:</span>
                <span className="text-white">${currentTrade.entryPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)]">Status:</span>
                <span className="text-[var(--accent-green)]">Monitorando</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="icon-activity text-[var(--text-secondary)] text-4xl mb-4"></div>
              <p className="text-[var(--text-secondary)]">Nenhum trade ativo</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
