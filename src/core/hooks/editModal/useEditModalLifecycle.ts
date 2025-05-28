import { useEffect } from 'react';

export const useEditModalLifecycle = (state: any, handlers: any) => {
  // Пример жизненного цикла: сброс editData при закрытии модалки
  useEffect(() => {
    if (!state.isModalOpen) {
      // Можно добавить сброс editData или другую логику
    }
  }, [state.isModalOpen]);

  useEffect(() => {
    if (!state.isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        state.closeModal();
      } else if (
        e.key === 'Enter' &&
        (e.target as HTMLElement).tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        handlers.handleApply();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [state.isModalOpen, state.formData]);
};
