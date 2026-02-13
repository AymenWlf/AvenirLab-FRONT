import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  TrendingUp,
  AlertCircle,
  Target,
  Brain,
  BarChart3,
  BookOpen,
  Smartphone,
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Play,
  Award,
  Lightbulb,
  FileText,
  Building2,
  UserCheck,
  Star,
  Handshake,
  Sparkles,
  Camera,
  Quote,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { siteData } from '../data/siteData';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AvenirLab - Système d'orientation scolaire du collège au bac | Maroc</title>
        <meta 
          name="description" 
          content="AvenirLab accompagne les écoles marocaines dans la structuration de l'orientation scolaire du collège au baccalauréat avec tests, outils pour orientateurs, et suivi personnalisé." 
        />
        <meta 
          name="keywords" 
          content="orientation scolaire maroc, système orientation, tests orientation, orientateur école, collège lycée bac" 
        />
        <link rel="canonical" href="https://avenirlab.ma" />
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">Technologie & Intelligence des données</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">AvenirLab</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  L'orientation scolaire structurée
                </span>
                <br />
                <span className="text-gray-800">du collège au baccalauréat</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Un système complet d'accompagnement pour les écoles marocaines, les élèves et leurs familles. 
                Structurez l'orientation avec des outils concrets, des données objectives et un suivi longitudinal.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/dashboard"
                  className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Voir le Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#solution"
                  className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border-2 border-gray-200"
                >
                  Découvrir le système
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="group bg-white hover:bg-gray-50 text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Demander une démo
                  <Play className="w-5 h-5" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{siteData.stats.students}</div>
                  <div className="text-sm text-gray-600">{siteData.stats.studentsDesc}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{siteData.stats.schools}</div>
                  <div className="text-sm text-gray-600">{siteData.stats.schoolsDesc}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{siteData.stats.satisfaction}</div>
                  <div className="text-sm text-gray-600">{siteData.stats.satisfactionDesc}</div>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration/Mockup */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                {/* Dashboard Mockup Placeholder */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="h-3 bg-gray-200 rounded w-32 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 rounded-full">
                      <div className="h-2 bg-emerald-600 rounded w-16"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                        <div className="h-2 bg-gray-300 rounded w-12 mb-3"></div>
                        <div className="h-6 bg-gray-400 rounded w-16 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <div className="h-2 bg-purple-300 rounded w-32"></div>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <div className="h-2 bg-gray-300 rounded flex-1"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                  ✨ IA intégrée
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#probleme" className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="text-sm font-medium">Découvrir</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </div>
      </section>

      {/* Problème Section */}
      <section id="probleme" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-bold text-red-600">PROBLÉMATIQUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">La problématique actuelle de</span>
              <br />
              <span className="text-blue-800">l'orientation au Maroc</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un constat partagé par les établissements, les orientateurs et les familles
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {siteData.problems.map((problem) => (
              <div
                key={problem.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-600">LA SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">AvenirLab : Un système complet</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                d'orientation structurée
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AvenirLab est un système d'orientation scolaire conçu pour structurer, suivre et accompagner 
              l'orientation des élèves du collège jusqu'à la dernière année du baccalauréat.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.pillars.map((pillar, index) => {
              const icons = [Target, Brain, BarChart3, FileText, Users, Shield];
              const Icon = icons[index % icons.length];
              const colors = [
                { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
                { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
                { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
                { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200' },
                { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
                { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' }
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-14 h-14 ${color.bg} rounded-xl flex items-center justify-center mb-4 border ${color.border}`}>
                    <Icon className={`w-7 h-7 ${color.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="#publics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Découvrir pour qui
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Publics Section */}
      <section id="publics" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-600">POUR QUI ?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Un système pour</span>
              <br />
              <span className="text-blue-800">tous les acteurs de l'orientation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AvenirLab s'adapte aux besoins de chaque utilisateur pour une orientation collaborative et efficace
            </p>
          </div>

          {/* Publics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.publics.map((public_, index) => {
              const icons = [Building2, Target, GraduationCap, Users, UserCheck, Shield];
              const Icon = icons[index % icons.length];
              
              return (
                <div
                  key={public_.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{public_.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{public_.description}</p>
                  <ul className="space-y-2">
                    {public_.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fonctionnement Section */}
      <section id="fonctionnement" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 border border-cyan-200 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600">COMMENT ÇA FONCTIONNE ?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Une orientation</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                progressive et structurée
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un parcours pédagogique adapté à chaque niveau scolaire, du collège au baccalauréat
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-emerald-600 to-cyan-600 hidden md:block"></div>

            {/* Phases */}
            <div className="space-y-12">
              {siteData.phases.map((phase, index) => {
                const phaseColors = [
                  { badge: 'bg-blue-600', dot: 'bg-blue-600', border: 'border-blue-200' },
                  { badge: 'bg-emerald-600', dot: 'bg-emerald-600', border: 'border-emerald-200' },
                  { badge: 'bg-cyan-600', dot: 'bg-cyan-600', border: 'border-cyan-200' }
                ];
                const color = phaseColors[index % phaseColors.length];

                return (
                  <div key={phase.id} className="relative">
                    {/* Dot */}
                    <div className="absolute left-0 top-0 w-16 h-16 hidden md:flex items-center justify-center">
                      <div className={`w-10 h-10 ${color.dot} rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:ml-24">
                      <div className={`bg-white rounded-2xl shadow-xl border-2 ${color.border} p-8`}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className={`inline-block ${color.badge} text-white px-4 py-2 rounded-full text-sm font-bold mb-3`}>
                              {phase.level}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.subtitle}</h3>
                            <p className="text-lg text-gray-600">{phase.objectives}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-blue-600" />
                              Outils disponibles
                            </h4>
                            <ul className="space-y-2">
                              {phase.tools.map((tool, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-gray-700">{tool}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-purple-600" />
                                Rôle de l'orientateur
                              </h4>
                              <p className="text-sm text-gray-700">{phase.role}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-emerald-600" />
                                Livrables
                              </h4>
                              <p className="text-sm text-gray-700">{phase.deliverables}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-purple-600">MODULES DU SYSTÈME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Des outils complets</span>
              <br />
              <span className="text-blue-800">pour tous les besoins</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une suite intégrée de fonctionnalités pour structurer, suivre et optimiser l'orientation scolaire
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siteData.modules.map((module, index) => {
              const icons = [Brain, Target, FileText, BarChart3, Users, BookOpen, TrendingUp, Smartphone, AlertCircle, Award];
              const Icon = icons[index % icons.length];
              
              return (
                <div
                  key={module.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">{module.title}</h3>
                    {module.aiPowered && (
                      <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        IA
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Mobile Section */}
      <section id="mobile" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 border border-cyan-200 rounded-full mb-6">
                <Smartphone className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-bold text-cyan-600">APPLICATION MOBILE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gray-900">L'orientation</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  dans votre poche
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Accédez à tous les outils AvenirLab depuis votre smartphone. Disponible sur iOS et Android 
                pour élèves, parents, orientateurs et direction.
              </p>

              {/* Features Grid */}
              <div className="space-y-4 mb-8">
                {siteData.mobileFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-black hover:bg-gray-900 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#FFFFFF" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-white/70 leading-none">Disponible sur</span>
                    <span className="text-base font-semibold text-white leading-tight">Google Play</span>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-black hover:bg-gray-900 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#FFFFFF" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-white/70 leading-none">Télécharger sur</span>
                    <span className="text-base font-semibold text-white leading-tight">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-64 sm:w-72 md:w-80 h-[500px] sm:h-[600px] md:h-[650px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="h-2 bg-gray-300 rounded w-24 mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded w-16"></div>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2].map((i) => (
                          <div key={i} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                            <div className="h-2 bg-blue-200 rounded w-16 mb-2"></div>
                            <div className="h-5 bg-blue-400 rounded w-12 mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded w-20"></div>
                          </div>
                        ))}
                      </div>

                      {/* Progress Card */}
                      <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-4 border border-emerald-100">
                        <div className="h-2 bg-emerald-300 rounded w-24 mb-3"></div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                              <div className="h-2 bg-emerald-200 rounded flex-1"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activity Cards */}
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
                              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologie Section */}
      <section id="technologie" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
              <Brain className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-purple-600">TECHNOLOGIE & IA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Un système moderne</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                et évolutif
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AvenirLab utilise les dernières technologies pour faciliter l'orientation et la prise de décision
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {siteData.technologies.map((tech, index) => {
              const techIcons = {
                brain: Brain,
                chart: BarChart3,
                timeline: TrendingUp,
                briefcase: Target
              };
              const Icon = techIcons[tech.icon as keyof typeof techIcons] || Brain;

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl shadow-lg border border-purple-100 p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              );
            })}
          </div>

          {/* Security Section */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-4">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-600">SÉCURITÉ & CONFORMITÉ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Vos données en toute sécurité
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                La protection des données des élèves et des établissements est notre priorité absolue
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {siteData.security.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Écoles Partenaires Section */}
      <section id="ecoles" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-600">NOS ÉCOLES PARTENAIRES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gray-900">Ils nous font</span>{' '}
              <span className="text-blue-800">confiance</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des établissements publics et privés à travers le Maroc utilisent AvenirLab
            </p>
          </div>

          {/* Schools Logos Grid - Desktop */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {siteData.schools.map((school) => (
              <div
                key={school.id}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center h-32"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-gray-700">{school.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Schools Scroll - Mobile */}
          <div className="md:hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
              {siteData.schools.map((school) => (
                <div
                  key={school.id}
                  className="flex-shrink-0 w-48 bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center h-32"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl mb-2 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-gray-700 text-center">{school.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Rejoindre le réseau
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Partenaires Stratégiques Section */}
      <section id="partenaires" className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
              <Handshake className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-600">PARTENAIRES STRATÉGIQUES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gray-900">Nos</span>{' '}
              <span className="text-emerald-800">partenaires institutionnels</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec des institutions et organisations de confiance
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteData.partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center h-40"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                    <Handshake className="w-10 h-10 text-emerald-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Médias Section */}
      <section id="medias" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 border border-cyan-200 rounded-full mb-6">
              <Play className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600">MÉDIAS & PRESSE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">AvenirLab</span>{' '}
              <span className="text-blue-800">dans les médias</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos interventions dans la presse et les médias marocains
            </p>
          </div>

          {/* Media Cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {siteData.media.map((media) => (
              <div
                key={media.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Logo Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mb-4 flex items-center justify-center">
                  <Play className="w-10 h-10 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{media.name}</h3>

                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{media.date}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{media.excerpt}</p>

                <a
                  href={media.videoUrl}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Voir l'interview
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements Section */}
      <section id="evenements" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-bold text-orange-600">NOS ÉVÉNEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Participez à nos</span>{' '}
              <span className="text-orange-800">événements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Forums, formations et journées de découverte d'AvenirLab
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {siteData.events.map((event) => {
              const eventDate = new Date(event.date);
              const isPast = eventDate < new Date();

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Gallery Placeholder */}
                  <div className="relative h-56 bg-gradient-to-br from-orange-100 via-blue-100 to-emerald-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-2 p-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Camera className="w-8 h-8 text-gray-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.images.length} photos
                    </div>
                    {isPast && (
                      <div className="absolute top-2 left-2 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Événement passé
                      </div>
                    )}
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-orange-600">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold text-xs">
                          {eventDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium text-xs">{event.city}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                    {!isPast && (
                      <a
                        href={event.registrationUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        S'inscrire
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
              <Star className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-600">TÉMOIGNAGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Ce qu'ils disent</span>{' '}
              <span className="text-blue-800">d'AvenirLab</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Directeurs, orientateurs, parents et élèves témoignent de leur expérience
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {siteData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.school}</p>
                  </div>
                  <Quote className="w-8 h-8 text-blue-200" />
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi AvenirLab Section */}
      <section id="pourquoi" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-600">POURQUOI AVENIRLAB ?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Les avantages</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                d'AvenirLab
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un système pensé pour répondre aux besoins réels de l'orientation au Maroc
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.advantages.map((advantage, index) => {
              const icons = [Target, BarChart3, Users, TrendingUp, MapPin, Smartphone];
              const Icon = icons[index % icons.length];
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-emerald-500 to-green-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-cyan-500 to-blue-500',
                'from-pink-500 to-purple-500'
              ];
              const gradient = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-600">CONTACTEZ-NOUS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Structurez l'orientation</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                dans votre établissement
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment AvenirLab peut transformer l'orientation dans votre école
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demander une démonstration</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'établissement *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Lycée Mohammed V"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du contact *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ahmed Benali"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fonction *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez votre fonction</option>
                    <option value="directeur">Directeur/Directrice</option>
                    <option value="orientateur">Orientateur/Orientatrice</option>
                    <option value="responsable">Responsable pédagogique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="contact@ecole.ma"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+212 6 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Parlez-nous de vos besoins en orientation..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Envoyer la demande
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Téléphone</h4>
                  <a href={`tel:${siteData.contact.phone}`} className="text-blue-600 hover:text-blue-700">
                    {siteData.contact.phone}
                  </a>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <a href={`mailto:${siteData.contact.email}`} className="text-emerald-600 hover:text-emerald-700 text-sm">
                    {siteData.contact.email}
                  </a>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                  <p className="text-gray-600 text-sm">{siteData.contact.address}</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <a href={`https://wa.me/${siteData.contact.whatsapp.replace(/\s/g, '')}`} className="text-cyan-600 hover:text-cyan-700">
                    {siteData.contact.whatsapp}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-80">
                <iframe
                  src={siteData.contact.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation AvenirLab"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl shadow-xl p-6">
                <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  <a
                    href={siteData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={siteData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={siteData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={siteData.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
