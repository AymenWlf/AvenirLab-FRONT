import React from 'react';
import { UserRole } from '../../types/user';
import { User, Users, UserCheck, Building2, Eye } from 'lucide-react';

interface RoleSelectorProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ currentRole, onRoleChange }) => {
  const roles: { value: UserRole; label: string; icon: React.ElementType }[] = [
    { value: 'student', label: 'Élève', icon: User },
    { value: 'parent', label: 'Parent', icon: Users },
    { value: 'counselor', label: 'Orientateur', icon: UserCheck },
    { value: 'direction', label: 'Direction', icon: Building2 },
    { value: 'surveillance', label: 'Surveillance', icon: Eye }
  ];

  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1">
      {roles.map((role) => {
        const Icon = role.icon;
        const isActive = currentRole === role.value;
        return (
          <button
            key={role.value}
            onClick={() => onRoleChange(role.value)}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all
              ${isActive 
                ? 'bg-white text-orange-600 shadow-md' 
                : 'text-white hover:bg-white/10'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{role.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default RoleSelector;
