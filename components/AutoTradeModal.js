function AutoTradeModal({ isOpen, onClose }) {
  try {
    const [formData, setFormData] = React.useState({
      crypto: 'BTC',
      orderType: 'stop_loss',
      triggerPrice: '',
      amount: '',
      percentage: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const orderTypeText = formData.orderType === 'stop_loss' ? 'Stop Loss' : 'Take Profit';
      alert(`${orderTypeText} criado para ${formData.crypto} em R$ ${formData.triggerPrice}`);
      setFormData({
        crypto: 'BTC',
        orderType: 'stop_loss',
        triggerPrice: '',
        amount: '',
        percentage: ''
      });
      onClose();
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="auto-trade-modal" data-file="components/AutoTradeModal.js">
        <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Negociação Automática</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Criptomoeda</label>
              <select 
                value={formData.crypto}
                onChange={(e) => setFormData(prev => ({...prev, crypto: e.target.value}))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Ordem</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({...prev, orderType: 'stop_loss'}))}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    formData.orderType === 'stop_loss' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600'
                  }`}
                >
                  Stop Loss
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({...prev, orderType: 'take_profit'}))}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    formData.orderType === 'take_profit' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600'
                  }`}
                >
                  Take Profit
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preço de Ativação (R$)</label>
              <input
                type="number"
                step="0.01"
                value={formData.triggerPrice}
                onChange={(e) => setFormData(prev => ({...prev, triggerPrice: e.target.value}))}
                placeholder="0,00"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantidade</label>
              <input
                type="number"
                step="0.00000001"
                value={formData.amount}
                onChange={(e) => setFormData(prev => ({...prev, amount: e.target.value}))}
                placeholder="0.00000000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className={`p-4 rounded-lg ${formData.orderType === 'stop_loss' ? 'bg-red-50' : 'bg-green-50'}`}>
              <div className="flex items-start">
                <div className={`icon-info ${formData.orderType === 'stop_loss' ? 'text-red-500' : 'text-green-500'} mr-2 mt-0.5`}></div>
                <div className={`text-sm ${formData.orderType === 'stop_loss' ? 'text-red-700' : 'text-green-700'}`}>
                  {formData.orderType === 'stop_loss' 
                    ? 'Ordem será executada quando o preço cair para o valor especificado'
                    : 'Ordem será executada quando o preço subir para o valor especificado'
                  }
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Criar Ordem
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AutoTradeModal component error:', error);
    return null;
  }
}