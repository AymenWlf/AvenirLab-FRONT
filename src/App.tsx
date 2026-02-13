import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import { DashboardProvider } from './contexts/DashboardContext';
import { AvenirLabProvider } from './contexts/AvenirLabContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectedRoute';
import Toast from './components/Toast';
import { useToastContext } from './contexts/ToastContext';

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

// Student pages (AvenirLab)
const StudentDashboardPage = lazy(() => import('./pages/student/StudentDashboardPage'));
const AcademicCVPage = lazy(() => import('./pages/student/AcademicCVPage'));
const OrientationFilePage = lazy(() => import('./pages/student/OrientationFilePage'));
const CompleteOrientationFilePage = lazy(() => import('./pages/orientation/CompleteOrientationFilePage'));

const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToastContext();
  return <Toast toasts={toasts} removeToast={removeToast} />;
};

function AppContent() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Routes - Landing Page with Header/Footer */}
          <Route
            path="/"
            element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  <LandingPage />
                </main>
                <Footer />
              </div>
            }
          />

          {/* Auth Routes - No Header/Footer */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Dashboard Routes - Accessible sans authentification (mode démo) */}
          <Route
            path="/dashboard/*"
            element={
              <DashboardProvider>
                <DashboardLayout />
              </DashboardProvider>
            }
          >
            <Route index element={<DashboardPage />} />
            {/* Student Dashboard Routes - AvenirLab System */}
            <Route path="student" element={<StudentDashboardPage />} />
            <Route path="student/cv" element={<AcademicCVPage />} />
            <Route path="student/dossier" element={<OrientationFilePage />} />
            <Route path="orientation/complete-file" element={<CompleteOrientationFilePage />} />
            {/* Add more dashboard routes here as needed */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>

          {/* Catch all - Redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Router>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ToastProvider>
          <AvenirLabProvider>
            <AppContent />
          </AvenirLabProvider>
        </ToastProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
