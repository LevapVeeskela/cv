import { useState } from 'react';
import { CvData } from '../../hooks/project';

export const useEditModalState = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<CvData | null>(null);
  const openModal = (initialData: CvData) => {
    setFormData(initialData);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  return { isModalOpen, formData, setFormData, openModal, closeModal };
};
