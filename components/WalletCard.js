function WalletCard({ user }) {
  try {
    const [isVisible, setIsVisible] = React.useState(true);
    const balance = user?.balance || 0;

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value);
    };

    return (
      <div className="crypto-card" data-name="wallet-card" data-file="components/WalletCard.js">
        <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold mb-1">Saldo Total</h2>
          <p className="text-sm opacity-90">
            {user?.role === 'owner' ? 'Carteira do Proprietário' : 'Carteira Principal'}
          </p>
        </div>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
          >
            <div className={`icon-${isVisible ? 'eye-off' : 'eye'} text-lg`}></div>
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="text-4xl font-bold mb-2">
            {isVisible ? formatCurrency(balance) : '••••••••'}
          </h3>
          <div className="flex items-center">
            <div className="icon-trending-up text-sm mr-1"></div>
            <span className="text-sm">
              {user?.role === 'owner' ? '+8.7% nas últimas 24h' : '+2.5% nas últimas 24h'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="icon-wallet text-xl mb-2"></div>
            <p className="text-xs opacity-90">Carteira</p>
          </div>
          <div className="text-center">
            <div className="icon-shield text-xl mb-2"></div>
            <p className="text-xs opacity-90">Seguro</p>
          </div>
          <div className="text-center">
            <div className="icon-zap text-xl mb-2"></div>
            <p className="text-xs opacity-90">Rápido</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('WalletCard component error:', error);
    return null;
  }
}