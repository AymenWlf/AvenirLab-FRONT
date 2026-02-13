import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, FolderOpen, Calendar, CheckCircle2, FileText, Beaker,
  MessageSquare, Award, TrendingUp, Download
} from 'lucide-react';
import { useAvenirLabStudent } from '../../hooks/useAvenirLabStudent';
import { getLevelById } from '../../data/avenirlab/levels';

const OrientationFilePage: React.FC = () => {
  const { orientationFile, currentLevel } = useAvenirLabStudent();
  const level = getLevelById(currentLevel);

  const stats = {
    tasksCompleted: orientationFile.completedTasks.length,
    testsCompleted: orientationFile.testResults.length,
    decisionsTotal: orientationFile.orientationDecisions.length,
    deliverablesTotal: orientationFile.deliverables.length,
    counselorNotesTotal: orientationFile.counselorNotes.length
  };

  return (
    <div>
      <Helmet>
        <title>Mon Dossier d'Orientation - AvenirLab</title>
        <meta name="description" content="Consultez votre dossier d'orientation complet" />
      </Helmet>

      <div className="space-y-6">
        {/* En-tête */}
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard/student"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour au dashboard</span>
          </Link>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            <Download className="w-5 h-5" />
            Exporter le dossier complet
          </button>
        </div>

        {/* Titre */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Mon Dossier d'Orientation AvenirLab</h1>
              <p className="text-white/90">
                Historique complet de votre parcours d'orientation depuis le collège
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Depuis le {new Date(orientationFile.startDate).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  📍 Niveau actuel : {level?.shortName}
                </span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
              <div className="text-xl font-bold">{orientationFile.timeline.length}</div>
              <div className="text-xs text-white/80">événements</div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Tâches</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{stats.tasksCompleted}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
            <div className="flex items-center gap-3 mb-2">
              <Beaker className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-600">Tests</span>
            </div>
            <div className="text-2xl font-bold text-emerald-600">{stats.testsCompleted}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-600">Décisions</span>
            </div>
            <div className="text-2xl font-bold text-orange-600">{stats.decisionsTotal}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-purple-100">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Livrables</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">{stats.deliverablesTotal}</div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-yellow-100">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-medium text-gray-600">Notes</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">{stats.counselorNotesTotal}</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Timeline de votre parcours
          </h2>

          {orientationFile.timeline.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <FolderOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">Votre dossier est encore vide</p>
              <p className="text-sm">Commencez à compléter des tâches et tests pour construire votre historique</p>
            </div>
          ) : (
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Événements */}
              <div className="space-y-6">
                {orientationFile.timeline.slice().reverse().map((event, index) => (
                  <div key={event.id} className="relative flex items-start gap-4 pl-14">
                    {/* Point sur la timeline */}
                    <div className={`absolute left-4 w-5 h-5 rounded-full border-4 border-white ${
                      event.type === 'test' ? 'bg-emerald-500' :
                      event.type === 'task' ? 'bg-blue-500' :
                      event.type === 'decision' ? 'bg-orange-500' :
                      event.type === 'milestone' ? 'bg-purple-500' :
                      'bg-gray-500'
                    }`}></div>

                    {/* Contenu */}
                    <div className="flex-1 bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {event.type === 'test' && <Beaker className="w-4 h-4 text-emerald-600" />}
                            {event.type === 'task' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                            {event.type === 'decision' && <TrendingUp className="w-4 h-4 text-orange-600" />}
                            {event.type === 'milestone' && <Award className="w-4 h-4 text-purple-600" />}
                            <span className="font-semibold text-gray-900">{event.title}</span>
                          </div>
                          {event.description && (
                            <p className="text-sm text-gray-600">{event.description}</p>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Décisions d'orientation */}
        {orientationFile.orientationDecisions.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-orange-600" />
              Décisions d'orientation majeures
            </h2>
            <div className="space-y-4">
              {orientationFile.orientationDecisions.map(decision => (
                <div key={decision.id} className="border-2 border-orange-200 bg-orange-50 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{decision.title}</h3>
                      <p className="text-sm text-gray-600">
                        {decision.type === 'lycee_filiere' && '🎓 Choix de filière lycée'}
                        {decision.type === 'bac_type' && '📚 Choix de type de bac'}
                        {decision.type === 'post_bac' && '🎯 Choix post-bac'}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(decision.decidedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-orange-700 mb-2">Décision : {decision.decision}</p>
                    <p className="text-sm text-gray-700">{decision.justification}</p>
                    {decision.alternatives && decision.alternatives.length > 0 && (
                      <p className="text-xs text-gray-600 mt-2">
                        Alternatives : {decision.alternatives.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrientationFilePage;
