import { ProjectState } from './useProjectState';

export const useProjectHandlers = (state: ProjectState) => {
  // Удаляет указанный раздел из cvData
  const handleClearSection = (section: string) => {
    state.setCvData((prev: any) => {
      const updated = { ...prev };
      delete updated[section];
      return updated;
    });
  };
  return { handleClearSection };
};

export type ProjectHandlers = ReturnType<typeof useProjectHandlers>;
