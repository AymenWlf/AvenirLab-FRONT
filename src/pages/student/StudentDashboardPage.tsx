import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FileText, FolderOpen, Target, TrendingUp, Clock } from 'lucide-react';
import { useAvenirLabStudent } from '../../hooks/useAvenirLabStudent';
import LevelSelector from '../../components/avenirlab/LevelSelector';
import TaskTimeline from '../../components/avenirlab/TaskTimeline';
import { getLevelById } from '../../data/avenirlab/levels';

const StudentDashboardPage: React.FC = () => {
  const {
    currentLevel,
    setCurrentLevel,
    mandatoryTasks,
    complementaryTasks,
    tests,
    levelProgress,
    academicCV,
    handleStartTask,
    handleCompleteTask
  } = useAvenirLabStudent();

  const level = getLevelById(currentLevel);
  const testsCompleted = tests.filter(t => t.completed).length;
  const testsTotal = tests.length;

  // Calculer le score de complétude du CV
  const cvCompletionScore = React.useMemo(() => {
    let score = 0;
    let total = 7; // 7 sections du CV

    if (academicCV.personalInfo.firstName && academicCV.personalInfo.lastName) score++;
    if (academicCV.academicAchievements.length > 0) score++;
    if (academicCV.projects.length > 0) score++;
    if (academicCV.certifications.length > 0) score++;
    if (academicCV.engagements.length > 0) score++;
    if (academicCV.skills.length > 0) score++;
    if (academicCV.languages.length > 0) score++;

    return Math.round((score / total) * 100);
  }, [academicCV]);

  return (
    <div>
      <Helmet>
        <title>Mon Parcours d'Orientation - AvenirLab</title>
        <meta name="description" content="Suivez votre parcours d'orientation scolaire sur AvenirLab" />
      </Helmet>

      <div className="space-y-6">
        {/* Sélecteur de niveau (Mode Dev) */}
        <LevelSelector currentLevel={currentLevel} onChange={setCurrentLevel} />

        {/* En-tête du niveau actuel */}
        {level && (
          <div
            className="rounded-xl p-6 text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${level.color} 0%, ${level.color}dd 100%)` }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{level.displayName}</h1>
                <p className="text-white/90">{level.pedagogicalGoal}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
                <div className="text-4xl font-bold">{levelProgress.completionRate}%</div>
                <div className="text-sm text-white/80">Progression</div>
              </div>
            </div>
          </div>
        )}

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tâches obligatoires */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Obligatoires</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {levelProgress.mandatoryTasks.completed}/{levelProgress.mandatoryTasks.total}
            </div>
            <p className="text-sm text-gray-600">tâches complétées</p>
          </div>

          {/* Tâches complémentaires */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-purple-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Complémentaires</h3>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {levelProgress.complementaryTasks.completed}/{levelProgress.complementaryTasks.total}
            </div>
            <p className="text-sm text-gray-600">tâches complétées</p>
          </div>

          {/* Tests */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🧪</span>
              </div>
              <h3 className="font-semibold text-gray-900">Tests</h3>
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-1">
              {testsCompleted}/{testsTotal}
            </div>
            <p className="text-sm text-gray-600">tests passés</p>
          </div>

          {/* CV Académique */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">CV Académique</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {cvCompletionScore}%
            </div>
            <p className="text-sm text-gray-600">complété</p>
          </div>
        </div>

        {/* Timeline des tâches */}
        <TaskTimeline
          mandatoryTasks={mandatoryTasks}
          complementaryTasks={complementaryTasks}
          onStartTask={handleStartTask}
          onContinueTask={handleStartTask}
          onViewTask={handleStartTask}
        />

        {/* Section Jeux et Missions */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-sm border-2 border-purple-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-3xl">🎮</span>
            Jeux et autres missions pour votre niveau
          </h2>
          <p className="text-gray-600 mb-6">
            Découvrez des activités ludiques et enrichissantes pour compléter votre parcours d'orientation
          </p>
          {complementaryTasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <span className="text-4xl mb-3 block">🎯</span>
              <p className="text-lg font-medium">Aucune mission complémentaire pour ce niveau</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {complementaryTasks.filter(task => task.status === 'available' || task.status === 'in_progress').slice(0, 6).map(task => {
                const categoryIcons = {
                  test: '🧪',
                  project: '📁',
                  research: '🔍',
                  certification: '🎓',
                  engagement: '🤝',
                  cv_building: '📄',
                  reflection: '💭',
                  game: '🎮'
                };
                const categoryColors = {
                  test: 'from-purple-500 to-pink-500',
                  project: 'from-blue-500 to-cyan-500',
                  research: 'from-emerald-500 to-teal-500',
                  certification: 'from-yellow-500 to-orange-500',
                  engagement: 'from-pink-500 to-rose-500',
                  cv_building: 'from-orange-500 to-red-500',
                  reflection: 'from-cyan-500 to-blue-500',
                  game: 'from-violet-500 to-purple-500'
                };

                return (
                  <div
                    key={task.id}
                    className={`relative border-2 rounded-xl p-5 transition-all hover:shadow-lg hover:-translate-y-1 ${
                      task.status === 'in_progress'
                        ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-200'
                        : 'border-purple-200 bg-white hover:border-purple-400'
                    }`}
                  >
                    {/* Badge catégorie */}
                    <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${categoryColors[task.category]} flex items-center justify-center text-2xl shadow-lg`}>
                      {categoryIcons[task.category]}
                    </div>

                    {/* Titre */}
                    <h3 className="font-bold text-gray-900 text-base mb-2 pr-8">
                      {task.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {task.description}
                    </p>

                    {/* Infos */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {task.estimatedTime} min
                      </span>
                      {task.status === 'in_progress' && (
                        <span className="flex items-center gap-1 text-blue-600 font-medium">
                          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                          En cours
                        </span>
                      )}
                    </div>

                    {/* Bouton */}
                    <button
                      onClick={() => handleStartTask(task.id)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-all text-sm ${
                        task.status === 'in_progress'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-md'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-md'
                      }`}
                    >
                      {task.status === 'in_progress' ? 'Continuer' : 'Commencer'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Lien vers toutes les missions */}
          {complementaryTasks.length > 6 && (
            <div className="mt-6 text-center">
              <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 mx-auto">
                Voir toutes les missions complémentaires
                <span>→</span>
              </button>
            </div>
          )}
        </div>

        {/* Accès rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CV Académique */}
          <Link
            to="/dashboard/student/cv"
            className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-orange-700 bg-orange-200 px-3 py-1 rounded-full">
                {cvCompletionScore}%
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">CV Académique</h3>
            <p className="text-gray-700 mb-4">
              Construisez votre profil académique complet : projets, certifications, engagements et compétences.
            </p>
            <div className="text-orange-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Gérer mon CV
              <span>→</span>
            </div>
          </Link>

          {/* Dossier d'orientation */}
          <Link
            to="/dashboard/student/dossier"
            className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-700 bg-blue-200 px-3 py-1 rounded-full">
                {level?.shortName}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dossier d'Orientation</h3>
            <p className="text-gray-700 mb-4">
              Consultez votre historique complet, vos décisions d'orientation et vos livrables produits.
            </p>
            <div className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Voir mon dossier
              <span>→</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
