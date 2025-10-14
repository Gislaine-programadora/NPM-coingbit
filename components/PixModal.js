function PixModal({ isOpen, onClose }) {
  try {
    const [amount, setAmount] = React.useState('');
    const [pixKey, setPixKey] = React.useState('');
    const [operation, setOperation] = React.useState('withdraw');

    const handleSubmit = (e) => {
      e.preventDefault();
      const operationType = operation === 'withdraw' ? 'Saque' : 'Depósito';
      alert(`${operationType} de R$ ${amount} via PIX ${operation === 'withdraw' ? 'para' : 'de'} ${pixKey} iniciado!`);
      setAmount('');
      setPixKey('');
      onClose();
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="pix-modal" data-file="components/PixModal.js">
        <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">PIX - Saque e Depósito</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          <div className="mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setOperation('withdraw')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  operation === 'withdraw' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sacar
              </button>
              <button
                type="button"
                onClick={() => setOperation('deposit')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  operation === 'deposit' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Depositar
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Valor (R$)</label>
              <input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0,00"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chave PIX {operation === 'withdraw' ? '(destino)' : '(origem)'}
              </label>
              <input
                type="text"
                value={pixKey}
                onChange={(e) => setPixKey(e.target.value)}
                placeholder="CPF, e-mail, telefone ou chave aleatória"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="icon-info text-blue-500 mr-2 mt-0.5"></div>
                <div className="text-sm text-blue-700">
                  {operation === 'withdraw' 
                    ? 'O saque será processado em até 5 minutos. Taxa: R$ 2,50'
                    : 'O depósito será creditado instantaneamente após confirmação'
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
                className="flex-1 btn-secondary"
              >
                {operation === 'withdraw' ? 'Sacar' : 'Depositar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PixModal component error:', error);
    return null;
  }
}