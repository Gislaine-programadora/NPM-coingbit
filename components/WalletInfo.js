function WalletInfo() {
  try {
    const walletAddress = "0x18FfAB17283C3257245025180Eb8844F2305Ca81";
    const truncatedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

    return (
      <div className="bot-panel" data-name="wallet-info" data-file="components/WalletInfo.js">
        <h3 className="text-xl font-bold text-white mb-4">Carteira</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-[var(--primary-bg)] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[var(--text-secondary)]">Endereço:</span>
              <button 
                onClick={() => navigator.clipboard.writeText(walletAddress)}
                className="text-[var(--accent-gold)] hover:text-yellow-400 transition-colors"
              >
                <div className="icon-copy text-sm"></div>
              </button>
            </div>
            <div className="text-white font-mono text-sm">{truncatedAddress}</div>
          </div>

          <div className="p-4 bg-[var(--primary-bg)] rounded-lg">
            <div className="text-[var(--text-secondary)] mb-2">Rede:</div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[var(--accent-gold)] rounded-full"></div>
              <span className="text-white">Binance Smart Chain</span>
            </div>
          </div>

          <div className="p-4 bg-[var(--primary-bg)] rounded-lg">
            <div className="text-[var(--text-secondary)] mb-2">Status da Conexão:</div>
            <div className="flex items-center space-x-2">
              <div className="status-indicator bg-[var(--accent-green)]"></div>
              <span className="text-white">Conectado</span>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg">
            <div className="text-white font-semibold mb-2">Auto Transfer</div>
            <div className="text-yellow-100 text-sm">
              Lucros são automaticamente transferidos para a carteira
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('WalletInfo component error:', error);
    return null;
  }
}