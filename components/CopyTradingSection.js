function CopyTradingSection() {
  try {
    const [traders] = React.useState([
      {
        id: 1,
        name: 'Carlos Trader',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        performance: 156.7,
        followers: 2847,
        winRate: 78,
        risk: 'Médio'
      },
      {
        id: 2,
        name: 'Ana Crypto',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
        performance: 234.2,
        followers: 5632,
        winRate: 85,
        risk: 'Alto'
      },
      {
        id: 3,
        name: 'João Bitcoin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        performance: 89.3,
        followers: 1456,
        winRate: 72,
        risk: 'Baixo'
      }
    ]);

    const handleFollowTrader = (traderId) => {
      alert(`Agora você está seguindo o trader ${traderId}!`);
    };

    return (
      <div className="space-y-6" data-name="copy-trading" data-file="components/CopyTradingSection.js">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Copy Trading</h1>
          <p className="text-lg text-gray-600">Siga traders experientes e copie suas estratégias automaticamente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traders.map((trader) => (
            <div key={trader.id} className="card hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <img 
                  src={trader.avatar} 
                  alt={trader.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900">{trader.name}</h3>
                <div className={`inline-block px-2 py-1 rounded-full text-xs ${
                  trader.risk === 'Alto' ? 'bg-red-100 text-red-700' :
                  trader.risk === 'Médio' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  Risco {trader.risk}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Performance:</span>
                  <span className="font-semibold text-green-600">+{trader.performance}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seguidores:</span>
                  <span className="font-semibold">{trader.followers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxa de Acerto:</span>
                  <span className="font-semibold">{trader.winRate}%</span>
                </div>
              </div>

              <button 
                onClick={() => handleFollowTrader(trader.id)}
                className="w-full btn-primary"
              >
                Seguir Trader
              </button>
            </div>
          ))}
        </div>

        <div className="card bg-blue-50">
          <div className="flex items-start">
            <div className="icon-info text-blue-500 mr-3 mt-1"></div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Como funciona o Copy Trading?</h3>
              <p className="text-blue-700 text-sm">
                Ao seguir um trader, suas operações serão automaticamente replicadas em sua carteira 
                proporcionalmente ao valor que você definir. Você pode parar de seguir a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CopyTradingSection component error:', error);
    return null;
  }
}