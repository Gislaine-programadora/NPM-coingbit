function CryptoList({ onSelectCrypto }) {
  try {
    const [cryptos] = React.useState([
      { symbol: 'BTC', name: 'Bitcoin', price: 287450.32, change: 2.5, icon: 'bitcoin' },
      { symbol: 'ETH', name: 'Ethereum', price: 12890.75, change: -1.2, icon: 'coins' },
      { symbol: 'BNB', name: 'Binance Coin', price: 1245.80, change: 3.8, icon: 'coins' },
      { symbol: 'ADA', name: 'Cardano', price: 2.45, change: 5.2, icon: 'coins' },
      { symbol: 'SOL', name: 'Solana', price: 456.90, change: -0.8, icon: 'coins' },
      { symbol: 'DOT', name: 'Polkadot', price: 34.67, change: 1.9, icon: 'coins' }
    ]);

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value);
    };

    return (
      <div className="card" data-name="crypto-list" data-file="components/CryptoList.js">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Mercado de Criptomoedas</h2>
          <div className="icon-refresh-cw text-lg text-gray-500 cursor-pointer hover:text-gray-700"></div>
        </div>

        <div className="space-y-3">
          {cryptos.map((crypto) => (
            <div 
              key={crypto.symbol} 
              onClick={() => onSelectCrypto && onSelectCrypto(crypto.symbol)}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className={`icon-${crypto.icon} text-2xl text-orange-500 mr-4`}></div>
                <div>
                  <h3 className="font-semibold text-gray-900">{crypto.symbol}</h3>
                  <p className="text-sm text-gray-600">{crypto.name}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-gray-900">{formatCurrency(crypto.price)}</p>
                <p className={`text-sm ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('CryptoList component error:', error);
    return null;
  }
}