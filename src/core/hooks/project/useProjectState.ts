import { useState } from 'react';
import { DEFAULT_CV_DATA, LOCAL_STORAGE_KEY } from '@constants';

export const useProjectState = () => {
  const [cvData, setCvData] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return DEFAULT_CV_DATA;
      }
    }
    return DEFAULT_CV_DATA;
  });

  return { cvData, setCvData };
};

export type ProjectState = ReturnType<typeof useProjectState>;
