import React from 'react';
import {
  Clock,
  CheckCircle,
  Lock,
  PlayCircle,
  FileText,
  Beaker,
  FolderOpen,
  Search,
  Award,
  Users,
  FileEdit,
  BookOpen,
  AlertCircle
} from 'lucide-react';
import { TaskWithStatus, TaskCategory } from '../../types/avenirlab';

interface TaskCardProps {
  task: TaskWithStatus;
  onStart?: (taskId: string) => void;
  onContinue?: (taskId: string) => void;
  onView?: (taskId: string) => void;
}

// Icône par catégorie
const getCategoryIcon = (category: TaskCategory) => {
  switch (category) {
    case 'test':
      return <Beaker className="w-5 h-5" />;
    case 'project':
      return <FolderOpen className="w-5 h-5" />;
    case 'research':
      return <Search className="w-5 h-5" />;
    case 'certification':
      return <Award className="w-5 h-5" />;
    case 'engagement':
      return <Users className="w-5 h-5" />;
    case 'cv_building':
      return <FileEdit className="w-5 h-5" />;
    case 'reflection':
      return <BookOpen className="w-5 h-5" />;
    case 'game':
      return <span className="text-xl">🎮</span>;
    default:
      return <FileText className="w-5 h-5" />;
  }
};

// Couleur et label par catégorie
const getCategoryStyle = (category: TaskCategory) => {
  const styles = {
    test: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', label: 'Test' },
    project: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', label: 'Projet' },
    research: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Recherche' },
    certification: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200', label: 'Certification' },
    engagement: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200', label: 'Engagement' },
    cv_building: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', label: 'CV' },
    reflection: { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-200', label: 'Réflexion' },
    game: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200', label: 'Jeu' }
  };
  return styles[category];
};

// Style par statut
const getStatusStyle = (status: string, isMilestone?: boolean) => {
  // Style spécial pour les milestones verrouillées
  if (status === 'locked' && isMilestone) {
    return 'border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden';
  }
  
  switch (status) {
    case 'completed':
      return 'border-green-300 bg-green-50';
    case 'in_progress':
      return 'border-blue-400 bg-blue-50 ring-2 ring-blue-200';
    case 'available':
      return 'border-gray-200 bg-white hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer';
    case 'locked':
      return 'border-gray-200 bg-gray-50 opacity-60';
    default:
      return 'border-gray-200 bg-white';
  }
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onStart, onContinue, onView }) => {
  const categoryStyle = getCategoryStyle(task.category);
  const statusStyle = getStatusStyle(task.status, task.isMilestone);
  const isMilestoneLocked = task.status === 'locked' && task.isMilestone;

  return (
    <div className={`rounded-xl border-2 p-5 ${statusStyle}`}>
      {/* Badge milestone pour les tâches verrouillées importantes */}
      {isMilestoneLocked && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-md">
          ⭐ ÉTAPE DÉCISIONNELLE
        </div>
      )}
      {/* En-tête */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <div className={`${categoryStyle.bg} ${categoryStyle.text} p-2 rounded-lg ${isMilestoneLocked ? 'ring-2 ring-amber-400' : ''}`}>
            {getCategoryIcon(task.category)}
          </div>
          <div className="flex-1">
            <h4 className={`font-bold text-lg mb-1 ${isMilestoneLocked ? 'text-amber-900' : 'text-gray-900'}`}>
              {task.title}
            </h4>
            <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border} border`}>
              {categoryStyle.label}
            </span>
          </div>
        </div>
        {/* Statut visuel */}
        <div>
          {task.status === 'completed' && <CheckCircle className="w-6 h-6 text-green-600" />}
          {task.status === 'in_progress' && <PlayCircle className="w-6 h-6 text-blue-600 animate-pulse" />}
          {isMilestoneLocked && <Lock className="w-6 h-6 text-amber-600 animate-pulse" />}
          {task.status === 'locked' && !task.isMilestone && <Lock className="w-6 h-6 text-gray-400" />}
          {task.status === 'available' && <PlayCircle className="w-6 h-6 text-gray-400" />}
        </div>
      </div>

      {/* Description */}
      <p className={`text-sm mb-4 leading-relaxed ${isMilestoneLocked ? 'text-amber-900 font-medium' : 'text-gray-700'}`}>
        {task.description}
      </p>

      {/* Message spécial pour milestone verrouillée */}
      {isMilestoneLocked && (
        <div className="bg-white border-2 border-amber-300 rounded-lg p-3 mb-4">
          <p className="text-sm text-amber-900 font-semibold flex items-start gap-2">
            <span className="text-lg">🎯</span>
            <span>
              Cette étape décisionnelle importante sera déverrouillée une fois que vous aurez complété les tâches préalables.
              Elle représente un moment clé dans votre parcours d'orientation.
            </span>
          </p>
        </div>
      )}

      {/* Informations */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Durée estimée : {task.estimatedTime} minutes</span>
        </div>
        {task.deliverable && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              <span className="font-semibold">Livrable :</span> {task.deliverable}
            </span>
          </div>
        )}
        {task.prerequisites && task.prerequisites.length > 0 && (
          <div className="flex items-start gap-2 text-sm text-orange-600">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              <span className="font-semibold">Prérequis :</span> {task.prerequisites.length} tâche(s) à compléter d'abord
            </span>
          </div>
        )}
      </div>

      {/* Rôle de l'orientateur (info uniquement) */}
      {task.counselorRole && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <p className="text-xs text-blue-800">
            <span className="font-semibold">👨‍🏫 Rôle de l'orientateur :</span> {task.counselorRole}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <span className={`text-sm font-semibold ${
          task.status === 'completed' ? 'text-green-600' :
          task.status === 'in_progress' ? 'text-blue-600' :
          isMilestoneLocked ? 'text-amber-700' :
          task.status === 'locked' ? 'text-gray-500' :
          'text-gray-700'
        }`}>
          {task.status === 'completed' && '✅ Terminée'}
          {task.status === 'in_progress' && '🔄 En cours'}
          {isMilestoneLocked && '⭐ Étape décisionnelle - Verrouillée'}
          {task.status === 'locked' && !task.isMilestone && '🔒 Verrouillée'}
          {task.status === 'available' && '📌 Disponible'}
        </span>

        {/* Boutons d'action */}
        <div className="flex gap-2">
          {task.status === 'completed' && onView && (
            <button
              onClick={() => onView(task.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Revoir
            </button>
          )}
          {task.status === 'in_progress' && onContinue && (
            <button
              onClick={() => onContinue(task.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Continuer
            </button>
          )}
          {task.status === 'available' && onStart && (
            <button
              onClick={() => onStart(task.id)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Commencer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
