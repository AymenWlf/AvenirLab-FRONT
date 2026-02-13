import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DashboardContextType, Notification, Message } from '../types/user';
import { useAuth } from './AuthContext';

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  // Load initial data (mock data for now)
  useEffect(() => {
    if (user) {
      // TODO: Replace with actual API calls
      loadMockNotifications();
      loadMockMessages();
    }
  }, [user]);

  const loadMockNotifications = () => {
    const mockNotifications: Notification[] = [
      {
        id: '1',
        type: 'success',
        title: 'Test complété',
        message: 'Vous avez terminé le test d\'intérêts professionnels avec succès.',
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        read: false,
        actionUrl: '/orientation/results'
      },
      {
        id: '2',
        type: 'info',
        title: 'Nouveau rendez-vous',
        message: 'Un rendez-vous avec votre orientateur est prévu demain à 14h.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        read: false,
        actionUrl: '/calendar'
      },
      {
        id: '3',
        type: 'warning',
        title: 'Mission en attente',
        message: 'N\'oubliez pas de compléter la mission "Découverte des métiers".',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        read: true,
        actionUrl: '/activities/missions'
      },
      {
        id: '4',
        type: 'info',
        title: 'Nouvelle ressource',
        message: 'Un guide sur les filières scientifiques est maintenant disponible.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
        read: true,
        actionUrl: '/discovery/programs'
      },
      {
        id: '5',
        type: 'success',
        title: 'Profil mis à jour',
        message: 'Votre profil RIASEC a été actualisé avec vos derniers résultats.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
        read: true,
        actionUrl: '/orientation/riasec'
      }
    ];
    setNotifications(mockNotifications);
  };

  const loadMockMessages = () => {
    const mockMessages: Message[] = [
      {
        id: '1',
        senderId: 'counselor-1',
        senderName: 'Mme. Fatima Amrani',
        senderAvatar: undefined,
        subject: 'Retour sur vos résultats de tests',
        preview: 'Bonjour, j\'ai analysé vos résultats de tests et j\'aimerais en discuter avec vous...',
        timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        read: false,
        conversationId: 'conv-1'
      },
      {
        id: '2',
        senderId: 'admin-1',
        senderName: 'Administration',
        senderAvatar: undefined,
        subject: 'Rappel : Forum d\'orientation',
        preview: 'Le forum d\'orientation aura lieu le 15 mars. N\'oubliez pas de vous inscrire...',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        read: false,
        conversationId: 'conv-2'
      },
      {
        id: '3',
        senderId: 'counselor-1',
        senderName: 'Mme. Fatima Amrani',
        senderAvatar: undefined,
        subject: 'Confirmation de rendez-vous',
        preview: 'Votre rendez-vous du 12 mars à 14h est confirmé. À bientôt !',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        read: true,
        conversationId: 'conv-3'
      }
    ];
    setMessages(mockMessages);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleSidebarMobile = () => {
    setSidebarMobileOpen(!sidebarMobileOpen);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    // TODO: Call API to mark as read
  };

  const markMessageAsRead = (id: string) => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === id ? { ...msg, read: true } : msg
      )
    );
    // TODO: Call API to mark as read
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;
  const unreadMessagesCount = messages.filter(m => !m.read).length;

  const value: DashboardContextType = {
    user,
    sidebarCollapsed,
    sidebarMobileOpen,
    toggleSidebar,
    toggleSidebarMobile,
    notifications,
    unreadNotificationsCount,
    messages,
    unreadMessagesCount,
    markNotificationAsRead,
    markMessageAsRead
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
