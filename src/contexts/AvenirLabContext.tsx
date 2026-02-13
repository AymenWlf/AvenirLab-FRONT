import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AvenirLabLevel, StudentState, OrientationFile, AcademicCV, PersonalInfo } from '../types/avenirlab';

interface AvenirLabContextType {
  studentState: StudentState;
  currentLevel: AvenirLabLevel;
  setCurrentLevel: (level: AvenirLabLevel) => void;
  updateOrientationFile: (file: Partial<OrientationFile>) => void;
  updateAcademicCV: (cv: Partial<AcademicCV>) => void;
  completeTask: (taskId: string) => void;
  startTask: (taskId: string) => void;
  completeTest: (testId: string, result: any) => void;
  getCurrentTasks: () => string[];
  getCompletedTasks: () => string[];
  resetProgress: () => void;
}

const AvenirLabContext = createContext<AvenirLabContextType | undefined>(undefined);

const STORAGE_KEY = 'avenirlab_student_state';

// État initial par défaut
const getInitialState = (): StudentState => {
  // Charger depuis localStorage s'il existe
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading saved state:', e);
    }
  }

  // État par défaut
  const defaultPersonalInfo: PersonalInfo = {
    studentId: 'demo-student-001',
    firstName: 'Élève',
    lastName: 'Démo',
    level: '1ac',
    email: 'eleve.demo@avenirlab.ma'
  };

  return {
    studentId: 'demo-student-001',
    currentLevel: '1ac',
    orientationFile: {
      studentId: 'demo-student-001',
      currentLevel: '1ac',
      startDate: new Date().toISOString(),
      testResults: [],
      completedTasks: [],
      orientationDecisions: [],
      counselorNotes: [],
      academicCV: {
        personalInfo: defaultPersonalInfo,
        academicAchievements: [],
        projects: [],
        certifications: [],
        engagements: [],
        skills: [],
        languages: [],
        lastUpdated: new Date().toISOString()
      },
      deliverables: [],
      timeline: [],
      lastUpdated: new Date().toISOString()
    },
    preferences: {
      selectedLevel: '1ac'
    }
  };
};

export const AvenirLabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [studentState, setStudentState] = useState<StudentState>(getInitialState);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studentState));
  }, [studentState]);

  const currentLevel = studentState.preferences?.selectedLevel || studentState.currentLevel;

  const setCurrentLevel = (level: AvenirLabLevel) => {
    setStudentState(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        selectedLevel: level
      }
    }));
  };

  const updateOrientationFile = (file: Partial<OrientationFile>) => {
    setStudentState(prev => ({
      ...prev,
      orientationFile: {
        ...prev.orientationFile,
        ...file,
        lastUpdated: new Date().toISOString()
      }
    }));
  };

  const updateAcademicCV = (cv: Partial<AcademicCV>) => {
    setStudentState(prev => ({
      ...prev,
      orientationFile: {
        ...prev.orientationFile,
        academicCV: {
          ...prev.orientationFile.academicCV,
          ...cv,
          lastUpdated: new Date().toISOString()
        }
      }
    }));
  };

  const completeTask = (taskId: string) => {
    setStudentState(prev => {
      const completedTasks = [...prev.orientationFile.completedTasks];
      const exists = completedTasks.find(t => t.taskId === taskId);
      
      if (!exists) {
        completedTasks.push({
          taskId,
          completedAt: new Date().toISOString()
        });
      }

      // Ajouter à la timeline
      const timeline = [...prev.orientationFile.timeline, {
        id: `timeline_${Date.now()}`,
        date: new Date().toISOString(),
        type: 'task' as const,
        title: `Tâche complétée`,
        relatedId: taskId
      }];

      return {
        ...prev,
        orientationFile: {
          ...prev.orientationFile,
          completedTasks,
          timeline,
          lastUpdated: new Date().toISOString()
        }
      };
    });
  };

  const startTask = (taskId: string) => {
    // Pour l'instant, juste logger l'action
    // Dans une vraie implémentation, on pourrait tracker le début des tâches
    console.log('Starting task:', taskId);
  };

  const completeTest = (testId: string, result: any) => {
    setStudentState(prev => {
      const testResults = [...prev.orientationFile.testResults, {
        testId,
        completedAt: new Date().toISOString(),
        results: result
      }];

      // Ajouter à la timeline
      const timeline = [...prev.orientationFile.timeline, {
        id: `timeline_${Date.now()}`,
        date: new Date().toISOString(),
        type: 'test' as const,
        title: `Test complété`,
        relatedId: testId
      }];

      return {
        ...prev,
        orientationFile: {
          ...prev.orientationFile,
          testResults,
          timeline,
          lastUpdated: new Date().toISOString()
        }
      };
    });
  };

  const getCurrentTasks = (): string[] => {
    // Retourner les IDs des tâches en cours
    // Pour l'instant, on retourne un tableau vide
    // Dans une vraie implémentation, on pourrait tracker les tâches en cours
    return [];
  };

  const getCompletedTasks = (): string[] => {
    return studentState.orientationFile.completedTasks.map(t => t.taskId);
  };

  const resetProgress = () => {
    const newState = getInitialState();
    setStudentState(newState);
    localStorage.removeItem(STORAGE_KEY);
  };

  const value: AvenirLabContextType = {
    studentState,
    currentLevel,
    setCurrentLevel,
    updateOrientationFile,
    updateAcademicCV,
    completeTask,
    startTask,
    completeTest,
    getCurrentTasks,
    getCompletedTasks,
    resetProgress
  };

  return (
    <AvenirLabContext.Provider value={value}>
      {children}
    </AvenirLabContext.Provider>
  );
};

export const useAvenirLab = (): AvenirLabContextType => {
  const context = useContext(AvenirLabContext);
  if (context === undefined) {
    throw new Error('useAvenirLab must be used within an AvenirLabProvider');
  }
  return context;
};
