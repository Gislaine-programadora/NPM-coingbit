function NewsSection() {
  try {
    const [news] = React.useState([
      {
        id: 1,
        title: 'Bitcoin atinge nova máxima histórica de R$ 290.000',
        excerpt: 'A criptomoeda líder mundial continua sua trajetória de alta...',
        source: 'CryptoNews BR',
        time: '2 horas atrás',
        image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400',
        category: 'Bitcoin'
      },
      {
        id: 2,
        title: 'Ethereum 2.0: Atualização promete reduzir taxas em 90%',
        excerpt: 'Nova versão da blockchain promete revolucionar o mercado DeFi...',
        source: 'Blockchain Today',
        time: '4 horas atrás',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
        category: 'Ethereum'
      },
      {
        id: 3,
        title: 'Banco Central anuncia regulamentação para PIX cripto',
        excerpt: 'Nova normativa facilita integração entre moedas digitais e PIX...',
        source: 'Financial Times BR',
        time: '6 horas atrás',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400',
        category: 'Regulamentação'
      }
    ]);

    const [analysis] = React.useState([
      {
        id: 1,
        title: 'Análise Técnica: BTC/USD',
        author: 'Analista Senior',
        summary: 'Tendência de alta confirmada com rompimento de resistência',
        recommendation: 'Compra',
        target: 'R$ 320.000'
      },
      {
        id: 2,
        title: 'Ethereum: Perspectivas para 2024',
        author: 'Research Team',
        summary: 'Fundamentos sólidos sustentam expectativa de valorização',
        recommendation: 'Manter',
        target: 'R$ 18.000'
      }
    ]);

    return (
      <div className="space-y-8" data-name="news-section" data-file="components/NewsSection.js">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Notícias e Análises</h1>
          <p className="text-lg text-gray-600">Mantenha-se atualizado com as últimas notícias do mercado cripto</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Últimas Notícias</h2>
            <div className="space-y-6">
              {news.map((article) => (
                <div key={article.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex gap-4">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.time}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
                      <p className="text-xs text-gray-500">{article.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Análises de Mercado</h2>
            <div className="space-y-4">
              {analysis.map((item) => (
                <div key={item.id} className="card">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Recomendação:</span>
                      <span className={`text-xs font-medium ${
                        item.recommendation === 'Compra' ? 'text-green-600' :
                        item.recommendation === 'Venda' ? 'text-red-600' :
                        'text-yellow-600'
                      }`}>
                        {item.recommendation}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Meta:</span>
                      <span className="text-xs font-medium">{item.target}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Por {item.author}</p>
                </div>
              ))}
            </div>

            <div className="card bg-gradient-to-r from-purple-500 to-pink-600 text-white mt-6">
              <h3 className="font-semibold mb-2">Relatório Premium</h3>
              <p className="text-sm mb-4">Acesse análises exclusivas e sinais de trading</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold">
                Assinar Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('NewsSection component error:', error);
    return null;
  }
}