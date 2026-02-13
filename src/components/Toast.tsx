import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
}

interface ToastItemProps {
  toast: Toast;
  removeToast: (id: number) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, removeToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, toast.duration);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, removeToast]);

  const bgColor = 
    toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
    toast.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
    'bg-blue-50 border-blue-200 text-blue-800';

  const Icon = 
    toast.type === 'success' ? CheckCircle :
    toast.type === 'error' ? AlertCircle :
    Info;

  return (
    <div
      className={`${bgColor} border rounded-lg shadow-lg p-4 flex items-start gap-3 min-w-[300px] max-w-md animate-slide-in-right`}
    >
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button
        onClick={() => removeToast(toast.id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

interface ToastProps {
  toasts: Toast[];
  removeToast: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  );
};

export default Toast;
