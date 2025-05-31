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
          left: Array.isArray(parsed.left) ? parsed.left : [...LEFT_SECTIONS],
          right: Array.isArray(parsed.right)
            ? parsed.right
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

  // Сохраняем порядок при изменении
  const saveOrder = (left: LeftSectionKey[], right: RightSectionKey[]) => {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify({ left, right }));
  };

  // Обновляем localStorage при изменении порядка
  const setLeftOrderWithSave = (order: LeftSectionKey[]) => {
    setLeftOrder(order);
    saveOrder(order, rightOrder);
  };
  const setRightOrderWithSave = (order: RightSectionKey[]) => {
    setRightOrder(order);
    saveOrder(leftOrder, order);
  };

  // Сброс порядка к дефолту
  const resetOrder = () => {
    setLeftOrder([...LEFT_SECTIONS]);
    setRightOrder([...RIGHT_SECTIONS]);
    saveOrder([...LEFT_SECTIONS], [...RIGHT_SECTIONS]);
  };

  return {
    cvData,
    setCvData,
    isDragMode,
    setIsDragMode,
    leftOrder,
    setLeftOrder: setLeftOrderWithSave,
    rightOrder,
    setRightOrder: setRightOrderWithSave,
    isMobile,
    setIsMobile,
    resetOrder,
  };
};

export type ProjectState = ReturnType<typeof useProjectState>;
