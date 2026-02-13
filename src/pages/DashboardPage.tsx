import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Target, 
  Calendar,
  Activity,
  Award
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const getRoleGreeting = () => {
    switch (user?.role) {
      case 'student':
        return 'Bienvenue sur votre espace élève';
      case 'parent':
        return 'Bienvenue sur votre espace parent';
      case 'counselor':
        return 'Bienvenue sur votre espace orientateur';
      case 'direction':
        return 'Bienvenue sur votre espace direction';
      case 'surveillance':
        return 'Bienvenue sur votre espace surveillance';
      default:
        return 'Bienvenue sur AvenirLab';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <LayoutDashboard className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
        </div>
        <p className="text-blue-100 text-lg">
          {getRoleGreeting()}, {user?.firstName} !
        </p>
        <p className="text-blue-50 text-sm mt-2">
          Voici un aperçu de votre activité sur AvenirLab
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +12%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">8/12</h3>
          <p className="text-sm text-gray-600">Tests complétés</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              Excellent
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">85%</h3>
          <p className="text-sm text-gray-600">Taux de progression</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
              Cette semaine
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">3</h3>
          <p className="text-sm text-gray-600">Rendez-vous prévus</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Nouveau !
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
          <p className="text-sm text-gray-600">Recommandations</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-bold text-gray-900">Activité récente</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { action: 'Test d\'intérêts professionnels complété', time: 'Il y a 2 heures', color: 'blue' },
              { action: 'Nouveau métier ajouté aux favoris', time: 'Il y a 5 heures', color: 'emerald' },
              { action: 'Rendez-vous programmé avec orientateur', time: 'Hier à 14h30', color: 'purple' },
              { action: 'Mission "Découverte des métiers" terminée', time: 'Il y a 2 jours', color: 'orange' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-2 h-2 rounded-full bg-${activity.color}-600 mt-2`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Card - Nouveau système AvenirLab */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">🎓 Nouveau : Mon Parcours d'Orientation AvenirLab</h3>
        <p className="text-gray-700 mb-4">
          Découvrez le nouveau système d'orientation structuré du collège au baccalauréat avec des tâches, tests et suivi personnalisé.
        </p>
        <Link 
          to="/dashboard/student" 
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all"
        >
          Accéder à mon parcours
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
