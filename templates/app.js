function App() {
  const [cryptoData, setCryptoData] = React.useState({});
  const [selectedCrypto, setSelectedCrypto] = React.useState('BTC');
  const [isConnected, setIsConnected] = React.useState(false);
  const [account, setAccount] = React.useState('');

  React.useEffect(() => {
    PriceService.startRealTimeUpdates(setCryptoData);
    MetaMaskService.checkConnection().then(connected => {
      setIsConnected(connected.isConnected);
      setAccount(connected.account);
    });
  }, []);

  return (
    <div className="min-h-screen p-4">
      <Header 
        isConnected={isConnected} 
        account={account} 
        onMetaMaskConnect={() => MetaMaskService.connect().then(result => {
          setIsConnected(result.isConnected);
          setAccount(result.account);
        })}
      />
      
      <div className="container mx-auto mt-8 space-y-8">
        <CryptoGrid 
          cryptoData={cryptoData}
          selectedCrypto={selectedCrypto}
          onSelectCrypto={setSelectedCrypto}
        />
        
        <ChartPanel 
          selectedCrypto={selectedCrypto}
          cryptoData={cryptoData}
        />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);