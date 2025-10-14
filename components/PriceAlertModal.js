function PriceAlertModal({ isOpen, onClose }) {
  try {
    const [alertData, setAlertData] = React.useState({
      crypto: 'BTC',
      condition: 'above',
      price: '',
      notification: 'push'
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const conditionText = alertData.condition === 'above' ? 'acima de' : 'abaixo de';
      alert(`Alerta criado: ${alertData.crypto} ${conditionText} R$ ${alertData.price}`);
      setAlertData({
        crypto: 'BTC',
        condition: 'above',
        price: '',
        notification: 'push'
      });
      onClose();
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="price-alert-modal" data-file="components/PriceAlertModal.js">
        <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Criar Alerta de Preço</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Criptomoeda</label>
              <select 
                value={alertData.crypto}
                onChange={(e) => setAlertData(prev => ({...prev, crypto: e.target.value}))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="DOT">Polkadot (DOT)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Condição</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setAlertData(prev => ({...prev, condition: 'above'}))}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    alertData.condition === 'above' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600'
                  }`}
                >
                  Acima de
                </button>
                <button
                  type="button"
                  onClick={() => setAlertData(prev => ({...prev, condition: 'below'}))}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    alertData.condition === 'below' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600'
                  }`}
                >
                  Abaixo de
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preço Alvo (R$)</label>
              <input
                type="number"
                step="0.01"
                value={alertData.price}
                onChange={(e) => setAlertData(prev => ({...prev, price: e.target.value}))}
                placeholder="0,00"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Notificação</label>
              <select 
                value={alertData.notification}
                onChange={(e) => setAlertData(prev => ({...prev, notification: e.target.value}))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="push">Notificação Push</option>
                <option value="email">Email</option>
                <option value="both">Push + Email</option>
              </select>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="icon-bell text-orange-500 mr-2 mt-0.5"></div>
                <div className="text-sm text-orange-700">
                  Você será notificado quando {alertData.crypto} estiver {alertData.condition === 'above' ? 'acima' : 'abaixo'} do preço especificado.
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
                className="flex-1 btn-primary"
              >
                Criar Alerta
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PriceAlertModal component error:', error);
    return null;
  }
}