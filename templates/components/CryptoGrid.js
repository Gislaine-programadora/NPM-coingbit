function CryptoGrid({ cryptoData, selectedCrypto, onSelectCrypto }) {
  const chartRefs = React.useRef({});

  const initChart = (symbol, data) => {
    const canvas = chartRefs.current[symbol];
    if (!canvas || !data) return;

    const ctx = canvas.getContext('2d');
    
    const sparkline = Array.from({length: 12}, () => 
      data.price * (0.98 + Math.random() * 0.04)
    );

    new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: Array.from({length: 12}, (_, i) => i),
        datasets: [{
          data: sparkline,
          borderColor: data.change >= 0 ? '#10b981' : '#ef4444',
          backgroundColor: data.change >= 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          borderWidth: 1.5,
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    });
  };

  React.useEffect(() => {
    Object.entries(cryptoData).forEach(([symbol, data]) => {
      setTimeout(() => initChart(symbol, data), 100);
    });
  }, [cryptoData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Object.entries(cryptoData).map(([symbol, data]) => (
        <CryptoCard
          key={symbol}
          symbol={symbol}
          data={data}
          isSelected={selectedCrypto === symbol}
          onSelect={() => onSelectCrypto(symbol)}
          chartRef={el => chartRefs.current[symbol] = el}
        />
      ))}
    </div>
  );
}

function CryptoCard({ symbol, data, isSelected, onSelect, chartRef }) {
  const changeColor = data.change >= 0 ? 'text-green-400' : 'text-red-400';
  const bgColor = data.change >= 0 ? 'bg-green-500/10' : 'bg-red-500/10';

  return (
    <div 
      className={`coingbit-card p-6 cursor-pointer ${
        isSelected ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20' : ''
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor}`}>
            <div className={`icon-${data.icon || 'coins'} text-lg ${changeColor}`}></div>
          </div>
          <div>
            <h3 className="text-white font-semibold">{symbol}</h3>
            <p className="text-slate-400 text-sm">{data.name}</p>
          </div>
        </div>
        
        <div className={`px-2 py-1 rounded-full text-sm font-medium ${bgColor} ${changeColor}`}>
          {data.change >= 0 ? '+' : ''}{data.change?.toFixed(2)}%
        </div>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-white mb-1">
          ${data.price?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
        <div className="text-slate-400 text-sm">
          Vol: ${data.volume?.toLocaleString() || 'N/A'}
        </div>
      </div>

      <div className="h-12 rounded-lg overflow-hidden">
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </div>
  );
}