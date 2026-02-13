import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, FileText, Award, FolderOpen, Users, Wrench, Languages, 
  Trophy, Plus, Download, Eye 
} from 'lucide-react';
import { useAvenirLabStudent } from '../../hooks/useAvenirLabStudent';

const AcademicCVPage: React.FC = () => {
  const { academicCV, updateAcademicCV } = useAvenirLabStudent();
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const sections = [
    { id: 'personal', label: 'Informations personnelles', icon: FileText, count: academicCV.personalInfo.firstName ? 1 : 0 },
    { id: 'achievements', label: 'Réalisations académiques', icon: Trophy, count: academicCV.academicAchievements.length },
    { id: 'projects', label: 'Projets réalisés', icon: FolderOpen, count: academicCV.projects.length },
    { id: 'certifications', label: 'Certifications', icon: Award, count: academicCV.certifications.length },
    { id: 'engagements', label: 'Engagements', icon: Users, count: academicCV.engagements.length },
    { id: 'skills', label: 'Compétences', icon: Wrench, count: academicCV.skills.length },
    { id: 'languages', label: 'Langues', icon: Languages, count: academicCV.languages.length }
  ];

  const totalItems = sections.reduce((acc, section) => acc + section.count, 0);
  const completionScore = Math.round((sections.filter(s => s.count > 0).length / sections.length) * 100);

  return (
    <div>
      <Helmet>
        <title>Mon CV Académique - AvenirLab</title>
        <meta name="description" content="Construisez votre CV académique complet" />
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
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'edit'
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Modifier
              </span>
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Aperçu
              </span>
            </button>
          </div>
        </div>

        {/* Titre et progression */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Mon CV Académique</h1>
              <p className="text-white/90">
                Construisez un profil compétitif pour vos candidatures aux études supérieures
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
              <div className="text-4xl font-bold">{completionScore}%</div>
              <div className="text-sm text-white/80">Complété</div>
            </div>
          </div>
        </div>

        {/* Vue Édition */}
        {activeTab === 'edit' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Menu des sections */}
            <div className="lg:col-span-1 space-y-2">
              {sections.map(section => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    className="w-full bg-white rounded-xl p-4 text-left hover:shadow-md transition-all border-2 border-transparent hover:border-orange-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          section.count > 0 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{section.label}</div>
                          <div className="text-sm text-gray-600">{section.count} élément(s)</div>
                        </div>
                      </div>
                      {section.count > 0 && (
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Zone d'édition */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-center py-12 text-gray-500">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Interface de modification du CV
                </h3>
                <p className="text-sm mb-4">
                  Sélectionnez une section dans le menu de gauche pour commencer à ajouter vos informations.
                </p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Compléter mes informations personnelles
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Vue Aperçu */}
        {activeTab === 'preview' && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {academicCV.personalInfo.firstName || 'Prénom'} {academicCV.personalInfo.lastName || 'Nom'}
              </h2>
              <p className="text-gray-600">{academicCV.personalInfo.level?.toUpperCase()} | {academicCV.personalInfo.email || 'email@example.com'}</p>
              {academicCV.personalInfo.targetField && (
                <p className="text-sm text-orange-600 font-medium mt-2">
                  Domaine visé : {academicCV.personalInfo.targetField}
                </p>
              )}
            </div>

            {/* Sections du CV */}
            {academicCV.academicAchievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Réalisations académiques
                </h3>
                <div className="space-y-2">
                  {academicCV.academicAchievements.map(achievement => (
                    <div key={achievement.id} className="border-l-4 border-yellow-400 pl-4 py-2">
                      <div className="font-semibold text-gray-900">{achievement.title}</div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                      <div className="text-xs text-gray-500 mt-1">{new Date(achievement.date).toLocaleDateString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder si vide */}
            {totalItems === 0 && (
              <div className="text-center py-12 text-gray-500">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">Votre CV est vide</p>
                <p className="text-sm">Commencez par ajouter vos informations dans l'onglet "Modifier"</p>
              </div>
            )}

            {/* Export */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <Download className="w-5 h-5" />
                Exporter en PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicCVPage;
