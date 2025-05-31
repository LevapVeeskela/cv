import { useState } from 'react';
import {
  DEFAULT_CV_DATA,
  LOCAL_STORAGE_KEY,
  LEFT_SECTIONS,
  RIGHT_SECTIONS,
  LeftSectionKey,
  RightSectionKey,
} from '@constants';

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

  const [isDragMode, setIsDragMode] = useState(false);
  const [leftOrder, setLeftOrder] = useState<LeftSectionKey[]>([
    ...LEFT_SECTIONS,
  ]);
  const [rightOrder, setRightOrder] = useState<RightSectionKey[]>([
    ...RIGHT_SECTIONS,
  ]);
  const [isMobile, setIsMobile] = useState(false);

  return {
    cvData,
    setCvData,
    isDragMode,
    setIsDragMode,
    leftOrder,
    setLeftOrder,
    rightOrder,
    setRightOrder,
    isMobile,
    setIsMobile,
  };
};

export type ProjectState = ReturnType<typeof useProjectState>;
