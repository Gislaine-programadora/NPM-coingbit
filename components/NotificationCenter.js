function NotificationCenter() {
  try {
    const [notifications, setNotifications] = React.useState([
      {
        id: 1,
        type: 'price_alert',
        title: 'Alerta de Preço',
        message: 'Bitcoin atingiu R$ 290.000!',
        timestamp: new Date(),
        read: false
      },
      {
        id: 2,
        type: 'transaction',
        title: 'Transação Concluída',
        message: 'Depósito PIX de R$ 5.000 processado',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        read: true
      }
    ]);
    const [isOpen, setIsOpen] = React.useState(false);

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id) => {
      setNotifications(prev => 
        prev.map(n => n.id === id ? {...n, read: true} : n)
      );
    };

    const getIcon = (type) => {
      switch(type) {
        case 'price_alert': return 'bell';
        case 'transaction': return 'credit-card';
        case 'security': return 'shield';
        default: return 'info';
      }
    };

    return (
      <div className="relative" data-name="notification-center" data-file="components/NotificationCenter.js">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <div className="icon-bell text-xl"></div>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto z-50">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-900">Notificações</h3>
            </div>
            
            <div className="divide-y">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-start">
                    <div className={`icon-${getIcon(notification.type)} text-lg mr-3 mt-1 ${
                      notification.type === 'price_alert' ? 'text-orange-500' :
                      notification.type === 'transaction' ? 'text-green-500' :
                      'text-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{notification.title}</h4>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {notification.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('NotificationCenter component error:', error);
    return null;
  }
}