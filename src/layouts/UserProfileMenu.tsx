import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User as UserIcon, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronDown,
  UserCircle,
  Shield
} from 'lucide-react';
import { User } from '../types/user';
import { useAuth } from '../contexts/AuthContext';

interface UserProfileMenuProps {
  user: User;
}

const UserProfileMenu: React.FC<UserProfileMenuProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Get user initials for avatar
  const getInitials = () => {
    const firstInitial = user.firstName?.charAt(0) || '';
    const lastInitial = user.lastName?.charAt(0) || '';
    return (firstInitial + lastInitial).toUpperCase();
  };

  // Get role label
  const getRoleLabel = () => {
    const roleLabels: Record<string, string> = {
      student: 'Élève',
      parent: 'Parent',
      counselor: 'Orientateur',
      direction: 'Direction',
      surveillance: 'Surveillance',
      admin: 'Administrateur'
    };
    return roleLabels[user.role] || user.role;
  };

  // Get role color
  const getRoleColor = () => {
    const roleColors: Record<string, string> = {
      student: 'from-blue-500 to-cyan-500',
      parent: 'from-purple-500 to-pink-500',
      counselor: 'from-emerald-500 to-teal-500',
      direction: 'from-orange-500 to-red-500',
      surveillance: 'from-indigo-500 to-purple-500',
      admin: 'from-gray-700 to-gray-900'
    };
    return roleColors[user.role] || 'from-gray-500 to-gray-700';
  };

  return (
    <div ref={menuRef} className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {/* Avatar */}
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-9 h-9 rounded-lg object-cover"
          />
        ) : (
          <div className={`w-9 h-9 bg-gradient-to-br ${getRoleColor()} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md`}>
            {getInitials()}
          </div>
        )}

        {/* User Info - Hidden on mobile */}
        <div className="hidden lg:block text-left">
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-gray-500">{getRoleLabel()}</p>
        </div>

        <ChevronDown 
          className={`hidden lg:block w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
          {/* User Info Header */}
          <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="flex items-center gap-3">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : (
                <div className={`w-12 h-12 bg-gradient-to-br ${getRoleColor()} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {getInitials()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-600 truncate">{user.email}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-medium text-blue-600">{getRoleLabel()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <UserCircle className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Mon profil</span>
            </Link>

            <Link
              to="/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Paramètres</span>
            </Link>

            <Link
              to="/help"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Aide & Support</span>
            </Link>

            {/* Role Switcher - If user has multiple roles */}
            {user.roles && user.roles.length > 1 && (
              <>
                <div className="my-2 border-t border-gray-200"></div>
                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase">Changer de rôle</p>
                </div>
                {user.roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      // TODO: Implement role switching
                      console.log('Switch to role:', role);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                      role === user.role ? 'bg-blue-50' : ''
                    }`}
                    disabled={role === user.role}
                  >
                    <UserIcon className={`w-4 h-4 ${role === user.role ? 'text-blue-600' : 'text-gray-500'}`} />
                    <span className={`text-sm ${role === user.role ? 'font-medium text-blue-600' : 'text-gray-700'}`}>
                      {roleLabels[role] || role}
                    </span>
                  </button>
                ))}
              </>
            )}
          </div>

          {/* Logout */}
          <div className="border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Déconnexion</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Role labels for switcher
const roleLabels: Record<string, string> = {
  student: 'Élève',
  parent: 'Parent',
  counselor: 'Orientateur',
  direction: 'Direction',
  surveillance: 'Surveillance',
  admin: 'Administrateur'
};

export default UserProfileMenu;
