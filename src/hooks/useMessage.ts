import { useState, useCallback } from 'react';

export const useMessage = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'error' | 'success' | 'info'>('success');

  const showMessage = useCallback((msg: string, type: 'error' | 'success' | 'info') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(null), 3000);
  }, []);

  return {
    message,
    messageType,
    showMessage,
  };
};