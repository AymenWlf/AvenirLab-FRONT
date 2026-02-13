// Types pour le système de gestion utilisateurs AvenirLab

export type UserRole = 
  | 'student'           // Élève
  | 'parent'            // Parent/Tuteur
  | 'counselor'         // Orientateur
  | 'direction'         // Direction pédagogique
  | 'surveillance'      // Surveillance générale
  | 'admin';            // Administrateur système

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  roles?: UserRole[];  // Pour les utilisateurs multi-rôles
  avatar?: string;
  phone?: string;
  establishment?: string;
  establishmentId?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface Student extends User {
  role: 'student';
  class: string;
  level: string;
  studentNumber: string;
  parentIds?: string[];
  counselorId?: string;
}

export interface Parent extends User {
  role: 'parent';
  childrenIds: string[];
}

export interface Counselor extends User {
  role: 'counselor';
  assignedClasses?: string[];
  assignedLevels?: string[];
  specialization?: string;
}

export interface Direction extends User {
  role: 'direction';
  position: string;
}

export interface Surveillance extends User {
  role: 'surveillance';
  assignedLevels?: string[];
}

// Types pour la navigation
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
  children?: NavItem[];
  roles: UserRole[];
  description?: string;
}

export interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

// Types pour les notifications
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

// Types pour les messages
export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  conversationId: string;
}

// Type pour le contexte du dashboard
export interface DashboardContextType {
  user: User | null;
  sidebarCollapsed: boolean;
  sidebarMobileOpen: boolean;
  toggleSidebar: () => void;
  toggleSidebarMobile: () => void;
  notifications: Notification[];
  unreadNotificationsCount: number;
  messages: Message[];
  unreadMessagesCount: number;
  markNotificationAsRead: (id: string) => void;
  markMessageAsRead: (id: string) => void;
}

// Types pour les breadcrumbs
export interface BreadcrumbItem {
  label: string;
  path?: string;
}
