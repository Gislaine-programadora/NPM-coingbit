function App() {
  const [selectedCrypto, setSelectedCrypto] = React.useState('BTC');
  const [prices, setPrices] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate real-time price updates
    const updatePrices = () => {
      const newPrices = PriceService.generateMockPrices();
      setPrices(newPrices);
      setLoading(false);
    };

    updatePrices();
    const interval = setInterval(updatePrices, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" data-name="app" data-file="app.js">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <MarketOverview prices={prices} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Object.entries(prices).map(([symbol, data]) => (
                <CryptoCard
                  key={symbol}
                  symbol={symbol}
                  data={data}
                  isSelected={selectedCrypto === symbol}
                  onSelect={() => setSelectedCrypto(symbol)}
                  loading={loading}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <TradingPanel selectedCrypto={selectedCrypto} prices={prices} />
            <PriceChart symbol={selectedCrypto} />
          </div>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
