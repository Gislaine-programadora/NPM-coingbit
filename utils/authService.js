// Authentication service utilities
const AuthService = {
  currentUser: null,
  
  login: async (credentials) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if it's the owner account
      let user;
      if (credentials.email === 'proprietario@cryptobr.com' || credentials.email === 'admin@cryptobr.com') {
        user = {
          id: 'owner_001',
          name: 'Proprietário CryptoBR',
          email: credentials.email,
          role: 'owner',
          balance: 15000000.00, // 15 milhões de saldo
          cryptoBalances: {
            BTC: 52.5432,
            ETH: 145.8765,
            BNB: 890.453,
            ADA: 25000.25,
            SOL: 180.7654,
            DOT: 1250.123
          }
        };
      } else {
        user = {
          id: 'user_001',
          name: credentials.name || 'João Silva',
          email: credentials.email,
          role: 'user',
          balance: 3987765.42,
          cryptoBalances: {
            BTC: 0.15432,
            ETH: 2.8765,
            BNB: 12.453,
            ADA: 1500.25,
            SOL: 8.7654,
            DOT: 45.123
          }
        };
      }
      
      AuthService.currentUser = user;
      localStorage.setItem('cryptobr_user', JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Erro no login');
    }
  },

  register: async (userData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser = await trickleCreateObject('user', {
        name: userData.name,
        email: userData.email,
        cpf: userData.cpf,
        phone: userData.phone,
        pixKey: userData.email,
        balance: 1000.00, // Bonus inicial
        cryptoBalances: JSON.stringify({}),
        createdAt: new Date().toISOString()
      });

      const user = {
        id: newUser.objectId,
        name: userData.name,
        email: userData.email,
        balance: 1000.00,
        cryptoBalances: {}
      };

      AuthService.currentUser = user;
      localStorage.setItem('cryptobr_user', JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Register error:', error);
      throw new Error('Erro no cadastro');
    }
  },

  logout: () => {
    try {
      AuthService.currentUser = null;
      localStorage.removeItem('cryptobr_user');
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  getCurrentUser: () => {
    try {
      if (AuthService.currentUser) {
        return AuthService.currentUser;
      }
      
      const stored = localStorage.getItem('cryptobr_user');
      if (stored) {
        AuthService.currentUser = JSON.parse(stored);
        return AuthService.currentUser;
      }
      
      return null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  },

  isAuthenticated: () => {
    return AuthService.getCurrentUser() !== null;
  }
};