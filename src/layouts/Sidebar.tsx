import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  // Icons for navigation
  LayoutDashboard,
  FolderOpen,
  ClipboardCheck,
  Target,
  Lightbulb,
  Heart,
  User,
  Award,
  Gamepad2,
  CheckSquare,
  Briefcase,
  GraduationCap,
  Building2,
  Quote,
  Star,
  BookmarkPlus,
  ListChecks,
  CalendarDays,
  Calendar,
  MessageSquare,
  UserCircle,
  HelpCircle,
  Users,
  TrendingUp,
  FileText,
  Bell,
  FileSpreadsheet,
  Files,
  BookOpen,
  School,
  Clock,
  FileEdit,
  FileOutput,
  History,
  BarChart3,
  FileBarChart,
  LayoutGrid,
  ClipboardList,
  GitCompare,
  Brain,
  CalendarCheck,
  CalendarClock,
  AlertCircle,
  FileType,
  Download,
  Activity,
  AlertTriangle,
  Trophy,
  FileStack,
  Gauge,
  Eye,
  UserCog,
  Settings,
  DoorOpen,
  Presentation,
  Link as LinkIcon,
  Share2,
  FileWarning,
  ThumbsUp,
  StickyNote,
  CalendarPlus
} from 'lucide-react';
import { NavGroup, UserRole } from '../types/user';
import { getNavigationForRole } from '../config/navigation';

// Map icon names to icon components
const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  FolderOpen,
  ClipboardCheck,
  Target,
  Lightbulb,
  Heart,
  User,
  Award,
  Gamepad2,
  CheckSquare,
  Briefcase,
  GraduationCap,
  Building2,
  Quote,
  Star,
  BookmarkPlus,
  ListChecks,
  CalendarDays,
  Calendar,
  MessageSquare,
  UserCircle,
  HelpCircle,
  Users,
  TrendingUp,
  FileText,
  Bell,
  FileSpreadsheet,
  Files,
  BookOpen,
  School,
  Clock,
  FileEdit,
  FileOutput,
  History,
  BarChart3,
  FileBarChart,
  LayoutGrid,
  ClipboardList,
  GitCompare,
  Brain,
  CalendarCheck,
  CalendarClock,
  AlertCircle,
  FileType,
  Download,
  Activity,
  AlertTriangle,
  Trophy,
  FileStack,
  Gauge,
  Eye,
  UserCog,
  Settings,
  DoorOpen,
  Presentation,
  Link: LinkIcon,
  Share2,
  FileWarning,
  ThumbsUp,
  StickyNote,
  CalendarPlus
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
  userRole: UserRole;
  demoMode?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed, 
  onToggle, 
  mobileOpen, 
  onMobileClose, 
  userRole,
  demoMode = false
}) => {
  const location = useLocation();
  const navigation = getNavigationForRole(userRole);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const renderNavItem = (item: any) => {
    const Icon = iconMap[item.icon] || Target;
    const active = isActive(item.path);

    return (
      <Link
        key={item.id}
        to={item.path}
        onClick={() => mobileOpen && onMobileClose()}
        className={`
          relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
          ${active 
            ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg' 
            : 'text-gray-300 hover:bg-white/10 hover:text-white'
          }
          ${collapsed ? 'justify-center' : ''}
        `}
        title={collapsed ? item.label : ''}
      >
        <Icon className={`flex-shrink-0 ${collapsed ? 'w-6 h-6' : 'w-5 h-5'}`} />
        {!collapsed && (
          <>
            <span className="flex-1 font-medium text-sm">{item.label}</span>
            {item.badge && (
              <span className="flex items-center justify-center w-5 h-5 text-xs font-bold bg-red-500 text-white rounded-full">
                {item.badge}
              </span>
            )}
          </>
        )}
        {/* Tooltip pour mode collapsed */}
        {collapsed && (
          <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-gray-700">
            {item.label}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-gray-700"></div>
          </div>
        )}
      </Link>
    );
  };

  const renderNavGroup = (group: NavGroup) => {
    return (
      <div key={group.id} className="mb-6">
        {!collapsed && (
          <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {group.label}
          </h3>
        )}
        <div className="space-y-1">
          {group.items.map(item => renderNavItem(item))}
        </div>
      </div>
    );
  };

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-4 py-6 border-b border-white/10`}>
        {!collapsed ? (
          <>
            <Link to="/dashboard" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black text-white">AvenirLab</h1>
                <p className="text-xs text-gray-400">Système d'orientation</p>
              </div>
            </Link>
            <button
              onClick={onToggle}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white relative group"
              title="Réduire la barre latérale"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </>
        ) : (
          <button
            onClick={onToggle}
            className="hidden lg:flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl shadow-lg hover:scale-110 transition-all hover:shadow-xl animate-pulse"
            title="Ouvrir la barre latérale"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto custom-scrollbar">
        {navigation.map(group => renderNavGroup(group))}
      </nav>

      {/* Footer - User Quick Info */}
      {!collapsed && (
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              {userRole[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {userRole === 'student' && 'Élève'}
                {userRole === 'parent' && 'Parent'}
                {userRole === 'counselor' && 'Orientateur'}
                {userRole === 'direction' && 'Direction'}
                {userRole === 'surveillance' && 'Surveillance'}
              </p>
              <p className="text-xs text-gray-400 truncate">Connecté</p>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* Bouton flottant pour ouvrir la sidebar (visible uniquement quand collapsed) */}
      {collapsed && (
        <button
          onClick={onToggle}
          className="hidden lg:flex fixed left-2 top-1/2 -translate-y-1/2 z-40 items-center justify-center w-10 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-r-xl shadow-2xl hover:w-12 transition-all duration-300 group"
          title="Ouvrir le menu"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden lg:flex flex-col
          bg-gradient-to-b from-gray-900 to-gray-800
          border-r border-gray-700
          transition-all duration-300 ease-in-out
          ${collapsed ? 'w-20' : 'w-72'}
          fixed left-0 bottom-0 z-30
          ${demoMode ? 'top-[60px]' : 'top-0'}
        `}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <>
        {/* Overlay */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={onMobileClose}
          />
        )}

        {/* Drawer */}
        <aside
          className={`
            lg:hidden flex flex-col
            bg-gradient-to-b from-gray-900 to-gray-800
            fixed left-0 bottom-0 z-50 w-72
            transform transition-transform duration-300 ease-in-out
            ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
            ${demoMode ? 'top-[60px]' : 'top-0'}
          `}
        >
          {sidebarContent}
        </aside>
      </>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
