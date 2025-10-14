function TradingViewChart({ symbol, timeframe }) {
  try {
    const chartRef = React.useRef(null);
    const widgetRef = React.useRef(null);

    React.useEffect(() => {
      if (chartRef.current && window.TradingView) {
        // Clear previous widget
        if (widgetRef.current) {
          try {
            widgetRef.current.remove();
          } catch (e) {
            console.warn('Error removing previous widget:', e);
          }
        }

        // Clear container
        chartRef.current.innerHTML = '';

        // Create unique container ID
        const containerId = `tradingview_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        chartRef.current.id = containerId;

        try {
          widgetRef.current = new window.TradingView.widget({
            autosize: true,
            symbol: `BINANCE:${symbol}`,
            interval: timeframe,
            timezone: 'America/Sao_Paulo',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#0f1419',
            enable_publishing: false,
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            container_id: containerId,
            studies: [
              'Volume@tv-basicstudies',
              'MACD@tv-basicstudies',
              'RSI@tv-basicstudies'
            ],
            overrides: {
              'paneProperties.background': '#0f1419',
              'paneProperties.vertGridProperties.color': '#2d3748',
              'paneProperties.horzGridProperties.color': '#2d3748',
              'symbolWatermarkProperties.transparency': 90,
              'scalesProperties.textColor': '#a0aec0'
            },
            disabled_features: [
              'use_localstorage_for_settings',
              'volume_force_overlay'
            ],
            enabled_features: [
              'study_templates'
            ]
          });
        } catch (error) {
          console.error('Error creating TradingView widget:', error);
        }
      }

      return () => {
        if (widgetRef.current) {
          try {
            widgetRef.current.remove();
          } catch (e) {
            console.warn('Error cleaning up widget:', e);
          }
        }
      };
    }, [symbol, timeframe]);

    return (
      <div className="h-full" data-name="tradingview-chart" data-file="components/TradingViewChart.js">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-white text-lg font-semibold">{symbol}</h2>
            <div className="flex items-center space-x-4 mt-1">
              <span className="text-green-400 text-sm">+3.25%</span>
              <span className="text-[var(--text-secondary)] text-sm">Live Trading</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Ver Ordem
            </button>
            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
              Transfer
            </button>
            <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
              Pagamento
            </button>
            <button className="px-3 py-1 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-colors">
              Stack
            </button>
          </div>
        </div>
        
        <div 
          ref={chartRef}
          className="bg-[var(--primary-bg)] rounded-lg"
          style={{height: 'calc(100% - 80px)'}}
        />
      </div>
    );
  } catch (error) {
    console.error('TradingViewChart component error:', error);
    return (
      <div className="h-full flex items-center justify-center text-white">
        <div className="text-center">
          <div className="icon-alert-circle text-4xl mb-4"></div>
          <p>Chart loading...</p>
        </div>
      </div>
    );
  }
}