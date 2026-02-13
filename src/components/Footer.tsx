import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                AvenirLab
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Le système d'orientation scolaire structuré du collège au baccalauréat pour les écoles marocaines.
            </p>
            <div className="flex gap-3">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solution" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Le système
                </a>
              </li>
              <li>
                <a href="#publics" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pour qui ?
                </a>
              </li>
              <li>
                <a href="#fonctionnement" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Fonctionnement
                </a>
              </li>
              <li>
                <a href="#modules" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#mobile" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Application mobile
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#ecoles" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Écoles partenaires
                </a>
              </li>
              <li>
                <a href="#partenaires" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Partenaires stratégiques
                </a>
              </li>
              <li>
                <a href="#medias" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Médias & Presse
                </a>
              </li>
              <li>
                <a href="#evenements" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Événements
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Témoignages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${siteData.contact.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${siteData.contact.email}`} className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  {siteData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {siteData.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} AvenirLab. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
