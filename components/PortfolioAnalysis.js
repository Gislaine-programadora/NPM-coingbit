function PortfolioAnalysis({ user }) {
  try {
    const chartRef = React.useRef(null);
    const chartInstance = React.useRef(null);

    React.useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new ChartJS(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Bitcoin', 'Ethereum', 'Binance Coin', 'Cardano', 'Solana'],
            datasets: [{
              data: [45, 25, 15, 10, 5],
              backgroundColor: ['#f7931a', '#627eea', '#f0b90b', '#0033ad', '#9945ff'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }
        });
      }

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);

    return (
      <div className="space-y-6" data-name="portfolio-analysis" data-file="components/PortfolioAnalysis.js">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance 24h</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+5.2%</div>
              <p className="text-sm text-gray-600">+R$ 206.843,21</p>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Investido</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">R$ 3.780.922,21</div>
              <p className="text-sm text-gray-600">Valor inicial</p>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lucro/Prejuízo</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+R$ 206.843,21</div>
              <p className="text-sm text-gray-600">+5.47% total</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição do Portfólio</h3>
            <div className="h-64 relative">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="icon-trending-up text-green-600 mr-3"></div>
                  <div>
                    <p className="font-medium">Solana (SOL)</p>
                    <p className="text-sm text-gray-600">8.7654 SOL</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">+12.4%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="icon-trending-up text-green-600 mr-3"></div>
                  <div>
                    <p className="font-medium">Cardano (ADA)</p>
                    <p className="text-sm text-gray-600">1500.25 ADA</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">+8.7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PortfolioAnalysis component error:', error);
    return null;
  }
}