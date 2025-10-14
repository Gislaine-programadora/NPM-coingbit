function PortfolioCard({ portfolio, totalProfit }) {
  const profitPercentage = portfolio > 0 ? (totalProfit / portfolio) * 100 : 0;

  return (
    <div className="bot-panel" data-name="portfolio-card" data-file="components/PortfolioCard.js">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Portfólio</h2>
        <div className="icon-trending-up text-[var(--accent-green)] text-xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">
            ${portfolio.toFixed(2)}
          </div>
          <p className="text-[var(--text-secondary)]">Saldo Disponível</p>
        </div>

        <div className="text-center">
          <div className={`text-3xl font-bold mb-2 ${
            totalProfit >= 0 ? 'text-[var(--accent-green)]' : 'text-[var(--accent-red)]'
          }`}>
            ${totalProfit >= 0 ? '+' : ''}{totalProfit.toFixed(2)}
          </div>
          <p className="text-[var(--text-secondary)]">Lucro Total</p>
        </div>

        <div className="text-center">
          <div className={`text-3xl font-bold mb-2 ${
            profitPercentage >= 0 ? 'text-[var(--accent-green)]' : 'text-[var(--accent-red)]'
          }`}>
            {profitPercentage >= 0 ? '+' : ''}{profitPercentage.toFixed(2)}%
          </div>
          <p className="text-[var(--text-secondary)]">Performance</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-[var(--primary-bg)] rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[var(--text-secondary)]">Capital Inicial:</span>
          <span className="text-white">$3,987.00</span>
        </div>
      </div>
    </div>
  );
}
