import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { User, UserRole } from '../types/user';
import RoleSelector from '../components/dashboard/RoleSelector';

const DashboardLayout: React.FC = () => {
  const { user: authUser, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  // Initialize sidebar state based on screen size
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1280;
    }
    return false;
  });
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  const [demoRole, setDemoRole] = useState<UserRole>('student');

  // Create demo user if not authenticated (for preview)
  const demoUser: User = useMemo(() => ({
    id: `demo-${demoRole}`,
    email: 'demo@avenirlab.ma',
    firstName: 'Utilisateur',
    lastName: 'Démo',
    role: demoRole,
    establishment: 'Établissement Demo',
    createdAt: new Date().toISOString()
  }), [demoRole]);

  // Use authenticated user or demo user
  const user = authUser || demoUser;

  // Handle responsive sidebar state
  useEffect(() => {
    const handleResize = () => {
      // Auto-collapse sidebar on smaller screens
      if (window.innerWidth < 1280 && !sidebarCollapsed) {
        setSidebarCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarCollapsed]);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setSidebarMobileOpen(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Mode Banner - Au-dessus de tout */}
      {!isAuthenticated && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              🎯 <span className="font-bold">Mode Démo</span> - Aperçu du Dashboard | 
              <a href="/login" className="underline hover:text-amber-100 ml-1">Se connecter</a>
            </div>
            <RoleSelector currentRole={demoRole} onRoleChange={setDemoRole} />
          </div>
        </div>
      )}

      {/* Wrapper avec padding-top pour la bannière démo */}
      <div className={!isAuthenticated ? 'pt-[60px]' : ''}>
        {/* Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          mobileOpen={sidebarMobileOpen}
          onMobileClose={() => setSidebarMobileOpen(false)}
          userRole={user.role}
          demoMode={!isAuthenticated}
        />

        {/* Main Content Area */}
        <div
          className={`
            transition-all duration-300 ease-in-out
            ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'}
          `}
        >
          {/* TopBar */}
          <TopBar
            onMenuClick={() => setSidebarMobileOpen(true)}
            user={user}
            notificationsCount={5}  // TODO: Get from context/API
            messagesCount={3}       // TODO: Get from context/API
            onNotificationsClick={() => console.log('Open notifications')} // TODO: Implement
            onMessagesClick={() => navigate('/messages')}
          />

          {/* Page Content */}
          <main className="p-4 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
