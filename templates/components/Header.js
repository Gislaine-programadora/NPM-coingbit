function Header({ isConnected, account, onMetaMaskConnect }) {
  return (
    <header className="coingbit-card p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <div className="icon-trending-up text-white text-xl"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">CoinGBit</h1>
            <p className="text-slate-400">Professional Trading Dashboard</p>
          </div>
        </div>

        <MetaMaskConnect 
          isConnected={isConnected}
          account={account}
          onConnect={onMetaMaskConnect}
        />
      </div>
    </header>
  );
}