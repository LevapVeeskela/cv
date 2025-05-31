import { useState } from 'react';
import {
  DEFAULT_CV_DATA,
  LOCAL_STORAGE_KEY,
  ORDER_STORAGE_KEY,
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

  // --- Сохраняем порядок секций в localStorage ---
  const getDefaultOrder = () => ({
    left: [...LEFT_SECTIONS],
    right: [...RIGHT_SECTIONS],
  });
  const getStoredOrder = () => {
    const stored = localStorage.getItem(ORDER_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          left: Array.isArray(parsed.left)
            ? parsed.left
                .map((k: any) => String(k))
                .filter((k: any) => LEFT_SECTIONS.includes(k as any))
            : [...LEFT_SECTIONS],
          right: Array.isArray(parsed.right)
            ? parsed.right
                .map((k: any) => String(k))
                .filter((k: any) => RIGHT_SECTIONS.includes(k as any))
            : [...RIGHT_SECTIONS],
        };
      } catch {
        return getDefaultOrder();
      }
    }
    return getDefaultOrder();
  };

  const [leftOrder, setLeftOrder] = useState<LeftSectionKey[]>(
    getStoredOrder().left,
  );
  const [rightOrder, setRightOrder] = useState<RightSectionKey[]>(
    getStoredOrder().right,
  );
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
