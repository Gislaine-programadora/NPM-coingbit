function SupportChat() {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([
      { id: 1, text: 'Olá! Como posso ajudá-lo hoje?', isBot: true, time: new Date().toLocaleTimeString() }
    ]);
    const [inputText, setInputText] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(false);

    const handleSendMessage = async () => {
      if (!inputText.trim()) return;

      const userMessage = {
        id: Date.now(),
        text: inputText,
        isBot: false,
        time: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsTyping(true);

      try {
        const response = await invokeAIAgent(
          'Você é um assistente de suporte da CryptoBR, uma plataforma de criptomoedas brasileira. Responda de forma útil, profissional e em português. Ajude com questões sobre: transações, PIX, carteiras, criptomoedas, segurança e problemas técnicos.',
          inputText
        );

        setTimeout(() => {
          const botMessage = {
            id: Date.now() + 1,
            text: response,
            isBot: true,
            time: new Date().toLocaleTimeString()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        }, 1000);
      } catch (error) {
        setIsTyping(false);
        const errorMessage = {
          id: Date.now() + 1,
          text: 'Desculpe, estou com problemas técnicos. Tente novamente em alguns minutos.',
          isBot: true,
          time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    };

    return (
      <div data-name="support-chat" data-file="components/SupportChat.js">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
          >
            <div className="icon-message-circle text-xl"></div>
          </button>
        )}

        {isOpen && (
          <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50">
            <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
              <div className="flex items-center">
                <div className="icon-headphones text-lg mr-2"></div>
                <span className="font-semibold">Suporte CryptoBR</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <div className="icon-x text-lg"></div>
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                >
                  <div className="icon-send text-sm"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('SupportChat component error:', error);
    return null;
  }
}