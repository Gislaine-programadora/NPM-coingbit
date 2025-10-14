function LoginModal({ isOpen, onClose, onLogin, onSwitchToRegister }) {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        onLogin({ email, name: 'João Silva' });
        setEmail('');
        setPassword('');
        onClose();
      } catch (error) {
        alert('Erro no login. Verifique suas credenciais.');
      } finally {
        setLoading(false);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="login-modal" data-file="components/LoginModal.js">
        <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4">
          <div className="text-center mb-6">
            <div className="icon-bitcoin text-4xl text-orange-500 mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900">Entrar na CryptoBR</h2>
            <p className="text-gray-600">Acesse sua carteira digital</p>
            <div className="mt-3 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
              <p><strong>Conta Proprietário:</strong> proprietario@cryptobr.com</p>
              <p><strong>Conta Usuário:</strong> qualquer email válido</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Não tem conta?{' '}
              <button onClick={onSwitchToRegister} className="text-orange-500 hover:text-orange-600 font-medium">
                Criar conta
              </button>
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <div className="icon-x text-xl"></div>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginModal component error:', error);
    return null;
  }
}