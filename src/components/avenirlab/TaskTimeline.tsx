import React, { useState } from 'react';
import { CheckCircle2, ListTodo, Sparkles } from 'lucide-react';
import { TaskWithStatus } from '../../types/avenirlab';
import TaskCard from './TaskCard';

interface TaskTimelineProps {
  mandatoryTasks: TaskWithStatus[];
  complementaryTasks: TaskWithStatus[];
  onStartTask?: (taskId: string) => void;
  onContinueTask?: (taskId: string) => void;
  onViewTask?: (taskId: string) => void;
}

const TaskTimeline: React.FC<TaskTimelineProps> = ({
  mandatoryTasks,
  complementaryTasks,
  onStartTask,
  onContinueTask,
  onViewTask
}) => {
  const [activeTab, setActiveTab] = useState<'mandatory' | 'complementary'>('mandatory');

  // Calculer la progression
  const mandatoryCompleted = mandatoryTasks.filter(t => t.status === 'completed').length;
  const mandatoryTotal = mandatoryTasks.length;
  const mandatoryProgress = mandatoryTotal > 0 ? Math.round((mandatoryCompleted / mandatoryTotal) * 100) : 0;

  const complementaryCompleted = complementaryTasks.filter(t => t.status === 'completed').length;
  const complementaryTotal = complementaryTasks.length;
  const complementaryProgress = complementaryTotal > 0 ? Math.round((complementaryCompleted / complementaryTotal) * 100) : 0;

  const currentTasks = activeTab === 'mandatory' ? mandatoryTasks : complementaryTasks;
  const currentProgress = activeTab === 'mandatory' ? mandatoryProgress : complementaryProgress;
  const currentCompleted = activeTab === 'mandatory' ? mandatoryCompleted : complementaryCompleted;
  const currentTotal = activeTab === 'mandatory' ? mandatoryTotal : complementaryTotal;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Onglets */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('mandatory')}
            className={`flex-1 px-6 py-4 text-sm font-semibold transition-all relative ${
              activeTab === 'mandatory'
                ? 'text-blue-700 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <ListTodo className="w-5 h-5" />
              <span>Tâches Obligatoires</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === 'mandatory' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-700'
              }`}>
                {mandatoryCompleted}/{mandatoryTotal}
              </span>
            </div>
            {activeTab === 'mandatory' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"></div>
            )}
          </button>

          <button
            onClick={() => setActiveTab('complementary')}
            className={`flex-1 px-6 py-4 text-sm font-semibold transition-all relative ${
              activeTab === 'complementary'
                ? 'text-purple-700 bg-purple-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Tâches Complémentaires</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === 'complementary' ? 'bg-purple-200 text-purple-800' : 'bg-gray-200 text-gray-700'
              }`}>
                {complementaryCompleted}/{complementaryTotal}
              </span>
            </div>
            {activeTab === 'complementary' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 rounded-t-full"></div>
            )}
          </button>
        </div>
      </div>

      {/* Barre de progression */}
      <div className={`px-6 py-4 ${activeTab === 'mandatory' ? 'bg-blue-50' : 'bg-purple-50'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Progression : {currentCompleted} / {currentTotal} tâches
          </span>
          <span className={`text-sm font-bold ${activeTab === 'mandatory' ? 'text-blue-700' : 'text-purple-700'}`}>
            {currentProgress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${
              activeTab === 'mandatory' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'
            }`}
            style={{ width: `${currentProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Liste des tâches */}
      <div className="p-6">
        {currentTasks.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p className="text-lg font-medium">Aucune tâche disponible pour ce niveau</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Tâches en cours */}
            {currentTasks.filter(t => t.status === 'in_progress').length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  EN COURS
                </h3>
                <div className="space-y-3">
                  {currentTasks
                    .filter(t => t.status === 'in_progress')
                    .map(task => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onStart={onStartTask}
                        onContinue={onContinueTask}
                        onView={onViewTask}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Tâches disponibles */}
            {currentTasks.filter(t => t.status === 'available').length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-emerald-700 mb-3 flex items-center gap-2 mt-6">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                  DISPONIBLES
                </h3>
                <div className="space-y-3">
                  {currentTasks
                    .filter(t => t.status === 'available')
                    .map(task => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onStart={onStartTask}
                        onContinue={onContinueTask}
                        onView={onViewTask}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Tâches verrouillées */}
            {currentTasks.filter(t => t.status === 'locked').length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-3 flex items-center gap-2 mt-6">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  VERROUILLÉES
                </h3>
                <div className="space-y-3">
                  {currentTasks
                    .filter(t => t.status === 'locked')
                    .map(task => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onStart={onStartTask}
                        onContinue={onContinueTask}
                        onView={onViewTask}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Tâches complétées */}
            {currentTasks.filter(t => t.status === 'completed').length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-green-700 mb-3 flex items-center gap-2 mt-6">
                  <CheckCircle2 className="w-4 h-4" />
                  COMPLÉTÉES ({currentCompleted})
                </h3>
                <div className="space-y-3">
                  {currentTasks
                    .filter(t => t.status === 'completed')
                    .map(task => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onStart={onStartTask}
                        onContinue={onContinueTask}
                        onView={onViewTask}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskTimeline;
