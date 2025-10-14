function RegisterModal({ isOpen, onClose, onRegister, onSwitchToLogin }) {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert('Senhas não coincidem');
        return;
      }
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        onRegister(formData);
        setFormData({
          name: '', email: '', cpf: '', phone: '', password: '', confirmPassword: ''
        });
        onClose();
      } catch (error) {
        alert('Erro no cadastro. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    const handleChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="register-modal" data-file="components/RegisterModal.js">
        <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
          <div className="text-center mb-6">
            <div className="icon-user-plus text-4xl text-blue-600 mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900">Criar Conta</h2>
            <p className="text-gray-600">Junte-se à CryptoBR</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Nome completo"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="text"
                value={formData.cpf}
                onChange={(e) => handleChange('cpf', e.target.value)}
                placeholder="CPF"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="text"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="Senha"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-secondary disabled:opacity-50"
            >
              {loading ? 'Criando...' : 'Criar Conta'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Já tem conta?{' '}
              <button onClick={onSwitchToLogin} className="text-blue-600 hover:text-blue-700 font-medium">
                Fazer login
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
    console.error('RegisterModal component error:', error);
    return null;
  }
}