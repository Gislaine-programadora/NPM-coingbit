function CryptoCard({ symbol, data, isSelected, onSelect, loading }) {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current && data && !loading) {
      const ctx = chartRef.current.getContext('2d');
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const gradient = ctx.createLinearGradient(0, 0, 0, 48);
      gradient.addColorStop(0, data.change >= 0 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      chartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 24}, (_, i) => i),
          datasets: [{
            data: data.sparkline || [],
            borderColor: data.change >= 0 ? '#22c55e' : '#ef4444',
            backgroundColor: gradient,
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          },
          elements: { point: { radius: 0 } }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, loading]);

  if (loading) {
    return (
      <div className="crypto-card animate-pulse" data-name="crypto-card-loading">
        <div className="h-4 bg-[var(--border-color)] rounded mb-4"></div>
        <div className="h-8 bg-[var(--border-color)] rounded mb-2"></div>
        <div className="h-12 bg-[var(--border-color)] rounded"></div>
      </div>
    );
  }

  return (
    <div 
      className={`crypto-card cursor-pointer ${isSelected ? 'glow-effect pulse-glow' : ''}`}
      onClick={onSelect}
      data-name="crypto-card" 
      data-file="components/CryptoCard.js"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            data.change >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            <div className={`icon-${data.icon || 'coins'} text-lg ${
              data.change >= 0 ? 'text-[var(--accent-green)]' : 'text-[var(--accent-red)]'
            }`}></div>
          </div>
          <div>
            <h3 className="text-white font-semibold">{symbol}</h3>
            <p className="text-[var(--text-secondary)] text-sm">{data.name}</p>
          </div>
        </div>
        
        <div className={`${data.change >= 0 ? 'price-change-positive' : 'price-change-negative'}`}>
          {data.change >= 0 ? '+' : ''}{data.change?.toFixed(2)}%
        </div>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-white mb-1">
          ${data.price?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
        <div className="text-[var(--text-secondary)] text-sm">
          Vol: ${data.volume?.toLocaleString() || 'N/A'}
        </div>
      </div>

      <div className="chart-mini">
        <canvas ref={chartRef}></canvas>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-[var(--text-secondary)]">24h High</span>
        <span className="text-white font-medium">${data.high24h?.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-[var(--text-secondary)]">24h Low</span>
        <span className="text-white font-medium">${data.low24h?.toFixed(2)}</span>
      </div>
    </div>
  );
}