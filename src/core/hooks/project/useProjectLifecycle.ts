import { useEffect } from 'react';

// TODO: maybe add more lifecycle methods in the future
export const useProjectLifecycle = (state: any) => {
  useEffect(() => {}, [state.cvData]);
};
