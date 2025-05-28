import React, { createContext, PropsWithChildren, useContext } from 'react';
import {
  CvData,
  useProjectState,
  // useProjectHandlers,
  // useProjectLifecycle,
} from '../hooks/project';

type ProjectContextType = {
  cvData: CvData;
  setCvData: React.Dispatch<React.SetStateAction<CvData>>;
};

export const ProjectContext = createContext<ProjectContextType>(
  {} as ProjectContextType,
);
export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }: PropsWithChildren) => {
  const { cvData, setCvData } = useProjectState();
  // const handlers = useProjectHandlers(state);
  // useProjectLifecycle(state);

  return (
    <ProjectContext.Provider value={{ cvData, setCvData }}>
      {children}
    </ProjectContext.Provider>
  );
};
