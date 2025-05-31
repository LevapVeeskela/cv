import { useEffect } from 'react';
import { ProjectState } from './useProjectState';
import { LOCAL_STORAGE_KEY } from '@constants';

export const useProjectLifecycle = ({ cvData, setIsMobile }: ProjectState) => {
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 900px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [setIsMobile]);
};
