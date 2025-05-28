import { useEffect } from 'react';

export const useEditModalLifecycle = (state: any, handlers: any) => {
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
