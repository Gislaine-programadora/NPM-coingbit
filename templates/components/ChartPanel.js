function ChartPanel({ selectedCrypto, cryptoData }) {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);
  const [timeframe, setTimeframe] = React.useState('1D');

  React.useEffect(() => {
    if (chartRef.current && cryptoData[selectedCrypto]) {
      const ctx = chartRef.current.getContext('2d');
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const data = generateChartData();
      
      chartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: selectedCrypto,
            data: data.values,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              display: true,
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              ticks: { color: '#94a3b8' }
            },
            y: {
              display: true,
              position: 'right',
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              ticks: { color: '#94a3b8' }
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
  }, [selectedCrypto, cryptoData, timeframe]);

  const generateChartData = () => {
    const points = timeframe === '1H' ? 60 : timeframe === '4H' ? 240 : 
                   timeframe === '1D' ? 24 : 168;
    const labels = Array.from({length: points}, (_, i) => i);
    const basePrice = cryptoData[selectedCrypto]?.price || 1000;
    const values = labels.map(() => basePrice * (0.95 + Math.random() * 0.1));
    return { labels, values };
  };

  return (
    <div className="coingbit-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">{selectedCrypto} Price Chart</h2>
          <p className="text-slate-400">Real-time price movements</p>
        </div>
        
        <div className="flex space-x-2">
          {['1H', '4H', '1D', '1W'].map(period => (
            <button 
              key={period} 
              onClick={() => setTimeframe(period)}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                timeframe === period 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-96">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
