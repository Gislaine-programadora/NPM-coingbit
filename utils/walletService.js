const WalletService = {
  walletAddress: '0x18FfAB17283C3257245025180Eb8844F2305Ca81',

  transferProfit: async (amount) => {
    console.log(`Transferindo $${amount.toFixed(2)} para carteira BSC...`);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const transaction = {
      hash: '0x' + Math.random().toString(16).substr(2, 64),
      to: WalletService.walletAddress,
      value: amount,
      timestamp: Date.now(),
      status: 'success'
    };

    console.log('Transferência concluída:', transaction);
    return transaction;
  }
};
