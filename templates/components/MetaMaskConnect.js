function MetaMaskConnect({ isConnected, account, onConnect }) {
  const formatAccount = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <div className="flex items-center space-x-3 coingbit-card p-3">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <div className="icon-wallet text-white text-sm"></div>
        </div>
        <div>
          <div className="text-green-400 text-sm font-medium">Connected</div>
          <div className="text-slate-300 text-xs">{formatAccount(account)}</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="metamask-connect coingbit-card p-3 flex items-center space-x-3"
      onClick={onConnect}
    >
      <img 
        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=40&h=40&fit=crop&crop=face" 
        alt="Connect MetaMask"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <div className="text-white font-medium">Connect Wallet</div>
        <div className="text-slate-400 text-xs">Click to connect MetaMask</div>
      </div>
    </div>
  );
}