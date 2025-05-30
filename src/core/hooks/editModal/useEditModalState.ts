import { useState } from 'react';
import { CvData } from '../../hooks/project';

export const useEditModalState = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<CvData | null>(null);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);

  const openModal = (initialData: CvData) => {
    setFormData(initialData);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setFormData(null);
    setShowCloseConfirm(false);
  };
  const showCloseConfirmDialog = () => setShowCloseConfirm(true);
  const hideCloseConfirmDialog = () => setShowCloseConfirm(false);

  return {
    isModalOpen,
    formData,
    setFormData,
    openModal,
    closeModal,
    showCloseConfirm,
    showCloseConfirmDialog,
    hideCloseConfirmDialog,
  };
};
