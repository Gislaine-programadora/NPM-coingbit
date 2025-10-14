function EducationSection() {
  try {
    const [articles] = React.useState([
      {
        id: 1,
        title: 'Como Começar a Investir em Bitcoin',
        excerpt: 'Guia completo para iniciantes sobre investimentos em Bitcoin e criptomoedas.',
        category: 'Iniciante',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400'
      },
      {
        id: 2,
        title: 'Análise Técnica para Criptomoedas',
        excerpt: 'Aprenda a ler gráficos e identificar tendências no mercado de criptomoedas.',
        category: 'Avançado',
        readTime: '10 min',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400'
      },
      {
        id: 3,
        title: 'Segurança em Carteiras Digitais',
        excerpt: 'Melhores práticas para manter suas criptomoedas seguras.',
        category: 'Segurança',
        readTime: '7 min',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400'
      }
    ]);

    const [tutorials] = React.useState([
      {
        id: 1,
        title: 'Como Fazer Sua Primeira Compra',
        duration: '3:45',
        type: 'video'
      },
      {
        id: 2,
        title: 'Configurando Alertas de Preço',
        duration: '2:30',
        type: 'video'
      },
      {
        id: 3,
        title: 'Usando Stop Loss e Take Profit',
        duration: '5:20',
        type: 'video'
      }
    ]);

    return (
      <div className="space-y-8" data-name="education-section" data-file="components/EducationSection.js">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Centro Educacional</h1>
          <p className="text-lg text-gray-600">Aprenda sobre criptomoedas e se torne um investidor mais inteligente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="card hover:shadow-xl transition-shadow cursor-pointer">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  article.category === 'Iniciante' ? 'bg-green-100 text-green-700' :
                  article.category === 'Avançado' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.excerpt}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tutoriais em Vídeo</h2>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <div className="icon-play text-white"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600">Duração: {tutorial.duration}</p>
                </div>
                <div className="icon-chevron-right text-gray-400"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h3 className="text-xl font-bold mb-4">Quiz Interativo</h3>
            <p className="mb-4">Teste seus conhecimentos sobre criptomoedas</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Quiz
            </button>
          </div>
          
          <div className="card bg-gradient-to-r from-green-500 to-teal-600 text-white">
            <h3 className="text-xl font-bold mb-4">Simulador de Trading</h3>
            <p className="mb-4">Pratique sem riscos com dinheiro virtual</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Experimentar
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('EducationSection component error:', error);
    return null;
  }
}