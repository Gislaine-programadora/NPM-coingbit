function TradingChart({ crypto, timeframe }) {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const generateCandleData = () => {
        const data = [];
        let basePrice = 45000;
        
        for (let i = 0; i < 50; i++) {
          const open = basePrice + (Math.random() - 0.5) * 2000;
          const close = open + (Math.random() - 0.5) * 1000;
          const high = Math.max(open, close) + Math.random() * 500;
          const low = Math.min(open, close) - Math.random() * 500;
          
          data.push({
            x: i,
            o: open,
            h: high,
            l: low,
            c: close
          });
          
          basePrice = close;
        }
        return data;
      };

      chartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 50}, (_, i) => i),
          datasets: [{
            label: crypto,
            data: generateCandleData().map(d => d.c),
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.1,
            pointRadius: 0,
            pointHoverRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              display: true,
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                drawBorder: false
              },
              ticks: {
                color: '#a0aec0'
              }
            },
            y: {
              display: true,
              position: 'right',
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                drawBorder: false
              },
              ticks: {
                color: '#a0aec0'
              }
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [crypto, timeframe]);

  return (
    <div className="h-full" data-name="trading-chart" data-file="components/TradingChart.js">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-white text-lg font-semibold">{crypto}</h2>
          <div className="flex items-center space-x-4 mt-1">
            <span className="text-green-400 text-sm">+3.25%</span>
            <span className="text-[var(--text-secondary)] text-sm">+$9,120.00</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-green-400 text-2xl font-bold">$43,250</div>
          <div className="text-[var(--text-secondary)] text-sm">Current Price</div>
          <div className="text-xs text-[var(--text-secondary)] mt-1">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
            Live
          </div>
        </div>
      </div>
      
      <div className="chart-container p-4" style={{height: 'calc(100% - 80px)'}}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}