const MetaMaskService = {
  async checkConnection() {
    if (typeof window.ethereum === 'undefined') {
      return { isConnected: false, account: null, error: 'MetaMask not installed' };
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      return {
        isConnected: accounts.length > 0,
        account: accounts[0] || null
      };
    } catch (error) {
      return { isConnected: false, account: null, error: error.message };
    }
  },

  async connect() {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to continue');
      return { isConnected: false, account: null };
    }

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      return {
        isConnected: true,
        account: accounts[0]
      };
    } catch (error) {
      console.error('MetaMask connection error:', error);
      return { isConnected: false, account: null, error: error.message };
    }
  },

  async getBalance(address) {
    if (!address || typeof window.ethereum === 'undefined') return '0';

    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      
      return (parseInt(balance, 16) / 1e18).toFixed(4);
    } catch (error) {
      console.error('Error getting balance:', error);
      return '0';
    }
  }
};
