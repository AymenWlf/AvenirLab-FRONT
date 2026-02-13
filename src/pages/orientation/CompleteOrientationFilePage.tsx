import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  User,
  GraduationCap,
  FileText,
  Award,
  TrendingUp,
  BookOpen,
  Users,
  Target,
  Calendar,
  CheckCircle,
  AlertCircle,
  Download,
  Printer,
  Edit,
  ChevronDown,
  ChevronUp,
  Star,
  Trophy,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Lock,
  PlayCircle,
  CheckCircle2,
  ListTodo,
  ArrowRight
} from 'lucide-react';
import { demoOrientationFile } from '../../data/demoOrientationFile';
import { incompleteOrientationFile } from '../../data/incompleteOrientationFile';
import { CompleteOrientationFile } from '../../types/orientationFile';
import { getTasksByLevel, getAllTasks } from '../../data/avenirlab/tasks';
import { getLevelById } from '../../data/avenirlab/levels';
import { AvenirLabLevel } from '../../types/avenirlab';

const CompleteOrientationFilePage: React.FC = () => {
  const [fileType, setFileType] = useState<'complete' | 'incomplete'>('incomplete');
  const file = useMemo<CompleteOrientationFile>(
    () => fileType === 'complete' ? demoOrientationFile : incompleteOrientationFile,
    [fileType]
  );
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['personal', 'tasks'])
  );

  // Récupérer toutes les tâches pour tous les niveaux
  const allTasks = useMemo(() => getAllTasks(), []);
  
  // Organiser les tâches par niveau
  const tasksByLevel = useMemo(() => {
    const levels: AvenirLabLevel[] = ['1ac', '2ac', '3ac', 'tc', '1bac', '2bac'];
    const organized: Record<AvenirLabLevel, typeof allTasks> = {
      '1ac': [],
      '2ac': [],
      '3ac': [],
      'tc': [],
      '1bac': [],
      '2bac': []
    };
    
    allTasks.forEach(task => {
      if (organized[task.levelId]) {
        organized[task.levelId].push(task);
      }
    });
    
    return organized;
  }, [allTasks]);

  // Tâches de l'année actuelle
  const currentYearTasks = useMemo(() => {
    return getTasksByLevel(file.currentLevel);
  }, [file.currentLevel]);

  // Tâches des années futures (verrouillées)
  const futureTasks = useMemo(() => {
    const levels: AvenirLabLevel[] = ['1ac', '2ac', '3ac', 'tc', '1bac', '2bac'];
    const currentIndex = levels.indexOf(file.currentLevel);
    const future: typeof allTasks = [];
    
    for (let i = currentIndex + 1; i < levels.length; i++) {
      future.push(...tasksByLevel[levels[i]]);
    }
    
    return future;
  }, [file.currentLevel, tasksByLevel]);

  // Tâches des années passées (à rattraper si incomplètes)
  const pastTasks = useMemo(() => {
    const levels: AvenirLabLevel[] = ['1ac', '2ac', '3ac', 'tc', '1bac', '2bac'];
    const currentIndex = levels.indexOf(file.currentLevel);
    const past: typeof allTasks = [];
    
    for (let i = 0; i < currentIndex; i++) {
      past.push(...tasksByLevel[levels[i]]);
    }
    
    return past;
  }, [file.currentLevel, tasksByLevel]);

  // Lier les tâches aux sections du dossier
  const getTaskSection = (taskCategory: string): string => {
    const mapping: Record<string, string> = {
      'test': 'tests',
      'project': 'activities',
      'research': 'academic',
      'certification': 'skills',
      'engagement': 'activities',
      'cv_building': 'skills',
      'reflection': 'decisions',
      'game': 'activities'
    };
    return mapping[taskCategory] || 'academic';
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const getCompletionColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  const getCompletionBg = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-100';
    if (percentage >= 50) return 'bg-orange-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <Helmet>
        <title>Dossier d'Orientation Complet - AvenirLab</title>
        <meta name="description" content="Dossier d'orientation scolaire complet de l'élève" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Header with actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold text-gray-900">
                Dossier d'Orientation Scolaire
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => setFileType('complete')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    fileType === 'complete'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Complet
                </button>
                <button
                  onClick={() => setFileType('incomplete')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    fileType === 'incomplete'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Incomplet
                </button>
              </div>
            </div>
            <p className="text-gray-600">
              Document officiel de suivi longitudinal • {file.startLevel.toUpperCase()} à {file.currentLevel.toUpperCase()}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              Télécharger PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <Printer className="w-4 h-4" />
              Imprimer
            </button>
          </div>
        </div>

        {/* Overall Completion */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Complétude du dossier</h2>
            <div className={`text-4xl font-bold ${getCompletionColor(file.completion.overall)}`}>
              {file.completion.overall}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${file.completion.overall}%` }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {Object.entries(file.completion.sections).map(([key, value]) => {
              const labels: Record<string, string> = {
                personalInfo: 'Info personnelles',
                academicRecords: 'Parcours scolaire',
                pathDecisions: 'Décisions',
                orientationTests: 'Tests',
                extracurricular: 'Activités',
                skills: 'Compétences',
                counseling: 'Entretiens'
              };
              return (
                <div key={key} className={`${getCompletionBg(value)} rounded-lg p-3`}>
                  <div className={`text-2xl font-bold ${getCompletionColor(value)}`}>
                    {value}%
                  </div>
                  <div className="text-xs text-gray-700 mt-1">{labels[key]}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Tâches à Compléter */}
        <SectionCard
          id="tasks"
          title="Tâches pour Compléter le Dossier"
          icon={ListTodo}
          completion={file.completion.overall < 80 ? 50 : 100}
          expanded={expandedSections.has('tasks')}
          onToggle={() => toggleSection('tasks')}
        >
          <div className="space-y-6">
            {/* Tâches de l'année actuelle */}
            {currentYearTasks.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <PlayCircle className="w-6 h-6 text-blue-600" />
                  Tâches de cette année ({file.currentLevel.toUpperCase()})
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentYearTasks.slice(0, 6).map((task) => {
                    const sectionId = getTaskSection(task.category);
                    return (
                      <TaskCard
                        key={task.id}
                        task={task}
                        level={file.currentLevel}
                        status="available"
                        sectionId={sectionId}
                        onTaskClick={() => {
                          toggleSection(sectionId);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      />
                    );
                  })}
                </div>
                {currentYearTasks.length > 6 && (
                  <div className="mt-4 text-center">
                    <Link
                      to="/dashboard/student"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Voir toutes les tâches de cette année
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Tâches des années passées (à rattraper) */}
            {pastTasks.length > 0 && file.completion.overall < 80 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  Tâches des années précédentes (à rattraper)
                </h3>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
                  <p className="text-sm text-orange-800">
                    Vous avez commencé le système en {file.startLevel.toUpperCase()}. 
                    Complétez les tâches des années précédentes pour enrichir votre dossier.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {pastTasks.slice(0, 4).map((task) => {
                    const sectionId = getTaskSection(task.category);
                    return (
                      <TaskCard
                        key={task.id}
                        task={task}
                        level={task.levelId}
                        status="available"
                        sectionId={sectionId}
                        isPastYear={true}
                        onTaskClick={() => {
                          toggleSection(sectionId);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tâches des années futures (verrouillées) */}
            {futureTasks.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-gray-500" />
                  Tâches des années futures (verrouillées)
                </h3>
                <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg mb-4">
                  <p className="text-sm text-gray-700">
                    Ces tâches seront disponibles lorsque vous atteindrez les niveaux correspondants. 
                    Elles vous permettront de continuer à enrichir votre dossier d'orientation.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {futureTasks.slice(0, 9).map((task) => {
                    const levelDef = getLevelById(task.levelId);
                    return (
                      <TaskCard
                        key={task.id}
                        task={task}
                        level={task.levelId}
                        status="locked"
                        sectionId={getTaskSection(task.category)}
                        isFutureYear={true}
                        futureLevelName={levelDef?.displayName}
                        onTaskClick={() => {}}
                      />
                    );
                  })}
                </div>
                {futureTasks.length > 9 && (
                  <div className="mt-4 text-center text-sm text-gray-600">
                    + {futureTasks.length - 9} autres tâches futures
                  </div>
                )}
              </div>
            )}
          </div>
        </SectionCard>

        {/* Section 1: Informations Personnelles */}
        <SectionCard
          id="personal"
          title="1. Informations Personnelles"
          icon={User}
          completion={file.completion.sections.personalInfo}
          expanded={expandedSections.has('personal')}
          onToggle={() => toggleSection('personal')}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Photo */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg mb-4 border-4 border-blue-200">
                <img
                  src={file.personalInfo.photo}
                  alt={`${file.personalInfo.firstName} ${file.personalInfo.lastName}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Edit className="w-4 h-4" />
                Modifier la photo
              </button>
            </div>

            {/* Informations */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField label="Nom complet" value={`${file.personalInfo.firstName} ${file.personalInfo.lastName}`} icon={User} />
              <InfoField label="Nom en arabe" value={`${file.personalInfo.arabicFirstName} ${file.personalInfo.arabicLastName}`} icon={Globe} />
              <InfoField label="CNE (Massar)" value={file.personalInfo.cne} icon={FileText} />
              <InfoField label="Code Masaar" value={file.personalInfo.masaar} icon={FileText} />
              <InfoField label="Date de naissance" value={new Date(file.personalInfo.dateOfBirth).toLocaleDateString('fr-FR')} icon={Calendar} />
              <InfoField label="Lieu de naissance" value={file.personalInfo.placeOfBirth} icon={MapPin} />
              <InfoField label="Sexe" value={file.personalInfo.gender === 'male' ? 'Masculin' : 'Féminin'} icon={User} />
              <InfoField label="Nationalité" value={file.personalInfo.nationality} icon={Globe} />
              <InfoField label="Adresse" value={file.personalInfo.address} icon={MapPin} />
              <InfoField label="Ville" value={file.personalInfo.city} icon={MapPin} />
              <InfoField label="Téléphone élève" value={file.personalInfo.phone} icon={Phone} />
              <InfoField label="Téléphone parent" value={file.personalInfo.parentPhone} icon={Phone} />
              <InfoField label="Email" value={file.personalInfo.email} icon={Mail} />
            </div>
          </div>
        </SectionCard>

        {/* Section 2: Parcours Scolaire */}
        <SectionCard
          id="academic"
          title="2. Parcours Scolaire et Résultats Académiques"
          icon={GraduationCap}
          completion={file.completion.sections.academicRecords}
          expanded={expandedSections.has('academic')}
          onToggle={() => toggleSection('academic')}
        >
          <div className="space-y-6">
            {file.academicYears.map((year, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{year.year}</h3>
                    <p className="text-gray-600">{year.level.toUpperCase()} - {year.class} • {year.establishment}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-blue-600">{year.yearAverage.toFixed(2)}</div>
                    <div className="text-sm text-gray-600">Moyenne annuelle</div>
                    <div className="text-sm font-medium text-gray-700">
                      Rang: {year.yearRank}/{year.semesters[0]?.totalStudents}
                    </div>
                  </div>
                </div>

                {/* Semestres */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {year.semesters.map((sem, semIndex) => (
                    <div key={semIndex} className="bg-white rounded-lg p-4 shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-lg">Semestre {sem.semester}</h4>
                        <div className="text-2xl font-bold text-green-600">{sem.average.toFixed(2)}</div>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Rang: {sem.rank}/{sem.totalStudents}
                      </div>
                      <div className="space-y-1 max-h-48 overflow-y-auto">
                        {sem.subjects.map((subject, subIndex) => (
                          <div key={subIndex} className="flex justify-between text-sm">
                            <span className="text-gray-700">{subject.subject}</span>
                            <span className="font-semibold text-gray-900">{subject.grade.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      {sem.appreciation && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs italic text-gray-600">"{sem.appreciation}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Comportement */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-600">{year.absences || 0}</div>
                    <div className="text-xs text-gray-600">Absences</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-600">{year.lateArrivals || 0}</div>
                    <div className="text-xs text-gray-600">Retards</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center col-span-2">
                    <div className="text-lg font-bold text-green-600">
                      {year.decision === 'admitted' ? 'Admis(e)' : year.decision}
                    </div>
                    <div className="text-xs text-gray-600">Décision</div>
                  </div>
                </div>

                {/* Commentaire orientateur */}
                {year.counselorComments && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <div className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-blue-900 mb-1">Commentaire de l'orientateur</div>
                        <p className="text-sm text-blue-800">{year.counselorComments}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Section 3: Évolution des décisions d'orientation */}
        <SectionCard
          id="decisions"
          title="3. Évolution des Choix d'Orientation"
          icon={Target}
          completion={file.completion.sections.pathDecisions}
          expanded={expandedSections.has('decisions')}
          onToggle={() => toggleSection('decisions')}
        >
          <div className="space-y-4">
            {file.pathDecisions.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Aucune décision d'orientation enregistrée</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Ajouter une décision
                </button>
              </div>
            ) : (
              file.pathDecisions.map((decision, index) => (
                <div key={index} className="border-2 border-purple-200 rounded-xl p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-purple-600" />
                        <h3 className="text-xl font-bold text-gray-900">{decision.title}</h3>
                        <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">
                          {decision.level.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {new Date(decision.date).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    {decision.counselorValidation && (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Validé</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Choix principal:</div>
                      <div className="text-lg font-bold text-purple-700">{decision.choice}</div>
                    </div>

                    {decision.alternatives && decision.alternatives.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-1">Alternatives considérées:</div>
                        <div className="flex flex-wrap gap-2">
                          {decision.alternatives.map((alt, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-purple-200 rounded-full text-sm">
                              {alt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Justification:</div>
                      <p className="text-sm text-gray-700 bg-white p-3 rounded-lg">{decision.justification}</p>
                    </div>

                    {decision.counselorNotes && (
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-green-900 mb-1">Validation de l'orientateur</div>
                            <p className="text-sm text-green-800">{decision.counselorNotes}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </SectionCard>

        {/* Section 4: Tests et Profil */}
        <SectionCard
          id="tests"
          title="4. Tests d'Orientation et Profil RIASEC"
          icon={FileText}
          completion={file.completion.sections.orientationTests}
          expanded={expandedSections.has('tests')}
          onToggle={() => toggleSection('tests')}
        >
          {/* RIASEC Profile */}
          {file.riasecProfile && (
            <div className="mb-6 border-2 border-blue-200 rounded-xl p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Profil RIASEC
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {Object.entries(file.riasecProfile.scores).map(([key, value]) => {
                  const labels: Record<string, string> = {
                    realistic: 'Réaliste (R)',
                    investigative: 'Investigateur (I)',
                    artistic: 'Artistique (A)',
                    social: 'Social (S)',
                    enterprising: 'Entreprenant (E)',
                    conventional: 'Conventionnel (C)'
                  };
                  const isDominant = file.riasecProfile!.dominantTypes.includes(
                    key.charAt(0).toUpperCase() + key.slice(1)
                  );
                  return (
                    <div
                      key={key}
                      className={`p-4 rounded-lg text-center ${
                        isDominant ? 'bg-blue-600 text-white shadow-lg' : 'bg-white'
                      }`}
                    >
                      <div className={`text-3xl font-bold ${isDominant ? 'text-white' : 'text-blue-600'}`}>
                        {value}
                      </div>
                      <div className={`text-xs mt-1 ${isDominant ? 'text-blue-100' : 'text-gray-600'}`}>
                        {labels[key]}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-700 mb-2">Métiers compatibles</div>
                  <ul className="space-y-1">
                    {file.riasecProfile.compatibleCareers.slice(0, 5).map((career, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-700 mb-2">Domaines d'études</div>
                  <ul className="space-y-1">
                    {file.riasecProfile.compatibleFields.map((field, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tests List */}
          <div className="space-y-4">
            {file.orientationTests.map((test, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{test.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(test.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded">{test.level.toUpperCase()}</span>
                    </div>
                  </div>
                  {test.score && (
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">{test.score}</div>
                      <div className="text-xs text-gray-600">Score</div>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Interprétation:</div>
                    <p className="text-sm text-gray-700">{test.interpretation}</p>
                  </div>
                  {test.recommendations.length > 0 && (
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Recommandations:</div>
                      <ul className="space-y-1">
                        {test.recommendations.map((rec, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Section 5: Activités Extra-scolaires */}
        <SectionCard
          id="activities"
          title="5. Activités Extra-scolaires et Engagements"
          icon={Trophy}
          completion={file.completion.sections.extracurricular}
          expanded={expandedSections.has('activities')}
          onToggle={() => toggleSection('activities')}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {file.extracurricularActivities.map((activity) => (
              <div key={activity.id} className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{activity.title}</h4>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                      {activity.type}
                    </span>
                  </div>
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  {new Date(activity.startDate).toLocaleDateString('fr-FR')} - 
                  {activity.endDate ? new Date(activity.endDate).toLocaleDateString('fr-FR') : 'En cours'}
                </div>
                {activity.achievements && activity.achievements.length > 0 && (
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Réalisations:</div>
                    <ul className="space-y-1">
                      {activity.achievements.map((ach, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <Trophy className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activity.skillsDeveloped && (
                  <div>
                    <div className="text-xs font-semibold text-gray-700 mb-1">Compétences développées:</div>
                    <div className="flex flex-wrap gap-1">
                      {activity.skillsDeveloped.map((skill, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Section 6: Compétences et Langues */}
        <SectionCard
          id="skills"
          title="6. Compétences Transversales et Langues"
          icon={Award}
          completion={file.completion.sections.skills}
          expanded={expandedSections.has('skills')}
          onToggle={() => toggleSection('skills')}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Soft Skills */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Compétences transversales</h4>
              <div className="space-y-3">
                {file.softSkills.map((skill, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <Star
                            key={level}
                            className={`w-4 h-4 ${
                              level <= skill.level
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      Preuves: {skill.evidence.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Langues</h4>
              <div className="space-y-3">
                {file.languages.map((lang, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{lang.language}</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {lang.level}
                      </span>
                    </div>
                    {lang.certifications && lang.certifications.length > 0 && (
                      <div className="text-xs text-gray-600">
                        Certifications: {lang.certifications.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <h4 className="text-lg font-bold text-gray-900 mb-4 mt-6">Certifications</h4>
              <div className="space-y-3">
                {file.certifications.map((cert) => (
                  <div key={cert.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">{cert.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{cert.issuer} • {new Date(cert.date).toLocaleDateString('fr-FR')}</div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Section 7: Entretiens d'orientation */}
        <SectionCard
          id="counseling"
          title="7. Entretiens d'Orientation"
          icon={Users}
          completion={file.completion.sections.counseling}
          expanded={expandedSections.has('counseling')}
          onToggle={() => toggleSection('counseling')}
        >
          <div className="space-y-4">
            {file.counselingSessions.map((session) => (
              <div key={session.id} className="border-2 border-green-200 rounded-xl p-5 bg-gradient-to-r from-green-50 to-teal-50">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-5 h-5 text-green-600" />
                      <h4 className="text-lg font-bold text-gray-900">
                        Entretien avec {session.counselorName}
                      </h4>
                    </div>
                    <div className="text-sm text-gray-600">
                      {new Date(session.date).toLocaleDateString('fr-FR')} • {session.duration} minutes
                      {session.parentPresent && <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">Parent présent</span>}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Sujets abordés:</div>
                    <div className="flex flex-wrap gap-2">
                      {session.topics.map((topic, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-green-200 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Notes de l'entretien:</div>
                    <p className="text-sm text-gray-700 bg-white p-3 rounded-lg">{session.notes}</p>
                  </div>

                  {session.decisions.length > 0 && (
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Décisions prises:</div>
                      <ul className="space-y-1">
                        {session.decisions.map((dec, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{dec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {session.nextSteps.length > 0 && (
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">Prochaines étapes:</div>
                      <ul className="space-y-1">
                        {session.nextSteps.map((step, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Validation du dossier */}
        {file.counselorValidation && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Validation du Dossier d'Orientation</h3>
                <div className="text-green-100 mb-2">
                  Par {file.counselorValidation.counselorName} le {new Date(file.counselorValidation.date).toLocaleDateString('fr-FR')}
                </div>
                <p className="text-white/90 bg-white/10 p-4 rounded-lg">
                  {file.counselorValidation.comments}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper Components
interface SectionCardProps {
  id: string;
  title: string;
  icon: React.ElementType;
  completion: number;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  icon: Icon,
  completion,
  expanded,
  onToggle,
  children
}) => {
  const getColor = (percentage: number) => {
    if (percentage >= 80) return 'green';
    if (percentage >= 50) return 'orange';
    return 'red';
  };

  const color = getColor(completion);

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden mb-6 border-2 border-${color}-200`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 bg-gradient-to-r from-${color}-50 to-${color}-100 hover:from-${color}-100 hover:to-${color}-200 transition-colors`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 bg-${color}-500 rounded-xl flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <div className="text-sm text-gray-600">Complétude: {completion}%</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 relative">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                className="text-gray-200"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - completion / 100)}`}
                className={`text-${color}-500`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-sm font-bold text-${color}-700`}>{completion}%</span>
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </div>
      </button>
      {expanded && <div className="p-6">{children}</div>}
    </div>
  );
};

interface InfoFieldProps {
  label: string;
  value?: string;
  icon: React.ElementType;
}

const InfoField: React.FC<InfoFieldProps> = ({ label, value, icon: Icon }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
        <Icon className="w-4 h-4" />
        {label}
      </div>
      <div className="font-semibold text-gray-900">{value || '-'}</div>
    </div>
  );
};

interface TaskCardProps {
  task: any;
  level: string;
  status: 'available' | 'locked' | 'completed';
  sectionId: string;
  isPastYear?: boolean;
  isFutureYear?: boolean;
  futureLevelName?: string;
  onTaskClick: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  level,
  status,
  sectionId,
  isPastYear = false,
  isFutureYear = false,
  futureLevelName,
  onTaskClick
}) => {
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      test: '🧪',
      project: '📁',
      research: '🔍',
      certification: '🎓',
      engagement: '🤝',
      cv_building: '📄',
      reflection: '💭',
      game: '🎮'
    };
    return icons[category] || '📋';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      test: 'from-purple-500 to-pink-500',
      project: 'from-blue-500 to-cyan-500',
      research: 'from-emerald-500 to-teal-500',
      certification: 'from-yellow-500 to-orange-500',
      engagement: 'from-pink-500 to-rose-500',
      cv_building: 'from-orange-500 to-red-500',
      reflection: 'from-cyan-500 to-blue-500',
      game: 'from-violet-500 to-purple-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getSectionName = (sectionId: string) => {
    const names: Record<string, string> = {
      tests: 'Tests d\'Orientation',
      activities: 'Activités Extra-scolaires',
      academic: 'Parcours Scolaire',
      skills: 'Compétences',
      decisions: 'Choix d\'Orientation'
    };
    return names[sectionId] || 'Dossier';
  };

  if (status === 'locked' || isFutureYear) {
    return (
      <div className="border-2 border-gray-300 rounded-xl p-4 bg-gray-50 opacity-75 relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <Lock className="w-5 h-5 text-gray-500" />
        </div>
        <div className="flex items-start gap-3 mb-2">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(task.category)} flex items-center justify-center text-xl flex-shrink-0`}>
            {getCategoryIcon(task.category)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-gray-700 text-sm">{task.title}</h4>
              {futureLevelName && (
                <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">
                  {futureLevelName}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-600 line-clamp-2">{task.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-300">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {task.estimatedTime} min
          </div>
          <div className="text-xs text-gray-500 font-medium">
            Verrouillée
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-600 italic">
          Complétera la section: {getSectionName(sectionId)}
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onTaskClick}
      className={`border-2 rounded-xl p-4 text-left transition-all hover:shadow-lg hover:-translate-y-1 ${
        isPastYear
          ? 'border-orange-300 bg-orange-50 hover:border-orange-400'
          : 'border-blue-300 bg-blue-50 hover:border-blue-400'
      }`}
    >
      <div className="flex items-start gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(task.category)} flex items-center justify-center text-xl flex-shrink-0`}>
          {getCategoryIcon(task.category)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-gray-900 text-sm">{task.title}</h4>
            {isPastYear && (
              <span className="px-2 py-0.5 bg-orange-200 text-orange-700 text-xs rounded font-medium">
                À rattraper
              </span>
            )}
            {task.isMilestone && (
              <span className="px-2 py-0.5 bg-amber-200 text-amber-700 text-xs rounded font-medium flex items-center gap-1">
                <Star className="w-3 h-3" />
                Étape clé
              </span>
            )}
          </div>
          <p className="text-xs text-gray-700 line-clamp-2">{task.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Clock className="w-3 h-3" />
          {task.estimatedTime} min
        </div>
        <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
          Compléter
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-600 italic">
        Enrichira la section: {getSectionName(sectionId)}
      </div>
    </button>
  );
};

export default CompleteOrientationFilePage;
