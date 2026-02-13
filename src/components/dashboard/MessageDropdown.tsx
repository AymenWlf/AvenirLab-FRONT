import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, MailOpen } from 'lucide-react';
import { Message } from '../../types/user';

interface MessageDropdownProps {
  messages: Message[];
  isOpen: boolean;
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
}

const MessageDropdown: React.FC<MessageDropdownProps> = ({
  messages,
  isOpen,
  onClose,
  onMarkAsRead
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays < 7) return `Il y a ${diffDays}j`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Messages</h3>
          {unreadCount > 0 && (
            <p className="text-xs text-gray-500">{unreadCount} non lu{unreadCount > 1 ? 's' : ''}</p>
          )}
        </div>
      </div>

      {/* Messages List */}
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <Mail className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">Aucun message</p>
            <p className="text-xs text-gray-500">Votre boîte de réception est vide</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {messages.map((message) => (
              <Link
                key={message.id}
                to={`/messages?conversation=${message.conversationId}`}
                onClick={() => {
                  if (!message.read) {
                    onMarkAsRead(message.id);
                  }
                  onClose();
                }}
                className={`
                  block p-4 hover:bg-gray-50 transition-colors
                  ${!message.read ? 'bg-blue-50/30' : ''}
                `}
              >
                <div className="flex gap-3">
                  {/* Avatar */}
                  {message.senderAvatar ? (
                    <img
                      src={message.senderAvatar}
                      alt={message.senderName}
                      className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {getInitials(message.senderName)}
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {message.senderName}
                      </p>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                        {!message.read ? (
                          <Mail className="w-4 h-4 text-blue-600" />
                        ) : (
                          <MailOpen className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <p className={`text-xs mb-1 truncate ${!message.read ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                      {message.subject}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {message.preview}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {messages.length > 0 && (
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <Link
            to="/messages"
            onClick={onClose}
            className="block text-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Voir tous les messages
          </Link>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default MessageDropdown;
