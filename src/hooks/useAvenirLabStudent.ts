import { useMemo } from 'react';
import { useAvenirLab } from '../contexts/AvenirLabContext';
import { TaskWithStatus, TestWithStatus, LevelProgress, TaskStatus } from '../types/avenirlab';
import { getTasksByLevel, getMandatoryTasks, getComplementaryTasks } from '../data/avenirlab/tasks';
import { getTestsByLevel } from '../data/avenirlab/tests';

export const useAvenirLabStudent = () => {
  const {
    studentState,
    currentLevel,
    setCurrentLevel,
    completeTask,
    startTask,
    completeTest,
    getCompletedTasks,
    getCurrentTasks,
    updateOrientationFile,
    updateAcademicCV,
    resetProgress
  } = useAvenirLab();

  const completedTaskIds = useMemo(() => getCompletedTasks(), [getCompletedTasks]);
  const currentTaskIds = useMemo(() => getCurrentTasks(), [getCurrentTasks]);

  // Déterminer le statut d'une tâche
  const getTaskStatus = (taskId: string, prerequisites?: string[]): TaskStatus => {
    if (completedTaskIds.includes(taskId)) {
      return 'completed';
    }
    if (currentTaskIds.includes(taskId)) {
      return 'in_progress';
    }
    
    // Vérifier les prérequis
    if (prerequisites && prerequisites.length > 0) {
      const allPrerequisitesMet = prerequisites.every(prereqId => completedTaskIds.includes(prereqId));
      if (!allPrerequisitesMet) {
        return 'locked';
      }
    }
    
    return 'available';
  };

  // Obtenir les tâches avec leur statut
  const tasksWithStatus = useMemo((): TaskWithStatus[] => {
    const tasks = getTasksByLevel(currentLevel);
    return tasks
      .sort((a, b) => a.order - b.order)
      .map(task => ({
        ...task,
        status: getTaskStatus(task.id, task.prerequisites),
        completedAt: studentState.orientationFile.completedTasks.find(t => t.taskId === task.id)?.completedAt
      }));
  }, [currentLevel, completedTaskIds, currentTaskIds, studentState.orientationFile.completedTasks]);

  // Obtenir les tâches obligatoires avec statut
  const mandatoryTasksWithStatus = useMemo((): TaskWithStatus[] => {
    return tasksWithStatus.filter(task => task.type === 'mandatory');
  }, [tasksWithStatus]);

  // Obtenir les tâches complémentaires avec statut
  const complementaryTasksWithStatus = useMemo((): TaskWithStatus[] => {
    return tasksWithStatus.filter(task => task.type === 'complementary');
  }, [tasksWithStatus]);

  // Obtenir les tests avec leur statut
  const testsWithStatus = useMemo((): TestWithStatus[] => {
    const tests = getTestsByLevel(currentLevel);
    return tests.map(test => {
      const result = studentState.orientationFile.testResults.find(r => r.testId === test.id);
      return {
        ...test,
        completed: !!result,
        completedAt: result?.completedAt,
        result
      };
    });
  }, [currentLevel, studentState.orientationFile.testResults]);

  // Calculer la progression du niveau actuel
  const levelProgress = useMemo((): LevelProgress => {
    const mandatory = mandatoryTasksWithStatus;
    const complementary = complementaryTasksWithStatus;
    const tests = testsWithStatus;

    const mandatoryCompleted = mandatory.filter(t => t.status === 'completed').length;
    const mandatoryInProgress = mandatory.filter(t => t.status === 'in_progress').length;
    const complementaryCompleted = complementary.filter(t => t.status === 'completed').length;
    const complementaryInProgress = complementary.filter(t => t.status === 'in_progress').length;
    const testsCompleted = tests.filter(t => t.completed).length;

    // La progression prend en compte surtout les tâches obligatoires + tests
    const totalMandatory = mandatory.length + tests.length;
    const completedMandatory = mandatoryCompleted + testsCompleted;
    const completionRate = totalMandatory > 0 ? Math.round((completedMandatory / totalMandatory) * 100) : 0;

    return {
      level: currentLevel,
      mandatoryTasks: {
        total: mandatory.length,
        completed: mandatoryCompleted,
        inProgress: mandatoryInProgress
      },
      complementaryTasks: {
        total: complementary.length,
        completed: complementaryCompleted,
        inProgress: complementaryInProgress
      },
      testsCompleted,
      testsTotal: tests.length,
      completionRate
    };
  }, [mandatoryTasksWithStatus, complementaryTasksWithStatus, testsWithStatus, currentLevel]);

  // Actions
  const handleStartTask = (taskId: string) => {
    startTask(taskId);
    // Optionnel : rediriger vers la page de la tâche
  };

  const handleCompleteTask = (taskId: string) => {
    completeTask(taskId);
  };

  const handleCompleteTest = (testId: string, result: any) => {
    completeTest(testId, result);
  };

  return {
    // État
    studentState,
    currentLevel,
    orientationFile: studentState.orientationFile,
    academicCV: studentState.orientationFile.academicCV,
    
    // Tâches
    mandatoryTasks: mandatoryTasksWithStatus,
    complementaryTasks: complementaryTasksWithStatus,
    allTasks: tasksWithStatus,
    
    // Tests
    tests: testsWithStatus,
    
    // Progression
    levelProgress,
    
    // Actions
    setCurrentLevel,
    handleStartTask,
    handleCompleteTask,
    handleCompleteTest,
    updateOrientationFile,
    updateAcademicCV,
    resetProgress
  };
};
