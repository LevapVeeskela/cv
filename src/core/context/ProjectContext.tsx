import React, { createContext, PropsWithChildren, useContext } from 'react';
import {
  ProjectHandlers,
  ProjectState,
  useProjectState,
  useProjectHandlers,
  useProjectLifecycle,
} from '../hooks/project';

export type ProjectContextType = ProjectState & ProjectHandlers;
//  & {
//   resetCvData: () => void;
//   handleDragEnd: (event: any) => void;
// };

export const ProjectContext = createContext<ProjectContextType>(
  {} as ProjectContextType,
);
export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }: PropsWithChildren) => {
  const state = useProjectState();
  const handlers = useProjectHandlers(state);
  useProjectLifecycle(state);

  return (
    <ProjectContext.Provider value={{ ...state, ...handlers }}>
      {children}
    </ProjectContext.Provider>
  );
};
