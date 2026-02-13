import React, { useState } from 'react';
import { Menu, Search, Bell, MessageSquare, X } from 'lucide-react';
import UserProfileMenu from './UserProfileMenu';
import { User } from '../types/user';

interface TopBarProps {
  onMenuClick: () => void;
  user: User | null;
  notificationsCount?: number;
  messagesCount?: number;
  onNotificationsClick?: () => void;
  onMessagesClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  onMenuClick,
  user,
  notificationsCount = 0,
  messagesCount = 0,
  onNotificationsClick,
  onMessagesClick
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher... (Ctrl + K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>

          {/* Search Button - Mobile */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button
            onClick={onNotificationsClick}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {notificationsCount > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-bold bg-red-500 text-white rounded-full">
                {notificationsCount > 9 ? '9+' : notificationsCount}
              </span>
            )}
          </button>

          {/* Messages */}
          <button
            onClick={onMessagesClick}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Messages"
          >
            <MessageSquare className="w-5 h-5 text-gray-600" />
            {messagesCount > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-bold bg-blue-500 text-white rounded-full">
                {messagesCount > 9 ? '9+' : messagesCount}
              </span>
            )}
          </button>

          {/* User Profile Menu */}
          {user && <UserProfileMenu user={user} />}
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="md:hidden px-4 py-3 bg-white border-t border-gray-200">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>
      )}
    </header>
  );
};

export default TopBar;
