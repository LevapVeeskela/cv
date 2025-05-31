import { useEffect } from 'react';
import { LOCAL_STORAGE_KEY } from '@constants';
import { ProjectState } from './useProjectState';

export const useProjectLifecycle = ({ cvData }: ProjectState) => {
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cvData));
  }, [cvData]);
};
