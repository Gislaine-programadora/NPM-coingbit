function PortfolioChart() {
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
            datasets: [{
              data: [30, 25, 20, 15, 10],
              backgroundColor: [
                '#3b82f6',
                '#10b981', 
                '#f59e0b',
                '#ef4444',
                '#8b5cf6'
              ],
              borderWidth: 0,
              cutout: '70%'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
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
      <div data-name="portfolio-chart" data-file="components/PortfolioChart.js">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Investment Portfolio</h3>
          <div className="text-xs text-[var(--text-secondary)]">
            <div className="icon-trending-up text-green-400 inline mr-1"></div>
            Optimized
          </div>
        </div>
        
        <div className="relative">
          <div style={{height: '200px'}}>
            <canvas ref={chartRef}></canvas>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-2xl font-bold">C3</div>
              <div className="text-[var(--text-secondary)] text-sm">Total</div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="text-center mb-3">
            <div className="text-white text-lg font-bold">R$ 2.987.300</div>
            <div className="text-green-400 text-sm">+12.5% (24h)</div>
          </div>
          {[
            { label: 'Bitcoin', value: 'R$ 1.195.000', color: 'bg-orange-500', percent: '40%' },
            { label: 'Ethereum', value: 'R$ 597.000', color: 'bg-blue-500', percent: '20%' },
            { label: 'BNB', value: 'R$ 448.000', color: 'bg-yellow-500', percent: '15%' },
            { label: 'Chainlink', value: 'R$ 299.000', color: 'bg-purple-500', percent: '10%' },
            { label: 'Solana', value: 'R$ 448.300', color: 'bg-green-500', percent: '15%' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${item.color}`}></div>
                <span className="text-[var(--text-secondary)]">{item.label}</span>
              </div>
              <div className="text-right">
                <span className="text-white block">{item.value}</span>
                <span className="text-xs text-[var(--text-secondary)]">{item.percent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('PortfolioChart component error:', error);
    return null;
  }
}