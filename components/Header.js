function Header() {
  return (
    <header className="bg-[var(--card-bg)] border-b border-[var(--border-color)] sticky top-0 z-50" 
            data-name="header" data-file="components/Header.js">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <div className="icon-trending-up text-white text-lg"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CoinGBit</h1>
              <p className="text-[var(--text-secondary)] text-sm">Professional Trading</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="text-center">
                <div className="text-[var(--accent-green)] font-bold">$2.1T</div>
                <div className="text-[var(--text-secondary)]">Market Cap</div>
              </div>
              <div className="text-center">
                <div className="text-[var(--accent-blue)] font-bold">65.2%</div>
                <div className="text-[var(--text-secondary)]">BTC Dominance</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="icon-bell text-[var(--text-secondary)] hover:text-white cursor-pointer text-lg"></div>
              <div className="icon-settings text-[var(--text-secondary)] hover:text-white cursor-pointer text-lg"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <div className="icon-user text-white text-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}